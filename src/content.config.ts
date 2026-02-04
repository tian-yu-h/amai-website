import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) => z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		// Added draft (fixes your current error)
		draft: z.boolean().optional().default(false),
		// Added featured (useful for highlighting top cases)
		featured: z.boolean().optional().default(false),
		// Added postSlug (so you can control URLs)
		postSlug: z.string().optional(),
		
		// Keep these as optional
		updatedDate: z.coerce.date().optional(),
		heroImage: image().optional(), 
		tags: z.array(z.string()).optional().default(["general"]),
		category: z.string().optional().default("Case Study"),
  		author: z.string().optional().default("Tian Yu"),
		}),
});

export const collections = { blog };
