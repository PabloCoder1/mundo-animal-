/**
 * Helper tipado para gerar links de conversão do WhatsApp.
 * TODO: Substituir o número padrão pelo real do petshop Mundo Animal quando disponível.
 */
const DEFAULT_PHONE = "5513999999999";

export function getWhatsAppLink(message: string, phone: string = DEFAULT_PHONE): string {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encodedMessage}`;
}