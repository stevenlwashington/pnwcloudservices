import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      await fetch("https://formspree.io/f/xkgleode", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          source: "newsletter_signup",
        }),
      });
      setIsSuccess(true);
      setEmail("");
      setTimeout(() => setIsSuccess(false), 3000);
    } catch (error) {
      console.error("Signup error:", error);
      setIsSuccess(true);
    } finally {
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="flex items-center gap-2 text-secondary">
        <CheckCircle className="w-5 h-5" />
        <span className="text-sm font-semibold">Thanks for signing up!</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 max-w-sm">
      <Input 
        placeholder="Email Address" 
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="bg-background border-border h-10 rounded-lg" 
        data-testid="input-newsletter-email"
      />
      <Button 
        type="submit"
        disabled={isLoading}
        className="bg-primary text-white hover:bg-primary/90 h-10 rounded-lg font-semibold transition-all hover:scale-105 hover:bg-primary/85"
        data-testid="button-newsletter-signup"
      >
        {isLoading ? "..." : "Sign Up"}
      </Button>
    </form>
  );
}
