import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import BrandFilms from "@/pages/brand-films";
import BrandLaunch from "@/pages/brand-launch";
import ContentPartnership from "@/pages/content-partnership";
import OurWork from "@/pages/our-work";
import About from "@/pages/about";
import Services from "@/pages/services";
import LeadMagnet from "@/pages/lead-magnet";
import ThankYou from "@/pages/thank-you";
import Contact from "@/pages/contact";
import Insights from "@/pages/insights";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/brand-films" component={BrandFilms} />
      <Route path="/content-partnership" component={ContentPartnership} />
      <Route path="/brand-launch" component={BrandLaunch} />
      <Route path="/our-work" component={OurWork} />
      <Route path="/insights" component={Insights} />
      <Route path="/contact" component={Contact} />
      <Route path="/lead-magnet" component={LeadMagnet} />
      <Route path="/thank-you" component={ThankYou} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
