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
import IndexEN from "./pages/en/Index";
import PakalpojumiEN from "./pages/en/Pakalpojumi";
import SadarbibaUnKontaktiEN from "./pages/en/SadarbibaUnKontakti";
import PrivatumaPolitikaEN from "./pages/en/PrivatumaPolitika";
import IndexRU from "./pages/ru/Index";
import PakalpojumiRU from "./pages/ru/Pakalpojumi";
import SadarbibaUnKontaktiRU from "./pages/ru/SadarbibaUnKontakti";
import PrivatumaPolitikaRU from "./pages/ru/PrivatumaPolitika";
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
            {/* Redirect root to Latvian */}
            <Route path="/" element={<Navigate to="/lv/" replace />} />

            {/* Latvian version */}
            <Route path="/lv/" element={<Index />} />
            <Route path="/lv/pakalpojumi" element={<Pakalpojumi />} />
            <Route path="/lv/sadarbiba-un-kontakti" element={<SadarbibaUnKontakti />} />
            <Route path="/lv/privatuma-politika" element={<PrivatumaPolitika />} />

            {/* English version */}
            <Route path="/en/" element={<IndexEN />} />
            <Route path="/en/pakalpojumi" element={<PakalpojumiEN />} />
            <Route path="/en/sadarbiba-un-kontakti" element={<SadarbibaUnKontaktiEN />} />
            <Route path="/en/privatuma-politika" element={<PrivatumaPolitikaEN />} />

            {/* Russian version */}
            <Route path="/ru/" element={<IndexRU />} />
            <Route path="/ru/pakalpojumi" element={<PakalpojumiRU />} />
            <Route path="/ru/sadarbiba-un-kontakti" element={<SadarbibaUnKontaktiRU />} />
            <Route path="/ru/privatuma-politika" element={<PrivatumaPolitikaRU />} />

            {/* 404 page */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;