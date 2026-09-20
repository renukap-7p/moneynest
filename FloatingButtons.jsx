import { Link } from "react-router-dom";

const WHATSAPP_NUMBER = "917387988539";

export default function FloatingButtons() {
  return (
    <>
      <a
        className="fab fab-whatsapp"
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noreferrer"
      >
        💬 Chat on WhatsApp
      </a>
      <Link className="fab fab-advisor" to="/contact">
        🦊 Ask MoneyNest Advisor
      </Link>
    </>
  );
}
