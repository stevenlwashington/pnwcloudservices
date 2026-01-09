import React, { Component, ErrorInfo, ReactNode } from "react";
import ErrorPage from "@/pages/error";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
    
    if (typeof window !== "undefined" && (window as any).clarity) {
      (window as any).clarity("set", "error", error.message);
      (window as any).clarity("set", "errorStack", error.stack || "");
    }
  }

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }
      
      return (
        <ErrorPage 
          code={500}
          title="Application Error"
          message="Something went wrong while loading this page. Please try refreshing or come back later."
        />
      );
    }

    return this.props.children;
  }
}
