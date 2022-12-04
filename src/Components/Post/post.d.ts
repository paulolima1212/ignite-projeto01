type Content = {
  type: string;
  content: string;
};

type Author = {
  name: string;
  role: string;
  src: string;
};

export type Post = {
  author: Author;
  publishedAt: date;
  content: Content[];
};
