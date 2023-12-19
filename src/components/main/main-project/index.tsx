import css from './project.module.scss';
import { StaticImageData } from 'next/image';

import { FC } from 'react';

import { CardExample } from '../card';

interface ProjectProps {
  dataWindows: {
    id: number;
    text: string;
    img: StaticImageData;
    title: string;
  }[];
}

export const Project: FC<ProjectProps> = ({ dataWindows }) => {
  return (
    <div>
      <h2 className={css.title}>Популярні замовлення</h2>
      <ul className={css.grid}>
        {dataWindows.map(item => {
          return (
            <li key={item.id}>
              <CardExample data={item} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
