import type { ContactMessage, ContactResponse } from "@/features/contact/types";

export async function sendContactMessage(
  payload: ContactMessage,
): Promise<ContactResponse> {
  if (!payload.email || !payload.message) {
    return {
      ok: false,
      message: "Email and message are required.",
    };
  }

  return {
    ok: true,
    message: "Message queued successfully.",
  };
}
