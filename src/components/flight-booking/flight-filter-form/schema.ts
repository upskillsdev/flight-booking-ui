import { z } from 'zod';

const cabinClassSchema = z.enum(['economy', 'premium', 'business', 'first']);
const stopSchema = z.enum(['any', 'direct', '1stop', '2+stops']);
const benefitSchema = z.enum(['meal', 'baggage', 'entertainment', 'wifi']);

export const flightFilterSchema = z.object({
  departureTimeRange: z
    .tuple([z.number().min(0).max(23), z.number().min(0).max(23)])
    .refine(([start, end]) => start <= end, {
      message: 'Departure start time must be before or equal to end time',
    })
    .optional(),
  arrivalTimeRange: z
    .tuple([z.number().min(0).max(23), z.number().min(0).max(23)])
    .refine(([start, end]) => start <= end, {
      message: 'Arrival start time must be before or equal to end time',
    })
    .optional(),
  priceRange: z
    .tuple([z.number().min(0).max(2000), z.number().min(0).max(2000)])
    .refine(([min, max]) => min <= max, {
      message: 'Minimum price must be less than or equal to maximum price',
    })
    .optional(),
  airlines: z.array(z.string()).optional(),
  stops: z.array(stopSchema).optional(),
  cabinClasses: z.array(cabinClassSchema).optional(),
  benefits: z.array(benefitSchema).optional(),
});
