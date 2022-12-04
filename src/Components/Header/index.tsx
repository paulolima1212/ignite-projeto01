import style from './styles.module.scss';

import igniteLogo from '../../assets/ignite-logo.svg';

export function Header() {
  return (
    <header className={style.header}>
      <img src={igniteLogo} alt='ignite-logo' />
    </header>
  );
}
