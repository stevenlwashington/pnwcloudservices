import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ContactForm } from "@/components/contact-form";
import { useContactModal } from "@/contexts/ContactModalContext";
import { ScheduleFreeConsultationCTA } from "@/components/ScheduleFreeConsultationCTA";

export function ContactModal() {
  const { isOpen, closeContactModal } = useContactModal();

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && closeContactModal()}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary">
            Tell us about your project
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Share some context and we'll get back to you shortly. If you'd prefer to start with a quick conversation,{" "}
            <ScheduleFreeConsultationCTA
              source="contact-modal"
              variant="link"
              label="schedule a free consultation"
            />
            .
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          <ContactForm />
        </div>
      </DialogContent>
    </Dialog>
  );
}
