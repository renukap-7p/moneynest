import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import TrustProcess from "./TrustProcess.jsx";
import ScrollLoginPrompt from "./ScrollLoginPrompt.jsx";
import FloatingButtons from "./FloatingButtons.jsx";

export default function Layout({ children, showTrustProcess = true }) {
  return (
    <div className="site">
      <Navbar />
      <main>{children}</main>
      {showTrustProcess && <TrustProcess />}
      <Footer />
      <ScrollLoginPrompt />
      <FloatingButtons />
    </div>
  );
}
