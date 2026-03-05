"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  { title: "Know Yourself", subtitle: "Who are you?" },
  { title: "State Your Intention", subtitle: "Why The Forge?" },
  { title: "Commit", subtitle: "Are you ready?" },
];

const programs = [
  { value: "forge-your-life", label: "Forge Your Life — $5,555" },
  { value: "breath-circle", label: "Vital Breath Circle — $33/mo" },
  { value: "permaculture-residency", label: "Permaculture Residency — $600/mo" },
  { value: "work-trade", label: "Work Trade Program" },
];

export function ApplicationForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    program: "",
    intention: "",
    experience: "",
    substanceAcknowledgment: false,
    commitmentAcknowledgment: false,
  });

  const updateField = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    // In production, this would submit to an API route / server action
    console.log("Application submitted:", formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Card className="bg-volcanic-ash border-quantum-gold/20">
        <CardContent className="p-12 text-center">
          <div className="text-quantum-gold text-5xl mb-6 font-heading">
            &#937;
          </div>
          <h2 className="font-heading text-2xl font-bold text-white-fire tracking-wide">
            Application Received
          </h2>
          <p className="mt-4 text-silver-mist/70 max-w-md mx-auto">
            We&apos;ve received your application. Amrit will review it personally
            and respond within 48 hours. Check your email for confirmation.
          </p>
          <div className="mt-8 h-px w-16 mx-auto forge-gradient" />
        </CardContent>
      </Card>
    );
  }

  return (
    <div>
      {/* Progress Indicator */}
      <div className="flex items-center justify-center gap-2 mb-12">
        {steps.map((step, index) => (
          <div key={step.title} className="flex items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-mono font-bold transition-all ${
                index <= currentStep
                  ? "bg-quantum-gold text-obsidian"
                  : "bg-volcanic-ash border border-quantum-gold/20 text-muted-foreground"
              }`}
            >
              {index + 1}
            </div>
            {index < steps.length - 1 && (
              <div
                className={`w-12 sm:w-20 h-px mx-2 transition-all ${
                  index < currentStep ? "forge-gradient" : "bg-quantum-gold/10"
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Step Title */}
      <div className="text-center mb-8">
        <h2 className="font-heading text-xl font-bold text-quantum-gold tracking-widest uppercase">
          {steps[currentStep].title}
        </h2>
        <p className="text-sm text-muted-foreground mt-1">
          {steps[currentStep].subtitle}
        </p>
      </div>

      <Card className="bg-volcanic-ash border-quantum-gold/10">
        <CardContent className="p-8">
          {/* Step 1: Know Yourself */}
          {currentStep === 0 && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-silver-mist/80">
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => updateField("firstName", e.target.value)}
                    placeholder="Your first name"
                    className="bg-obsidian border-quantum-gold/20 text-white-fire placeholder:text-muted-foreground"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-silver-mist/80">
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => updateField("lastName", e.target.value)}
                    placeholder="Your last name"
                    className="bg-obsidian border-quantum-gold/20 text-white-fire placeholder:text-muted-foreground"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-silver-mist/80">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  placeholder="your@email.com"
                  className="bg-obsidian border-quantum-gold/20 text-white-fire placeholder:text-muted-foreground"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-silver-mist/80">
                  Phone
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => updateField("phone", e.target.value)}
                  placeholder="+1 (555) 000-0000"
                  className="bg-obsidian border-quantum-gold/20 text-white-fire placeholder:text-muted-foreground"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="location" className="text-silver-mist/80">
                  Where are you located?
                </Label>
                <Input
                  id="location"
                  value={formData.location}
                  onChange={(e) => updateField("location", e.target.value)}
                  placeholder="City, State/Country"
                  className="bg-obsidian border-quantum-gold/20 text-white-fire placeholder:text-muted-foreground"
                />
              </div>
            </div>
          )}

          {/* Step 2: State Your Intention */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="program" className="text-silver-mist/80">
                  Which program calls to you?
                </Label>
                <select
                  id="program"
                  value={formData.program}
                  onChange={(e) => updateField("program", e.target.value)}
                  className="flex h-9 w-full rounded-md border border-quantum-gold/20 bg-obsidian px-3 py-1 text-sm text-white-fire shadow-xs transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  <option value="">Select a program</option>
                  {programs.map((p) => (
                    <option key={p.value} value={p.value}>
                      {p.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="intention" className="text-silver-mist/80">
                  Why The Forge? What brought you here?
                </Label>
                <Textarea
                  id="intention"
                  value={formData.intention}
                  onChange={(e) => updateField("intention", e.target.value)}
                  placeholder="Speak honestly. There are no wrong answers — only real ones."
                  rows={5}
                  className="bg-obsidian border-quantum-gold/20 text-white-fire placeholder:text-muted-foreground"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="experience" className="text-silver-mist/80">
                  What experience do you have with breathwork, movement, or
                  personal development?
                </Label>
                <Textarea
                  id="experience"
                  value={formData.experience}
                  onChange={(e) => updateField("experience", e.target.value)}
                  placeholder="Any level is welcome. We want to know where you're starting from."
                  rows={4}
                  className="bg-obsidian border-quantum-gold/20 text-white-fire placeholder:text-muted-foreground"
                />
              </div>
            </div>
          )}

          {/* Step 3: Commit */}
          {currentStep === 2 && (
            <div className="space-y-8">
              {/* Substance Policy */}
              <div className="p-6 bg-obsidian rounded-lg border border-forge-red/20">
                <h3 className="font-heading text-lg font-bold text-white-fire tracking-wide mb-3">
                  Substance-Free Commitment
                </h3>
                <p className="text-sm text-silver-mist/70 leading-relaxed mb-4">
                  Quantum Wellness Warrior is a 100% substance-free environment.
                  This includes alcohol, cannabis, psychedelics, and recreational
                  drugs of all kinds. Prescription medications are discussed on a
                  case-by-case basis. This is non-negotiable.
                </p>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.substanceAcknowledgment}
                    onChange={(e) =>
                      updateField("substanceAcknowledgment", e.target.checked)
                    }
                    className="mt-1 w-4 h-4 rounded border-quantum-gold/30 bg-obsidian text-quantum-gold focus:ring-quantum-gold"
                  />
                  <span className="text-sm text-silver-mist/80">
                    I understand and commit to the substance-free policy for the
                    duration of my program.
                  </span>
                </label>
              </div>

              {/* Commitment Acknowledgment */}
              <div className="p-6 bg-obsidian rounded-lg border border-quantum-gold/20">
                <h3 className="font-heading text-lg font-bold text-white-fire tracking-wide mb-3">
                  This Is a Commitment
                </h3>
                <p className="text-sm text-silver-mist/70 leading-relaxed mb-4">
                  Applying is not booking a vacation. If accepted, you are
                  committing to showing up fully — physically, mentally, and
                  emotionally. The Forge will challenge you. That&apos;s the point.
                </p>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.commitmentAcknowledgment}
                    onChange={(e) =>
                      updateField("commitmentAcknowledgment", e.target.checked)
                    }
                    className="mt-1 w-4 h-4 rounded border-quantum-gold/30 bg-obsidian text-quantum-gold focus:ring-quantum-gold"
                  />
                  <span className="text-sm text-silver-mist/80">
                    I understand this is a rite of passage, not a retreat. I am
                    ready to commit fully.
                  </span>
                </label>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between mt-10 pt-6 border-t border-quantum-gold/10">
            {currentStep > 0 ? (
              <Button
                variant="ghost"
                onClick={() => setCurrentStep(currentStep - 1)}
                className="text-silver-mist/70 hover:text-quantum-gold"
              >
                Back
              </Button>
            ) : (
              <div />
            )}

            {currentStep < steps.length - 1 ? (
              <Button
                onClick={() => setCurrentStep(currentStep + 1)}
                className="bg-quantum-gold text-obsidian hover:bg-quantum-gold/90 font-heading tracking-wider text-xs uppercase"
              >
                Continue
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                disabled={
                  !formData.substanceAcknowledgment ||
                  !formData.commitmentAcknowledgment
                }
                className="bg-quantum-gold text-obsidian hover:bg-quantum-gold/90 font-heading tracking-wider text-xs uppercase gold-glow disabled:opacity-50 disabled:cursor-not-allowed"
              >
                I Commit — Enter The Forge
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
