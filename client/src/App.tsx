import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import BrandFilms from "@/pages/brand-films";
import SocialContent from "@/pages/social-content";
import ContentPartnership from "@/pages/content-partnership";
import OurWork from "@/pages/our-work";
import Contact from "@/pages/contact";
import Insights from "@/pages/insights";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/brand-films" component={BrandFilms} />
      <Route path="/social-content" component={SocialContent} />
      <Route path="/content-partnership" component={ContentPartnership} />
      <Route path="/our-work" component={OurWork} />
      <Route path="/contact" component={Contact} />
      <Route path="/insights" component={Insights} />
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
