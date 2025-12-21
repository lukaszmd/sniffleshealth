import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Symptoms from "./pages/Symptoms";
import MedicalProfile from "./pages/MedicalProfile";
import SummaryConsultation from "./pages/SummaryConsultation";
import Consultation from "./pages/Consultation";
import SelectConsultationType from "./pages/SelectConsultationType";
import PaymentConfirmation from "./pages/PaymentConfirmation";
import HIPAACompliance from "./pages/HIPAACompliance";
import KYC from "./pages/KYC";
import AddressDetails from "./pages/AddressDetails";
import FindingDoctor from "./pages/FindingDoctor";
import DoctorChat from "./pages/DoctorChat";
import Prescription from "./pages/Prescription";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/symptoms" element={<Symptoms />} />
          <Route path="/medical-profile" element={<MedicalProfile />} />
          <Route path="/summary" element={<SummaryConsultation />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route
            path="/select-consultation-type"
            element={<SelectConsultationType />}
          />
          <Route
            path="/payment-confirmation"
            element={<PaymentConfirmation />}
          />
          <Route path="/hipaa-compliance" element={<HIPAACompliance />} />
          <Route path="/kyc" element={<KYC />} />
          <Route path="/address-details" element={<AddressDetails />} />
          <Route path="/finding-doctor" element={<FindingDoctor />} />
          <Route path="/doctor-chat" element={<DoctorChat />} />
          <Route path="/prescription" element={<Prescription />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
