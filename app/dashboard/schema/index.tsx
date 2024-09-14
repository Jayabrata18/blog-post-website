import { z } from "zod";

export const BlogFormSchema = z
    .object({
        title: z.string().min(2, {
            message: "Title must be at least 2 characters."
        }),
        image_url: z.string().url({
            message: "Invalid URL"
        }),
        content: z.string().min(10, {
            message: "Content must be at least 10 characters."
        }),
        isPremium: z.boolean(),
        isPublished: z.boolean()
    })
    .refine(
        (data) => {
            const image_url = data.image_url;
            try {
                const url = new URL(image_url);
                return url.hostname === "image.unsplash.com";
            } catch {
                return false;
            }
        },
        {
            message: "Invalid image URL. Please use an image from Unsplash.",
            path: ["image_url"]
        }
    );

export type BlogFormSchemaType = z.infer<typeof BlogFormSchema>;