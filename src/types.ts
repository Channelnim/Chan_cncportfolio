export interface SlideImage {
  id: string;
  url: string;
  alt: string;
  title: string;
  description: string;
  viewAngle: string;
  fit?: 'contain' | 'cover';
  scaleClass?: string;
}

export interface ProjectItem {
  id: string;
  number: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string;
  isNims?: boolean;
}

export interface CapabilityItem {
  number: string;
  title: string;
  description: string;
}

export interface TimelineItem {
  period: string;
  title: string;
  description: string;
}
