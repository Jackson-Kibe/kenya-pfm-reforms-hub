
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
            {/* Updated routes for streamlined navigation */}
            <Route path="/strategy" element={<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white"><div className="text-center"><h1 className="text-4xl font-bold text-primary mb-4">Our Strategy</h1><p className="text-xl text-gray-600">PFM Strategy 2023-2028 - Coming Soon</p></div></div>} />
            <Route path="/partners" element={<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white"><div className="text-center"><h1 className="text-4xl font-bold text-primary mb-4">Development Partners</h1><p className="text-xl text-gray-600">Partner Support Matrix - Coming Soon</p></div></div>} />
            <Route path="/reform-areas" element={<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white"><div className="text-center"><h1 className="text-4xl font-bold text-primary mb-4">PFM Reform Areas</h1><p className="text-xl text-gray-600">Key Result Areas - Coming Soon</p></div></div>} />
            <Route path="/contact" element={<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white"><div className="text-center"><h1 className="text-4xl font-bold text-primary mb-4">Contact Us</h1><p className="text-xl text-gray-600">Get in Touch - Coming Soon</p></div></div>} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
