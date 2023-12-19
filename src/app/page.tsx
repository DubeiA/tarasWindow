import css from '../components/header/header.module.scss';
import { Main } from '@/components/main';

export default function Home() {
  return (
    <section>
      <div className={css.border}></div>
      <Main />
    </section>
  );
}

