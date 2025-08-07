"use client";

import { Button } from "@/common/button";
import { Input } from "@/common/input";
import { useState } from "react";

interface FormProps {
  _id: string;
  title: string;
  description?: string;
  settingsLogoLite: {
    logo: {
      dark: {
        url: string;
        alt: string | null;
        width: number;
        height: number;
        aspectRatio: string;
        blurDataURL: string;
      };
      light: {
        url: string;
        alt: string | null;
        width: number;
        height: number;
        aspectRatio: string;
        blurDataURL: string;
      };
    };
  };
}

export function Form({ _id, title, description, settingsLogoLite }: FormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simple form submission without Basehub
    console.log("Form submission:", formData);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section className="container mx-auto px-6 py-16">
      <div className="mx-auto max-w-md">
        <div className="rounded-lg border border-[--border] bg-[--surface-primary] p-6 dark:border-[--dark-border] dark:bg-[--dark-surface-primary]">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-[--text-primary] dark:text-[--dark-text-primary]">
              {title}
            </h2>
            {description && (
              <p className="mt-2 text-[--text-secondary] dark:text-[--dark-text-secondary]">
                {description}
              </p>
            )}
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
            <Input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
            <textarea
              placeholder="Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              className="w-full rounded-md border border-[--border] bg-[--surface-primary] px-3 py-2 text-[--text-primary] placeholder:text-[--text-tertiary] dark:border-[--dark-border] dark:bg-[--dark-surface-primary] dark:text-[--dark-text-primary] dark:placeholder:text-[--dark-text-tertiary]"
              rows={4}
            />
            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
