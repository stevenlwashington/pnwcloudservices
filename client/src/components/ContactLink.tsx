import { useContactModal } from "@/contexts/ContactModalContext";
import { cn } from "@/lib/utils";
import { useLocation } from "wouter";

interface ContactLinkProps {
  children: React.ReactNode;
  className?: string;
  "data-testid"?: string;
  fallbackHref?: string;
}

export function ContactLink({ 
  children, 
  className, 
  "data-testid": testId,
  fallbackHref = "/contact"
}: ContactLinkProps) {
  const { openContactModal } = useContactModal();
  const [, setLocation] = useLocation();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      openContactModal();
    } catch {
      setLocation(fallbackHref);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleClick(e as unknown as React.MouseEvent);
    }
  };

  return (
    <a
      href={fallbackHref}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      data-testid={testId || "contact-link"}
      className={cn(
        "text-sm font-medium transition-colors hover:text-secondary text-foreground cursor-pointer",
        className
      )}
      role="button"
      tabIndex={0}
    >
      {children}
    </a>
  );
}
