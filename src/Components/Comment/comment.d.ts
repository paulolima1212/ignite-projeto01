type CommentType = {
  author: string;
  publishedAt: date;
  content: string;
  onDeleteComment?: (value: string) => void;
};
