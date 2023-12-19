import css from './footer.module.scss';

export const Footer = () => {
  return (
    <footer>
      <address>
        <ul className={css.address}>
          <li className={css.address__item}>
            <a
              className={css.address__location}
              href='https://maps.app.goo.gl/6eXb1kXFifbhsNLQ7'
              target='_blank'
              rel='noreferrer noopener nofollow'>
              м.Снятин, Івано-Франківська область, <br />
              вул.Тараса Шевченка, 119
            </a>
          </li>
          <li className={css.address__item}>
            <a
              className={css.address__contact}
              href='mailto:info@devstudio.com'>
              TarasWindow@gmail.com
            </a>
          </li>
          <li className={css.address__item}>
            <a className={css.address__contact} href='tel:+380662622689'>
              +380 66 262 26 89
            </a>
          </li>
        </ul>
      </address>
      <div>
        <p>form</p>
      </div>
    </footer>
  );
};
