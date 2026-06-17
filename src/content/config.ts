import { defineCollection, z } from "astro:content";

// Поля для каждого гайда. Заполняешь в начале .md файла.
// rubric — в какую рубрику попадёт гайд (обязательно).
const guides = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    rubric: z.enum(["bloger", "montazh", "zarabotok", "strany", "udalyonka", "poleznoe"]),
    category: z.string().default(""),   // маленькая подпись-тег на карточке
    date: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { guides };
