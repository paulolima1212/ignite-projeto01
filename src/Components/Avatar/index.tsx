import style from './styles.module.scss';

export function Avatar({
  src,
  hasborder,
}: {
  src: string;
  hasborder: boolean;
}) {
  return (
    <img
      className={hasborder ? style.avatarwithborder : style.avatarnoborder}
      src={src}
      alt='user-avatar'
      id='avatarPhoto'
    />
  );
}
