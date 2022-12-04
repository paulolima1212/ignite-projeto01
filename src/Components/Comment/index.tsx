import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';

import { Avatar } from '../Avatar';
import style from './styles.module.scss';

export function Comment({
  author,
  content,
  publishedAt,
  onDeleteComment,
}: CommentType) {
  const [like, setLike] = useState(0);

  function handleLikeCount() {
    setLike((prev) => prev + 1);
  }

  return (
    <div className={style.comment}>
      <Avatar
        hasborder={false}
        src='https://avatars.githubusercontent.com/u/101993891?v=4'
      />
      <div className={style.commentArea}>
        <div className={style.commentBox}>
          <div className={style.commentContent}>
            <header>
              <div className={style.authorAndTime}>
                <div className={style.author}>
                  <strong>{author}</strong>
                  <span>(you)</span>
                </div>
                <time>about 1h</time>
              </div>
              <button onClick={() => onDeleteComment!(content)}>
                <Trash size={24} />
              </button>
            </header>
            <p>{content}</p>
          </div>
        </div>
        <footer>
          <button onClick={handleLikeCount}>
            <ThumbsUp size={20} />
            Like
            <span>{like}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
