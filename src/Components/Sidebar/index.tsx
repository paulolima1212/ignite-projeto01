import { PencilLine } from 'phosphor-react';
import { Avatar } from '../Avatar';

import style from './styles.module.scss';

export function Sidebar() {
  return (
    <aside className={style.sidebar}>
      <img
        className={style.cover}
        src='https://images.unsplash.com/photo-1566837945700-30057527ade0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50'
      />
      <div className={style.profile}>
        <Avatar
          src='https://avatars.githubusercontent.com/u/101993891?v=4'
          hasborder
        />
        <div>
          <strong>Paulo Lima</strong>
          <span>Web Developer</span>
        </div>
      </div>
      <footer>
        <a href='#'>
          <PencilLine size={20} /> Edit your Profile
        </a>
      </footer>
    </aside>
  );
}
