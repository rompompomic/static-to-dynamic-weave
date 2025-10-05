import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import Pakalpojumi from "./pages/lv/Pakalpojumi";
import SadarbibaUnKontakti from "./pages/lv/SadarbibaUnKontakti";
import PrivatumaPolitika from "./pages/lv/PrivatumaPolitika";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* 🔹 Теперь / редиректит на /lv/ */}
            <Route path="/" element={<Navigate to="/lv/" replace />} />

            {/* 🔹 Главная страница теперь по адресу /lv/ */}
            <Route path="/lv/" element={<Index />} />
            <Route path="/lv/pakalpojumi" element={<Pakalpojumi />} />
            <Route path="/lv/sadarbiba-un-kontakti" element={<SadarbibaUnKontakti />} />
            <Route path="/lv/privatuma-politika" element={<PrivatumaPolitika />} />

            {/* 🔹 Страница 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;