"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm, ValidationError } from '@formspree/react';
import { cn } from "@/lib/utils";

interface ContactFormProps {
  endpoint: string;
}

interface FormErrors {
  name?: string[];
  email?: string[];
  message?: string[];
}

export function ContactForm({ endpoint }: ContactFormProps) {
  const formId = endpoint.split("/").pop() || "";
  const [state, handleSubmit] = useForm(formId);

  if (state.succeeded) {
    return (
      <div className="text-center p-8 space-y-4 bg-muted rounded-lg">
        <h3 className="text-xl font-semibold">Thank you for your message!</h3>
        <p className="text-muted-foreground">I'll get back to you as soon as possible.</p>
      </div>
    );
  }

  const errors = state.errors as FormErrors;

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Input
            id="name"
            name="name"
            placeholder="Name"
            required
            className={cn(
              "bg-background",
              errors?.name && "border-destructive"
            )}
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} className="text-sm text-destructive" />
        </div>
        <div className="space-y-2">
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            required
            className={cn(
              "bg-background",
              errors?.email && "border-destructive"
            )}
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} className="text-sm text-destructive" />
        </div>
      </div>
      <div className="space-y-2">
        <Textarea
          id="message"
          name="message"
          placeholder="Share your kind words here :)"
          required
          className={cn(
            "min-h-[150px] bg-background",
            errors?.message && "border-destructive"
          )}
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} className="text-sm text-destructive" />
      </div>
      <Button
        type="submit"
        className="w-full sm:w-auto"
        disabled={state.submitting}
      >
        {state.submitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
} 