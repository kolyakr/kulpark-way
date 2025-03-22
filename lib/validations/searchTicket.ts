import z from "zod";

export const searchTicketSchema = z.object({
  to: z.string(),
  from: z.string(),
  date: z.coerce.date(),
});

export type SearchTicketType = z.infer<typeof searchTicketSchema>;
