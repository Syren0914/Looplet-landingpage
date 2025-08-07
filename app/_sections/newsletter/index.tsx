"use client";

import { Button } from "@/common/button";
import { Input } from "@/common/input";
import { useState } from "react";

interface NewsletterProps {
  newsletter: {
    title: string;
    description: string;
    placeholder: string;
    buttonText: string;
    submissions: {
      ingestKey: string;
      schema: Record<string, any>;
    };
  };
}

export function Newsletter({ newsletter }: NewsletterProps) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simple newsletter subscription without Basehub
    console.log("Newsletter subscription:", email);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setEmail("");
    setIsSubmitting(false);
  };

  return (
    <section className="border-t border-[--border] bg-[--surface-secondary] dark:border-[--dark-border] dark:bg-[--dark-surface-secondary]">
      <div className="container mx-auto px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-[--text-primary] dark:text-[--dark-text-primary]">
            {newsletter.title}
          </h2>
          <p className="mt-4 text-[--text-secondary] dark:text-[--dark-text-secondary]">
            {newsletter.description}
          </p>
          <form onSubmit={handleSubmit} className="mt-8 flex gap-4">
            <Input
              type="email"
              placeholder={newsletter.placeholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1"
            />
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Subscribing..." : newsletter.buttonText}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
