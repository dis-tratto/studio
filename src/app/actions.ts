'use server'

import { generateCustomerSupportResponse } from "@/ai/flows/customer-support-response"
import { z } from "zod"

const formSchema = z.object({
  customerName: z.string(),
  customerEmail: z.string().email(),
  customerMessage: z.string(),
})

export async function handleContactForm(data: z.infer<typeof formSchema>) {
  const validatedFields = formSchema.safeParse(data)

  if (!validatedFields.success) {
    return { error: "Datos inválidos." }
  }

  try {
    const aiResponse = await generateCustomerSupportResponse(validatedFields.data)
    return { response: aiResponse.response }
  } catch (error) {
    console.error("Error generating AI response:", error)
    return { error: "No se pudo generar una respuesta. Por favor, inténtalo de nuevo más tarde." }
  }
}
