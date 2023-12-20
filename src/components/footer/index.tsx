'use client';

import css from './footer.module.scss';
import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

export const Footer = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event: {
    currentTarget: any;
    preventDefault: () => void;
    stopPropagation: () => void;
  }) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <footer className={css.footer}>
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
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        className={css.form}>
        <Row className='mb-4'>
          <Form.Group as={Col} md='7' controlId='validationCustom01'>
            <Form.Label>П.І.Б</Form.Label>
            <Form.Control required type='text' placeholder='ПІБ' />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md='5' controlId='validationCustom02'>
            <Form.Label>Телефон</Form.Label>
            <Form.Control
              required
              type='number'
              placeholder='+380'
              defaultValue='+380 '
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
          <Form.Label>Повідомлення</Form.Label>
          <Form.Control as='textarea' rows={3} />
        </Form.Group>
        <Button type='submit'>Відправити</Button>
      </Form>
    </footer>
  );
};
