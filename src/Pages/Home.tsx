import { Header, Post, Sidebar } from '../Components';

import { Posts } from '../Mocks/Posts';

import style from './styles.module.scss';

export function Home() {
  function handleRenderPosts() {
    return Posts.map((post) => {
      return (
        <Post
          key={post.id}
          author={post.author}
          content={post.content}
          publishedAt={post.publishedAt}
        />
      );
    });
  }

  return (
    <div>
      <Header />
      <div className={style.wrapper}>
        <Sidebar />
        <main className={style.posts}>{handleRenderPosts()}</main>
      </div>
    </div>
  );
}
