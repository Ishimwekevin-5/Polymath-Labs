
import { Experiment, RecommendedTool, Session, CommunityEvent, GalleryItem } from './types';

export interface FeaturedExperiment extends Experiment {
  bgColor: string;
  visualAsset?: string;
}

export const FEATURED_EXPERIMENTS: FeaturedExperiment[] = [
  {
    id: 'mixboard',
    title: 'Mixboard',
    category: 'Text',
    description: 'Mixboard is an experimental, AI-powered concepting board designed to help you explore, expand and refine your ideas.',
    image: 'https://picsum.photos/id/101/800/600',
    tag: 'New',
    bgColor: 'bg-[#5da1f6]',
    featured: true
  },
  {
    id: 'pomelli',
    title: 'Pomelli',
    category: 'Image',
    description: 'Pomelli is an experimental, AI powered marketing tool designed to build scalable, on-brand content to help you connect with your audience faster.',
    image: 'https://picsum.photos/id/102/800/600',
    tag: 'Beta',
    bgColor: 'bg-[#5d6e3c]',
    featured: true
  },
  {
    id: 'notebook-lm-featured',
    title: 'NotebookLM',
    category: 'Text',
    description: 'An AI-powered notebook for personalized learning and critical thinking. Synthesize documents and generate insights instantly.',
    image: 'https://picsum.photos/id/103/800/600',
    tag: 'Popular',
    bgColor: 'bg-[#4285F4]',
    featured: true
  }
];

export const RECOMMENDED_TOOLS: RecommendedTool[] = [
  {
    id: 'tool-1',
    title: 'CC',
    subtitle: 'Smarter Inbox: AI that helps you prioritize your day.',
    bgColor: 'bg-[#fbcfe8]',
    image: 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'tool-2',
    title: 'Disco',
    subtitle: 'Take the web for a fresh spin with AI browsing.',
    bgColor: 'bg-[#a5b4fc]',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'tool-3',
    title: 'Doppl',
    subtitle: 'Virtual Try-on: High-fidelity model experiences.',
    bgColor: 'bg-[#60a5fa]',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'tool-4',
    title: 'Google app',
    subtitle: 'Search your world with generative AI insights.',
    bgColor: 'bg-[#fb923c]',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=800&auto=format&fit=crop'
  }
];

export const SESSIONS: Session[] = [
  {
    id: 'session-1',
    title: 'The Future of Music',
    description: 'Exploring how AI and human creativity can blend into new sonic landscapes.',
    image: 'https://images.unsplash.com/photo-1514525253361-bee8718a302a?q=80&w=800&auto=format&fit=crop',
    duration: '4:12'
  },
  {
    id: 'session-2',
    title: 'Designing with Intent',
    description: 'Designers at Google discuss how AI assistants help refine the visual language of the future.',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800&auto=format&fit=crop',
    duration: '3:45'
  },
  {
    id: 'session-3',
    title: 'AI & Storytelling',
    description: 'An intimate look at how writers use generative models to overcome creative blocks.',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=800&auto=format&fit=crop',
    duration: '5:20'
  }
];

export const COMMUNITY_EVENTS: CommunityEvent[] = [
  {
    id: 'event-1',
    title: 'USC Makeathon in LA',
    description: 'A makeathon with students at USC to showcase our tools and inspire them to think about creativity x AI',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop',
    buttonText: 'Check out the winners'
  },
  {
    id: 'event-2',
    title: 'Creative Breakfast at LA Tech Week',
    description: 'A breakfast at Google Playa Vista where we invite the LA creative community to participate in speed prompting competitions.',
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=1200&auto=format&fit=crop',
    buttonText: 'Learn More'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gallery-1',
    title: 'Sip and Drift Away',
    author: '@prussian_blue4',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=800&auto=format&fit=crop',
    tool: 'ImageFX',
    type: 'image'
  },
  {
    id: 'gallery-2',
    title: 'The Sound of Autumn',
    author: '@SLATERBBURN',
    image: '',
    tool: 'MusicFX',
    type: 'audio',
    bgColor: 'bg-[#f4c2e6]'
  },
  {
    id: 'gallery-3',
    title: 'Victorian Era Fabric',
    author: '@emilyvamp',
    image: 'https://images.unsplash.com/photo-1544256718-3bcf237f3974?q=80&w=800&auto=format&fit=crop',
    tool: 'ImageFX',
    type: 'image'
  },
  {
    id: 'gallery-4',
    title: 'Cotton Candy Skies',
    author: '@Rosha...',
    image: 'https://images.unsplash.com/photo-1499346030926-9a72daac6c63?q=80&w=800&auto=format&fit=crop',
    tool: 'ImageFX',
    type: 'image'
  }
];

export const EXPERIMENTS: Experiment[] = [
  {
    id: 'notebook-lm',
    title: 'NotebookLM',
    category: 'Text',
    description: 'An AI-powered notebook for personalized learning and critical thinking.',
    image: 'https://picsum.photos/id/1/800/600',
    tag: 'New'
  },
  {
    id: 'imagefx',
    title: 'ImageFX',
    category: 'Image',
    description: 'A new image generation tool that offers unprecedented control over details.',
    image: 'https://picsum.photos/id/10/800/600',
    tag: 'Popular'
  },
  {
    id: 'musicfx',
    title: 'MusicFX',
    category: 'Audio',
    description: 'Create unique music tracks simply by describing your creative vision.',
    image: 'https://picsum.photos/id/20/800/600',
    tag: 'Trending'
  },
  {
    id: 'videofx',
    title: 'VideoFX',
    category: 'Video',
    description: 'Generate stunning high-fidelity video sequences from text prompts.',
    image: 'https://picsum.photos/id/30/800/600',
    tag: 'Beta'
  },
  {
    id: 'textfx',
    title: 'TextFX',
    category: 'Text',
    description: 'AI-powered writing tools for rappers, writers, and wordsmiths.',
    image: 'https://picsum.photos/id/40/800/600',
    tag: 'Creative'
  },
  {
    id: 'search-labs',
    title: 'SGE',
    category: 'Search',
    description: 'Experience the future of search with generative AI insights.',
    image: 'https://picsum.photos/id/50/800/600',
    tag: 'Core'
  }
];

export const CATEGORIES = ['All', 'Text', 'Image', 'Video', 'Audio', 'Code', 'Search'];
