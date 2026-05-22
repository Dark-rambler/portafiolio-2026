export type Project = {
  id: string;
  title: string;
  summary: string;
  href: string;
  tags: string[];
  featured: boolean;
  publishedAt: string;
};

export type GetProjectsOptions = {
  featuredOnly?: boolean;
};
