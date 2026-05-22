"use client";

import { useState } from "react";
import { sendContactMessage } from "@/features/contact/services/send-contact-message";
import type { ContactMessage, ContactResponse } from "@/features/contact/types";

const initialState: ContactMessage = {
  name: "",
  email: "",
  message: "",
};

export function useContactForm() {
  const [form, setForm] = useState<ContactMessage>(initialState);
  const [result, setResult] = useState<ContactResponse | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function submit() {
    setIsSubmitting(true);
    const response = await sendContactMessage(form);
    setResult(response);
    setIsSubmitting(false);
  }

  return {
    form,
    result,
    isSubmitting,
    setForm,
    submit,
  };
}
