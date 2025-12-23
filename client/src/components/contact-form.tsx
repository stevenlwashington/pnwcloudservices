import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useState, useRef } from "react";
import { CheckCircle, Loader2, AlertCircle } from "lucide-react";
import Turnstile from "react-turnstile";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(1, "Company name is required"),
  role: z.string().min(1, "Job title is required"),
  source: z.string().optional(),
  message: z.string().min(10, "Please provide a brief project description"),
  website: z.string().max(0, "Spam detected").optional().or(z.literal("")),
  turnstileToken: z.string().min(1, "Please verify you are not a bot"),
});

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [turnstileError, setTurnstileError] = useState<string | null>(null);
  const turnstileRef = useRef<{ reset: () => void } | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      role: "",
      source: "",
      message: "",
      website: "",
      turnstileToken: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (!values.turnstileToken) {
      setTurnstileError("Please verify you are not a bot");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        const error = await response.json();
        toast.error(error.error || "Failed to submit form. Please try again.");
        turnstileRef.current?.reset();
        form.setValue("turnstileToken", "");
        setTurnstileError(null);
        return;
      }

      toast.success("Message sent! We'll get back to you soon.");
      setIsSuccess(true);
      form.reset();
      turnstileRef.current?.reset();
    } catch (error) {
      console.error("Submission error", error);
      toast.error("Failed to submit form. Please try again.");
      turnstileRef.current?.reset();
      form.setValue("turnstileToken", "");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSuccess) {
    return (
      <div className="bg-secondary/10 p-8 rounded-xl border border-secondary text-center space-y-4 animate-in fade-in zoom-in duration-300">
        <div className="w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center mx-auto">
          <CheckCircle className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-primary">Message Sent!</h3>
        <p className="text-muted-foreground">
          Thank you for reaching out. Our team will get back to you shortly.
        </p>
        <Button 
          variant="outline" 
          onClick={() => setIsSuccess(false)}
          className="mt-4 rounded-lg font-semibold"
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="Jane Doe" {...field} className="bg-white rounded-lg border-border" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Business Email</FormLabel>
                <FormControl>
                  <Input placeholder="jane@company.com" {...field} className="bg-white rounded-lg border-border" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company</FormLabel>
                <FormControl>
                  <Input placeholder="Acme Corp" {...field} className="bg-white rounded-lg border-border" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Job Title</FormLabel>
                <FormControl>
                  <Input placeholder="CTO, VP of Engineering..." {...field} className="bg-white rounded-lg border-border" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="source"
          render={({ field }) => (
            <FormItem>
              <FormLabel>How did you hear about us? (Optional)</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="bg-white rounded-lg border-border">
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="search">Search Engine</SelectItem>
                  <SelectItem value="referral">Referral</SelectItem>
                  <SelectItem value="social">Social Media</SelectItem>
                  <SelectItem value="blog">Blog</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Project Description</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Tell us about your project or challenges..." 
                  className="min-h-[120px] bg-white rounded-lg border-border" 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="website"
          render={({ field }) => (
            <FormItem className="hidden">
              <FormControl>
                <Input type="text" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <div className="space-y-4">
          <div className="flex justify-center">
            <Turnstile
              ref={turnstileRef}
              sitekey="0x4AAAAAACHSj1Itg-urobPN"
              onVerify={(token) => {
                form.setValue("turnstileToken", token);
                setTurnstileError(null);
              }}
              onExpire={() => {
                form.setValue("turnstileToken", "");
                setTurnstileError("Verification expired. Please verify again.");
              }}
              onError={() => {
                form.setValue("turnstileToken", "");
                setTurnstileError("Verification failed. Please try again.");
              }}
              theme="light"
            />
          </div>
          {turnstileError && (
            <div className="flex items-center gap-2 text-red-600">
              <AlertCircle className="w-4 h-4" />
              <span className="text-sm">{turnstileError}</span>
            </div>
          )}
        </div>

        <Button 
          type="submit" 
          disabled={isSubmitting || !form.formState.isValid}
          className="w-full bg-secondary hover:bg-secondary/90 text-white font-semibold py-6 px-8 rounded-xl transition-all mt-2"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            "Submit"
          )}
        </Button>
      </form>
    </Form>
  );
}
