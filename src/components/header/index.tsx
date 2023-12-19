'use client';

import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../public/logoWin.svg';
import css from './header.module.scss';
import burger from '../../../public/burger.svg';
import { useState } from 'react';

export const Header = () => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleHandler = () => {
    setOpen(!open);
  };

  return (
    <header className={css.header}>
      <Link href={'/'}>
        <Image src={logo} alt={'header_logo'} width={88} />
      </Link>

      <nav className={css.nav}>
        <Link href={'/about'} className={css.btn}>
          Про нас
        </Link>
        <Link href={'/gallary'} className={css.btn}>
          Галерея
        </Link>
        <Link href={'/goods'} className={css.btn}>
          Вікна / Двері
        </Link>
      </nav>

      <div className={css.containerBtn}>
        <button className={css.btn}>Замовити</button>
        <button className={css.btn}>Повідомлення</button>
      </div>

      <div className={css.burger}>
        <Image
          src={burger}
          alt={'header_logo'}
          width={40}
          onClick={toggleHandler}
        />
        {open && (
          <div className={css.burgerMenu}>
            <nav className={css.navMobile}>
              <Link href={'/about'} className={css.btn}>
                Про нас
              </Link>
              <Link href={'/gallary'} className={css.btn}>
                Галерея
              </Link>
              <Link href={'/goods'} className={css.btn}>
                Вікна / Двері
              </Link>
            </nav>

            <div className={css.btnMobile}>
              <button className={css.btn}>Замовити</button>
              <button className={css.btn}>Повідомлення</button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
