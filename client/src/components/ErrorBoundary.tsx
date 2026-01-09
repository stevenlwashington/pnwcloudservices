import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

function MinimalErrorFallback() {
  const handleRefresh = () => window.location.reload();
  const handleHome = () => window.location.href = "/";

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#f8fafc",
      fontFamily: "'Poppins', 'Urbanist', system-ui, sans-serif",
      padding: "24px"
    }}>
      <div style={{
        maxWidth: "480px",
        textAlign: "center",
        backgroundColor: "white",
        borderRadius: "16px",
        padding: "48px 32px",
        boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)"
      }}>
        <div style={{
          width: "64px",
          height: "64px",
          margin: "0 auto 24px",
          backgroundColor: "#fef3c7",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/>
            <path d="M12 9v4"/>
            <path d="M12 17h.01"/>
          </svg>
        </div>
        
        <h1 style={{
          fontSize: "24px",
          fontWeight: "700",
          color: "#1a3a2f",
          marginBottom: "12px"
        }}>
          Something Went Wrong
        </h1>
        
        <p style={{
          fontSize: "16px",
          color: "#6b7280",
          marginBottom: "32px",
          lineHeight: "1.6"
        }}>
          We're experiencing technical difficulties. Please try refreshing the page or return to the homepage.
        </p>
        
        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          <button
            onClick={handleRefresh}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "12px 24px",
              backgroundColor: "#1a3a2f",
              color: "white",
              fontWeight: "600",
              fontSize: "14px",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer"
            }}
          >
            Refresh Page
          </button>
          <button
            onClick={handleHome}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "12px 24px",
              backgroundColor: "transparent",
              color: "#1a3a2f",
              fontWeight: "600",
              fontSize: "14px",
              border: "2px solid #1a3a2f",
              borderRadius: "8px",
              cursor: "pointer"
            }}
          >
            Go to Homepage
          </button>
        </div>
        
        <p style={{
          marginTop: "32px",
          fontSize: "14px",
          color: "#9ca3af"
        }}>
          PNW Cloud Services
        </p>
      </div>
    </div>
  );
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
      
      return <MinimalErrorFallback />;
    }

    return this.props.children;
  }
}
