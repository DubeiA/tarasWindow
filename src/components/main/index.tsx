'use client';

import { MainHeader } from './main-header';
import { Project } from './main-project';

import { dataWindows } from './dataWindows';
import { About } from './about';
import css from './main.module.scss';

export const Main = () => {
  return (
    <section>
      <MainHeader />
      <Project dataWindows={dataWindows} />
      <About />
    </section>
  );
};
