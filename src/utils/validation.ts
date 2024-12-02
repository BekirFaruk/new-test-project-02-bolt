import { z } from 'zod';

export const birthDataSchema = z.object({
  location: z.object({
    id: z.string(),
    name: z.string(),
    country: z.string(),
    latitude: z.number(),
    longitude: z.number(),
  }),
  date: z.string(),
  time: z.string(),
});