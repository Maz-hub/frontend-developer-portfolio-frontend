export type Project = {
  id: number;
  documentId: string;
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

export type Post = {
  id: string;
  slug: string;
  title: string;
  body: string;
  excerpt: string;
  date: string;
  image: string;
};

export type StrapiResponse<T> = {
  data: T[];
};

export type StrapiTech = {
  id: number;
  name: string;
};

export type StrapiProject = {
  id: number;
  documentId: string;
  title: string;
  description: string;
  image?: {
    url: string;
    formats?: {
      thumbnail?: { url: string };
      small?: { url: string };
      medium?: { url: string };
      large?: { url: string };
    };
  };
  url: string;
  repo?: string;
  date: string;
  category: string;
  featured: boolean;
  tech?: StrapiTech[];
};

export type StrapiPost = {
  id: string;
  documentId: string;
  title: string;
  slug: string;
  excerpt: string;
  body: string;
  date: string;
  image?: {
    url: string;
    formats?: {
      thumbnail?: { url: string };
      small?: { url: string };
      medium?: { url: string };
      large?: { url: string };
    };
  };
};
