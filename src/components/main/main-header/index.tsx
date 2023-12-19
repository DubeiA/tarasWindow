import css from './mainHeader.module.scss';

export const MainHeader = () => {
  return (
    <div className={css.image}>
      <div className={css.wrapperTitle}>
        <h1 className={css.heroTitle}>Вікна та Двері саме для Вас</h1>
        <button className={css.btn}>Замовити</button>
      </div>
    </div>
  );
};
