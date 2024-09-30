import { z } from "zod";

export const UserSchema = z
    .object({
        _id: z.string(),
        email: z.string(),
        photo: z.string(),
        name: z.string(),
        username: z.string(),
        last_active_at: z.number(),
        last_sign_in_at: z.number()
    });

export type UserSchemaType = z.infer<typeof UserSchema>;
