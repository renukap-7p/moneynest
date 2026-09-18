import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";

import Home from "./pages/Home.jsx";
import Loans from "./pages/loans/Loans.jsx";
import LoanDetail from "./pages/loans/LoanDetail.jsx";
import Investments from "./pages/Investments.jsx";
import Insurance from "./pages/Insurance.jsx";
import Property from "./pages/Property.jsx";
import EmiCalculator from "./pages/EmiCalculator.jsx";
import CreditChecker from "./pages/CreditChecker.jsx";
import Documents from "./pages/Documents.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Profile from "./pages/Profile.jsx";
import AdminLogin from "./pages/admin/AdminLogin.jsx";
import AdminDashboard from "./pages/admin/AdminDashboard.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/loans" element={<Loans />} />
          <Route path="/loans/:slug" element={<LoanDetail />} />
          <Route path="/investments" element={<Investments />} />
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/property" element={<Property />} />
          <Route path="/emi-calculator" element={<EmiCalculator />} />
          <Route path="/credit-checker" element={<CreditChecker />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
