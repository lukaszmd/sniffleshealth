import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ROUTES } from "@/constants";
import Index from "./pages/Index";
import {
  Symptoms,
  MedicalProfile,
  SummaryConsultation,
  Consultation,
} from "@/features/consultation/pages";
import {
  SelectConsultationType,
  PaymentConfirmation,
} from "@/features/payment/pages";
import HIPAACompliance from "./pages/HIPAACompliance";
import { KYC, AddressDetails, Dashboard } from "@/features/user/pages";
import { FindingDoctor, DoctorChat } from "@/features/doctor/pages";
import Prescription from "./pages/Prescription";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.HOME} element={<Index />} />
          <Route path={ROUTES.SYMPTOMS} element={<Symptoms />} />
          <Route path={ROUTES.MEDICAL_PROFILE} element={<MedicalProfile />} />
          <Route path={ROUTES.SUMMARY} element={<SummaryConsultation />} />
          <Route path={ROUTES.CONSULTATION} element={<Consultation />} />
          <Route
            path={ROUTES.SELECT_CONSULTATION_TYPE}
            element={<SelectConsultationType />}
          />
          <Route
            path={ROUTES.PAYMENT_CONFIRMATION}
            element={<PaymentConfirmation />}
          />
          <Route path={ROUTES.HIPAA_COMPLIANCE} element={<HIPAACompliance />} />
          <Route path={ROUTES.KYC} element={<KYC />} />
          <Route path={ROUTES.ADDRESS_DETAILS} element={<AddressDetails />} />
          <Route path={ROUTES.FINDING_DOCTOR} element={<FindingDoctor />} />
          <Route path={ROUTES.DOCTOR_CHAT} element={<DoctorChat />} />
          <Route path={ROUTES.PRESCRIPTION} element={<Prescription />} />
          <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
