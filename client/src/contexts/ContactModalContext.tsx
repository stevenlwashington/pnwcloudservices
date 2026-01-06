import { createContext, useContext, useState, useCallback, ReactNode } from "react";

interface ContactModalContextType {
  isOpen: boolean;
  inquiryType: string | null;
  openContactModal: (inquiryType?: string) => void;
  closeContactModal: () => void;
}

const ContactModalContext = createContext<ContactModalContextType | undefined>(undefined);

export function ContactModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [inquiryType, setInquiryType] = useState<string | null>(null);

  const openContactModal = useCallback((type?: string) => {
    setInquiryType(type || null);
    setIsOpen(true);
  }, []);

  const closeContactModal = useCallback(() => {
    setIsOpen(false);
    setInquiryType(null);
  }, []);

  return (
    <ContactModalContext.Provider value={{ isOpen, inquiryType, openContactModal, closeContactModal }}>
      {children}
    </ContactModalContext.Provider>
  );
}

export function useContactModal() {
  const context = useContext(ContactModalContext);
  if (!context) {
    throw new Error("useContactModal must be used within a ContactModalProvider");
  }
  return context;
}
