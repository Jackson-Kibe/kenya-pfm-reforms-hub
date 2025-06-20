
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* Placeholder routes for future pages */}
            <Route path="/strategy" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-3xl font-bold text-primary">Strategy & Results - Coming Soon</h1></div>} />
            <Route path="/monitoring" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-3xl font-bold text-primary">M&E Dashboard - Coming Soon</h1></div>} />
            <Route path="/reports" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-3xl font-bold text-primary">Reports & Publications - Coming Soon</h1></div>} />
            <Route path="/reforms" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-3xl font-bold text-primary">Reforms in Action - Coming Soon</h1></div>} />
            <Route path="/news" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-3xl font-bold text-primary">News & Blog - Coming Soon</h1></div>} />
            <Route path="/media" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-3xl font-bold text-primary">Media Hub - Coming Soon</h1></div>} />
            <Route path="/contact" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-3xl font-bold text-primary">Contact Us - Coming Soon</h1></div>} />
            <Route path="/faqs" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-3xl font-bold text-primary">FAQs - Coming Soon</h1></div>} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
