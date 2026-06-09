import { defineCollection, z } from "astro:content";

// Описание полей для каждого гайда. Эти поля заполняешь в начале .md файла.
const guides = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),            // напр. "Нейросети", "Заработок", "Монтаж"
    date: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { guides };
