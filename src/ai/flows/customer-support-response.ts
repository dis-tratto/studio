// customer-support-response.ts
'use server';

/**
 * @fileOverview An AI agent that generates personalized responses to customer inquiries for a bakery.
 *
 * - generateCustomerSupportResponse - A function that generates the customer support response.
 * - CustomerSupportInput - The input type for the generateCustomerSupportResponse function.
 * - CustomerSupportOutput - The return type for the generateCustomerSupportResponse function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CustomerSupportInputSchema = z.object({
  customerName: z.string().describe('The name of the customer.'),
  customerEmail: z.string().email().describe('The email address of the customer.'),
  customerMessage: z.string().describe('The message from the customer.'),
});

export type CustomerSupportInput = z.infer<typeof CustomerSupportInputSchema>;

const CustomerSupportOutputSchema = z.object({
  response: z.string().describe('The personalized response to the customer inquiry.'),
});

export type CustomerSupportOutput = z.infer<typeof CustomerSupportOutputSchema>;

export async function generateCustomerSupportResponse(input: CustomerSupportInput): Promise<CustomerSupportOutput> {
  return customerSupportResponseFlow(input);
}

const customerSupportPrompt = ai.definePrompt({
  name: 'customerSupportPrompt',
  input: {schema: CustomerSupportInputSchema},
  output: {schema: CustomerSupportOutputSchema},
  prompt: `You are a customer support agent for a bakery called Pan Calidez.

  A customer has submitted the following inquiry:

  Customer Name: {{{customerName}}}
  Customer Email: {{{customerEmail}}}
  Customer Message: {{{customerMessage}}}

  Generate a personalized and helpful response to the customer inquiry.  Keep the tone warm and friendly, and match the minimalist and warm design of the bakery.
  Be sure to thank the customer for contacting Pan Calidez.
  The response should be no more than 200 words.
  `,
});

const customerSupportResponseFlow = ai.defineFlow(
  {
    name: 'customerSupportResponseFlow',
    inputSchema: CustomerSupportInputSchema,
    outputSchema: CustomerSupportOutputSchema,
  },
  async input => {
    const {output} = await customerSupportPrompt(input);
    return output!;
  }
);
