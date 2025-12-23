import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ContactForm } from "@/components/contact-form";
import { ReactNode } from "react";

interface ConsultationModalProps {
  children: ReactNode;
}

export function ConsultationModal({ children }: ConsultationModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] bg-white border-border shadow-lg rounded-xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary mb-2">Schedule a Free Consultation</DialogTitle>
          <p className="text-muted-foreground">
            Share a few details and we'll follow up to coordinate a quick 20-minute intro.
          </p>
        </DialogHeader>
        <div className="mt-4">
          <ContactForm />
        </div>
      </DialogContent>
    </Dialog>
  );
}
