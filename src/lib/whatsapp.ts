const WHATSAPP_API_URL = "https://waba.360dialog.io/v1";

type SendMessageParams = {
  to: string;
  templateName: string;
  languageCode?: string;
  components?: Record<string, unknown>[];
};

export async function sendWhatsAppTemplate({ to, templateName, languageCode = "he", components }: SendMessageParams) {
  const apiKey = process.env.WHATSAPP_API_KEY;
  if (!apiKey) {
    console.warn("WhatsApp API key not configured, skipping message");
    return null;
  }

  const phone = to.replace(/\D/g, "");

  const body: Record<string, unknown> = {
    messaging_product: "whatsapp",
    to: phone,
    type: "template",
    template: {
      name: templateName,
      language: { code: languageCode },
      ...(components ? { components } : {}),
    },
  };

  const response = await fetch(`${WHATSAPP_API_URL}/messages`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "D360-API-KEY": apiKey,
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const error = await response.text();
    console.error("WhatsApp send error:", error);
    throw new Error(`WhatsApp API error: ${response.status}`);
  }

  const data = await response.json();
  return data.messages?.[0]?.id || null;
}

export async function sendWhatsAppText(to: string, text: string) {
  const apiKey = process.env.WHATSAPP_API_KEY;
  if (!apiKey) {
    console.warn("WhatsApp API key not configured, skipping message");
    return null;
  }

  const phone = to.replace(/\D/g, "");

  const response = await fetch(`${WHATSAPP_API_URL}/messages`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "D360-API-KEY": apiKey,
    },
    body: JSON.stringify({
      messaging_product: "whatsapp",
      to: phone,
      type: "text",
      text: { body: text },
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    console.error("WhatsApp send error:", error);
    throw new Error(`WhatsApp API error: ${response.status}`);
  }

  const data = await response.json();
  return data.messages?.[0]?.id || null;
}
