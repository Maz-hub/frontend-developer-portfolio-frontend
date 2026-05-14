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

