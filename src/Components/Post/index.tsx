import { Avatar } from '../Avatar';
import { Comment } from '../Comment';
import { Post as PostType } from './post';
import style from './styles.module.scss';

import { format, formatDistanceToNow } from 'date-fns';
import { ChangeEvent, FormEvent, InvalidEvent, useRef, useState } from 'react';

export function Post({ author, content, publishedAt }: PostType) {
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState<CommentType[]>([]);
  const textComment = useRef<HTMLTextAreaElement>(null);

  const datePostFormatted = format(publishedAt, 'd LLL yyyy');
  const dateAndTimePost = format(publishedAt, 'dd LL yyyy H mm');
  const datePostDistanceToNow = formatDistanceToNow(publishedAt, {
    addSuffix: true,
  });

  function handleNewPostComment(event: FormEvent<HTMLFormElement>) {
    event?.preventDefault();

    const dateComment = Date.now();

    setComments([
      ...comments,
      {
        author: 'Paulo Lima',
        content: newComment,
        publishedAt: dateComment,
      },
    ]);
    setNewComment('');
  }

  function handleChangeNewComment(event: ChangeEvent<HTMLTextAreaElement>) {
    textComment.current!.setCustomValidity('');
    setNewComment(event.target.value);
  }

  function handleDeleteComment(commentPost: string) {
    const newCommentsOnPost = comments.filter((comment) => {
      return comment.content !== commentPost;
    });

    setComments(newCommentsOnPost);
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event?.target.setCustomValidity('This is required field!');
  }

  const isEmptyTextComment = newComment.length === 0;

  return (
    <article className={style.post}>
      <header>
        <div className={style.profile}>
          <Avatar src={author.src} hasborder />

          <div className={style.profileinfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time dateTime={dateAndTimePost} title={datePostFormatted}>
          {datePostDistanceToNow}
        </time>
      </header>

      <div className={style.content}>
        {content.map((line) => {
          if (line.type === 'link') {
            return (
              <p key={line.content} className={style.hashtag}>
                <a href='#'>{line.content}</a>
              </p>
            );
          }
          if (line.type === 'post') {
            return <p key={line.content}>{line.content}</p>;
          }
        })}
      </div>

      <form onSubmit={handleNewPostComment} className={style.commentForm}>
        <strong>Leave your feedback</strong>

        <textarea
          className={style.textarea}
          placeholder='Leave a comment'
          value={newComment}
          onChange={handleChangeNewComment}
          name='comment'
          onInvalid={handleNewCommentInvalid}
          required
          ref={textComment}
        />
        <footer className={style.buttonpublish}>
          <button type='submit' disabled={isEmptyTextComment}>
            Publish
          </button>
        </footer>
      </form>

      {comments.map((comment) => {
        return (
          <Comment
            author={comment.author}
            content={comment.content}
            publishedAt={comment.publishedAt}
            key={comment.content}
            onDeleteComment={() => handleDeleteComment(comment.content)}
          />
        );
      })}
    </article>
  );
}
