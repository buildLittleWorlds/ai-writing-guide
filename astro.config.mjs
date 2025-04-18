import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mdx from '@astrojs/mdx';
import astroExpressiveCode from 'astro-expressive-code';

export default defineConfig({
  integrations: [
    astroExpressiveCode(),
    mdx(),
    starlight({
      title: 'AI Writing Guide',
      description: 'A comprehensive guide to AI-assisted writing styles and persona curation',
      social: [
        { label: 'GitHub', icon: 'github', href: 'https://github.com/yourusername/ai-writing-guide' },
      ],
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Introduction', link: '/getting-started/' },
          ],
        },
        {
          label: 'Persona Toolkit',
          items: [
            { label: 'Overview', link: '/persona-toolkit/' },
            { label: 'Sentence Strategies', link: '/persona-toolkit/sentence-strategies/' },
            { label: 'Diction, Tone & Language', link: '/persona-toolkit/diction-tone-language/' },
            { label: 'Voice Markers', link: '/persona-toolkit/voice-markers/' },
          ],
        },
        {
          label: 'Prose Personas',
          items: [
            { label: 'Overview', link: '/personas/' },
            { label: 'Precisionist Observer', link: '/personas/precisionist-observer/' },
            { label: 'Intimate Confidante', link: '/personas/intimate-confidante/' },
            { label: 'Authoritative Expert', link: '/personas/authoritative-expert/' },
            { label: 'Passionate Advocate', link: '/personas/passionate-advocate/' },
            { label: 'Contemplative Inquirer', link: '/personas/contemplative-inquirer/' },
            { label: 'Engaging Narrator', link: '/personas/engaging-narrator/' },
            { label: 'Witty Commentator', link: '/personas/witty-commentator/' },
            { label: 'Formal Moralist', link: '/personas/formal-moralist/' },
            { label: 'Philosophical Investigator', link: '/personas/philosophical-investigator/' },
            { label: 'Systems Explainer', link: '/personas/systems-explainer/' },
          ],
        },
        {
          label: 'Research',
          items: [
            { label: 'Overview', link: '/research/' },
            { label: 'In-Context Learning Effectiveness', link: '/research/icl-effectiveness/' },
            { label: 'Example Quality & Selection', link: '/research/example-quality/' },
          ],
        },
        {
          label: 'Resources',
          items: [
            { label: 'Author Resources', link: '/author-resources/' },
            { label: 'Examples', link: '/examples/' },
            { label: 'Example Paper', link: '/examples/example-paper/' },
            { label: 'Quotation Analysis', link: '/examples/quotation-analysis/' },
          ],
        },
      ],
      customCss: [
        // Path to your custom CSS file
        './src/styles/custom.css',
      ],
    }),
  ],
});