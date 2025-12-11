import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useScrollToTop } from "@/hooks/useScrollToTop";

// Pages
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";
import PlatformModernization from "@/pages/platform-modernization";
import SalesforceStrategy from "@/pages/salesforce-crm-strategy";
import AIAutomation from "@/pages/ai-automation";
import DevEx from "@/pages/devex-devops";
import Observability from "@/pages/observability";
import ComplianceGovernance from "@/pages/compliance-governance";
import CloudStrategy from "@/pages/cloud-strategy-cost-optimization";
import BlogIndex from "@/pages/blog/index";
import BlogPost from "@/pages/blog/post";
import Contact from "@/pages/contact";
import PrivacyPolicy from "@/pages/privacy-policy";
import TermsOfUse from "@/pages/terms-of-use";

// App Router
function Router() {
  useScrollToTop();

  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={Home} /> {/* Placeholder as per previous state, could be updated later */}
      <Route path="/platform-modernization" component={PlatformModernization} />
      <Route path="/salesforce-crm-strategy" component={SalesforceStrategy} />
      <Route path="/ai-automation" component={AIAutomation} />
      <Route path="/devex-devops" component={DevEx} />
      <Route path="/observability" component={Observability} />
      <Route path="/compliance-governance" component={ComplianceGovernance} />
      <Route path="/cloud-strategy-cost-optimization" component={CloudStrategy} />
      <Route path="/blog" component={BlogIndex} />
      <Route path="/blog/:slug" component={BlogPost} />
      <Route path="/contact" component={Contact} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms-of-use" component={TermsOfUse} />
      
      {/* Legacy/Alias routes mapping to Home for now if not explicitly built */}
      <Route path="/services" component={Home} />
      <Route path="/guide" component={Home} />
      
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
