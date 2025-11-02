export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  url: string;
  repo?: string;
  date: string;
  category: string;
  featured: boolean;
  tech: string[];
};

export type PostMeta = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
};
