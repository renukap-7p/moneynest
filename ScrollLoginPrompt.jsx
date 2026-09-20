import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

const TRIGGER_MS = 3 * 60 * 1000; // 3 minutes
const DISMISS_KEY = "moneynest_scroll_prompt_shown";
const EXCLUDED_PREFIXES = ["/login", "/signup", "/admin"];

export default function ScrollLoginPrompt() {
  const [visible, setVisible] = useState(false);
  const { currentUser } = useAuth();
  const location = useLocation();
  const timerStarted = useRef(false);
  const timeoutRef = useRef(null);

  const excluded = EXCLUDED_PREFIXES.some((p) => location.pathname.startsWith(p));
  const alreadyShown = sessionStorage.getItem(DISMISS_KEY) === "true";

  useEffect(() => {
    if (currentUser || excluded || alreadyShown) return;

    function handleScroll() {
      if (timerStarted.current) return;
      timerStarted.current = true;
      timeoutRef.current = setTimeout(() => {
        setVisible(true);
        sessionStorage.setItem(DISMISS_KEY, "true");
      }, TRIGGER_MS);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser, excluded, alreadyShown]);

  if (!visible) return null;

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="scroll-prompt-title">
      <div className="modal-panel">
        <button className="modal-close" aria-label="Close" onClick={() => setVisible(false)}>×</button>
        <span className="eyebrow-plain">Still browsing?</span>
        <h3 id="scroll-prompt-title">Save your progress with a free account</h3>
        <p>
          Create an account and we'll keep your loan matches, EMI estimates, and
          document checklist together in one place.
        </p>
        <div className="modal-actions">
          <Link to="/signup" className="btn btn-gold btn-block" onClick={() => setVisible(false)}>
            Create free account
          </Link>
          <Link to="/login" className="btn btn-outline btn-block" onClick={() => setVisible(false)}>
            I already have an account
          </Link>
          <button className="modal-later" onClick={() => setVisible(false)}>Maybe later</button>
        </div>
      </div>
    </div>
  );
}
