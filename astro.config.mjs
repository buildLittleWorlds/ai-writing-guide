import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mdx from '@astrojs/mdx';

export default defineConfig({
  integrations: [
    starlight({
      title: 'AI Writing Guide',
      description: 'A comprehensive guide to AI-assisted writing styles and persona curation',
      social: [
        { 
          icon: 'github', 
          label: 'GitHub', 
          href: 'https://github.com/yourusername/ai-writing-guide' 
        }
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
            { label: 'Overview', link: '/resources/' },
            { 
              label: 'Persona Demonstrations',
              items: [
                { label: 'Literary Analysis Overview', link: '/resources/persona-demonstrations/' },
                { label: 'Precisionist Observer', link: '/resources/persona-demonstrations/precisionist-observer-analysis/' },
                { label: 'Intimate Confidante', link: '/resources/persona-demonstrations/intimate-confidante-analysis/' },
                { label: 'Authoritative Expert', link: '/resources/persona-demonstrations/authoritative-expert-analysis/' },
                { label: 'Passionate Advocate', link: '/resources/persona-demonstrations/passionate-advocate-analysis/' },
                { label: 'Contemplative Inquirer', link: '/resources/persona-demonstrations/contemplative-inquirer-analysis/' },
                { label: 'Engaging Narrator', link: '/resources/persona-demonstrations/engaging-narrator-analysis/' },
                { label: 'Witty Commentator', link: '/resources/persona-demonstrations/witty-commentator-analysis/' },
                { label: 'Formal Moralist', link: '/resources/persona-demonstrations/formal-moralist-analysis/' },
                { label: 'Philosophical Investigator', link: '/resources/persona-demonstrations/philosophical-investigator-analysis/' },
                { label: 'Systems Explainer', link: '/resources/persona-demonstrations/systems-explainer-analysis/' },
              ]
            },
            {
              label: 'Persona Prompts',
              items: [
                { label: 'Prompting Guide', link: '/resources/persona-prompts/' },
                { label: 'Precisionist Observer', link: '/resources/persona-prompts/precisionist-observer-prompt/' },
                { label: 'Intimate Confidante', link: '/resources/persona-prompts/intimate-confidante-prompt/' },
                { label: 'Authoritative Expert', link: '/resources/persona-prompts/authoritative-expert-prompt/' },
                { label: 'Passionate Advocate', link: '/resources/persona-prompts/passionate-advocate-prompt/' },
                { label: 'Contemplative Inquirer', link: '/resources/persona-prompts/contemplative-inquirer-prompt/' },
                { label: 'Engaging Narrator', link: '/resources/persona-prompts/engaging-narrator-prompt/' },
                { label: 'Witty Commentator', link: '/resources/persona-prompts/witty-commentator-prompt/' },
                { label: 'Formal Moralist', link: '/resources/persona-prompts/formal-moralist-prompt/' },
                { label: 'Philosophical Investigator', link: '/resources/persona-prompts/philosophical-investigator-prompt/' },
                { label: 'Systems Explainer', link: '/resources/persona-prompts/systems-explainer-prompt/' },
              ]
            },
            { label: 'Author Guidelines', link: '/resources/author-guidelines/' }
          ]
        },
        {
          label: 'Examples',
          items: [
            { label: 'Overview', link: '/examples/' },
            { label: 'Quotation Analysis', link: '/examples/quotation-analysis/' },
            { label: 'Example Paper', link: '/examples/example-paper/' },
          ],
        },
      ],
      customCss: [
        './src/styles/custom.css',
      ],
    }),
    mdx(),
  ],
});