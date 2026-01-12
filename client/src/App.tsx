import { Switch, Route, Redirect } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import { ContactModalProvider } from "@/contexts/ContactModalContext";
import { ContactModal } from "@/components/ContactModal";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { BackToTop } from "@/components/layout/BackToTop";

import Home from "@/pages/home";
import NotFound from "@/pages/not-found";
import PlatformModernization from "@/pages/platform-modernization";
import SalesforceStrategy from "@/pages/salesforce-crm-strategy";
import AIAutomation from "@/pages/ai-automation";
import DevEx from "@/pages/devex-devops";
import BlogIndex from "@/pages/blog/index";
import BlogPost from "@/pages/blog/post";
import Contact from "@/pages/contact";
import PrivacyPolicy from "@/pages/privacy-policy";
import TermsOfUse from "@/pages/terms-of-use";

function Router() {
  useScrollToTop();

  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={Home} />
      <Route path="/platform-modernization" component={PlatformModernization} />
      <Route path="/salesforce-crm-strategy" component={SalesforceStrategy} />
      <Route path="/ai-automation" component={AIAutomation} />
      <Route path="/devex-devops" component={DevEx} />
      <Route path="/blog" component={BlogIndex} />
      <Route path="/blog/:slug" component={BlogPost} />
      <Route path="/contact" component={Contact} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms-of-use" component={TermsOfUse} />
      
      {/* Redirects for consolidated services */}
      <Route path="/observability">
        <Redirect to="/platform-modernization" />
      </Route>
      <Route path="/compliance-governance">
        <Redirect to="/platform-modernization" />
      </Route>
      <Route path="/cloud-strategy-cost-optimization">
        <Redirect to="/platform-modernization" />
      </Route>
      <Route path="/cloud-strategy">
        <Redirect to="/platform-modernization" />
      </Route>
      <Route path="/cost-optimization">
        <Redirect to="/platform-modernization" />
      </Route>
      
      {/* Legacy routes */}
      <Route path="/services" component={Home} />
      <Route path="/guide" component={Home} />
      
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <ContactModalProvider>
            <Toaster />
            <Router />
            <ContactModal />
            <BackToTop />
          </ContactModalProvider>
        </TooltipProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
