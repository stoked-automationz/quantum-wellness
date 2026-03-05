"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would submit to an API route / server action
    console.log("Contact form submitted:", formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Card className="bg-volcanic-ash border-quantum-gold/20">
        <CardContent className="p-8 text-center">
          <h3 className="font-heading text-xl font-bold text-white-fire tracking-wide">
            Message Sent
          </h3>
          <p className="mt-3 text-sm text-silver-mist/70">
            We&apos;ll get back to you within 48 hours.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="contact-name" className="text-silver-mist/80">
          Name
        </Label>
        <Input
          id="contact-name"
          value={formData.name}
          onChange={(e) => updateField("name", e.target.value)}
          placeholder="Your name"
          required
          className="bg-obsidian border-quantum-gold/20 text-white-fire placeholder:text-muted-foreground"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="contact-email" className="text-silver-mist/80">
          Email
        </Label>
        <Input
          id="contact-email"
          type="email"
          value={formData.email}
          onChange={(e) => updateField("email", e.target.value)}
          placeholder="your@email.com"
          required
          className="bg-obsidian border-quantum-gold/20 text-white-fire placeholder:text-muted-foreground"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="contact-subject" className="text-silver-mist/80">
          Subject
        </Label>
        <Input
          id="contact-subject"
          value={formData.subject}
          onChange={(e) => updateField("subject", e.target.value)}
          placeholder="What's this about?"
          required
          className="bg-obsidian border-quantum-gold/20 text-white-fire placeholder:text-muted-foreground"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="contact-message" className="text-silver-mist/80">
          Message
        </Label>
        <Textarea
          id="contact-message"
          value={formData.message}
          onChange={(e) => updateField("message", e.target.value)}
          placeholder="Your message..."
          rows={5}
          required
          className="bg-obsidian border-quantum-gold/20 text-white-fire placeholder:text-muted-foreground"
        />
      </div>

      <Button
        type="submit"
        className="w-full bg-quantum-gold text-obsidian hover:bg-quantum-gold/90 font-heading tracking-wider text-xs uppercase"
      >
        Send Message
      </Button>
    </form>
  );
}
