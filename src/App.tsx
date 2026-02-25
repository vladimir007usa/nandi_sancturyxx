import { useEffect } from "react";
import { useLocation, BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Layout from "@/components/layout/Layout";
import Index from "./pages/Index";
import About from "./pages/About";
import Mission from "./pages/Mission";
import OurWork from "./pages/OurWork";
import Articles from "./pages/Articles"; 
import Stories from "./pages/Stories"; 
import AnimalRights from "./pages/AnimalRights";
import Donate from "./pages/Donate";
import Volunteer from "./pages/Volunteer";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Rescue Story Page Imports
import VishvambarStory from "./pages/vishvambar"; 
import NadiaStory from "./pages/nadia";
import AngadStory from "./pages/angad"; 
import DharmkshetraStory from "./pages/dharmkshetra"; 
import Dharmo from "./pages/Dharmo"; 
import Path from "./pages/Path";

// Helper component to force scroll to top on every page change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        {/* This component ensures navigation always starts at the top */}
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/mission" element={<Mission />} />
            <Route path="/our-work" element={<OurWork />} />
            <Route path="/articles" element={<Articles />} /> 
            <Route path="/stories" element={<Stories />} /> 
            
            {/* Story Routes */}
            <Route path="/vishvambar" element={<VishvambarStory />} /> 
            <Route path="/nadia" element={<NadiaStory />} />
            <Route path="/angad" element={<AngadStory />} />
            <Route path="/dharmkshetra" element={<DharmkshetraStory />} />
            <Route path="/dharmo" element={<Dharmo />} /> 
            <Route path="/path" element={<Path />} /> 

            <Route path="/animal-rights" element={<AnimalRights />} /> 
            <Route path="/donate" element={<Donate />} />
            <Route path="/volunteer" element={<Volunteer />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;