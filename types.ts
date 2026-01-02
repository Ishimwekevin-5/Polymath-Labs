
export interface Experiment {
  id: string;
  title: string;
  category: 'Text' | 'Image' | 'Video' | 'Audio' | 'Code' | 'Search';
  description: string;
  image: string;
  tag: string;
  featured?: boolean;
}

export interface RecommendedTool {
  id: string;
  title: string;
  subtitle: string;
  bgColor: string;
  image: string;
}

export interface Session {
  id: string;
  title: string;
  description: string;
  image: string;
  duration: string;
}

export interface CommunityEvent {
  id: string;
  title: string;
  description: string;
  image: string;
  buttonText: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  author: string;
  image: string;
  tool: 'ImageFX' | 'MusicFX' | 'VideoFX' | 'TextFX';
  type: 'image' | 'audio';
  bgColor?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}
