import { Link } from "react-router-dom";
import Layout from "../components/Layout.jsx";

export default function NotFound() {
  return (
    <Layout showTrustProcess={false}>
      <section className="section" style={{ textAlign: "center" }}>
        <div className="container">
          <h1>Page not found</h1>
          <p>The page you're looking for doesn't exist or has moved.</p>
          <Link to="/" className="btn btn-gold">Back to home</Link>
        </div>
      </section>
    </Layout>
  );
}
