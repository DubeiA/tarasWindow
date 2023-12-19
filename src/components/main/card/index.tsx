'use client';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FC } from 'react';
import { StaticImageData } from 'next/image';

import css from './card.module.scss';

interface CardProps {
  data: {
    id: number;
    text: string;
    img: StaticImageData;
    title: string;
  };
}

export const CardExample: FC<CardProps> = ({ data }) => {
  return (
    <div className='d-flex justify-content-around'>
      <Card className={css.card}>
        <Card.Img variant='top' src={data.img.src} />
        <Card.Body>
          <Card.Title className={css.title}>{data.title}</Card.Title>
          <Card.Text className={css.text}>{data.text}</Card.Text>
          <Button variant='primary'>Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};
