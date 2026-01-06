import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ContactForm } from "@/components/contact-form";
import { useContactModal } from "@/contexts/ContactModalContext";
import { ScheduleFreeConsultationCTA } from "@/components/ScheduleFreeConsultationCTA";

const INQUIRY_TITLES: Record<string, { title: string; description: string }> = {
  "Platform Health Scorecard": {
    title: "Request a Platform Health Scorecard",
    description: "We'll review your current platform architecture and provide an actionable assessment of modernization opportunities."
  }
};

export function ContactModal() {
  const { isOpen, inquiryType, closeContactModal } = useContactModal();

  const customContent = inquiryType ? INQUIRY_TITLES[inquiryType] : null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && closeContactModal()}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary">
            {customContent?.title || "Tell us about your project"}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            {customContent?.description || (
              <>
                Share some context and we'll get back to you shortly. If you'd prefer to start with a quick conversation,{" "}
                <ScheduleFreeConsultationCTA
                  source="contact-modal"
                  variant="link"
                  label="schedule a free consultation"
                />
                .
              </>
            )}
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          <ContactForm inquiryType={inquiryType} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
