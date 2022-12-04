import { ThumbsUp, Trash } from 'phosphor-react';

import { Avatar } from '../Avatar';
import style from './styles.module.scss';

export function Comment({
  author,
  content,
  publishedAt,
  onDeleteComment,
}: CommentType) {
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
          <button>
            <ThumbsUp size={20} />
            Like
            <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
