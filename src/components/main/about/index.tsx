import css from './about.module.scss';

import Card from 'react-bootstrap/Card';

export const About = () => {
  return (
    <section>
      <h3 className={css.title}>Про Нас</h3>

      <ul className={css.list}>
        <li>
          <Card className='text-center'>
            <Card.Body>
              <Card.Title className={css.cardTitle}>
                {' '}
                Ми давно з вами
              </Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                consequuntur laborum repellat possimus eveniet ipsam molestiae
                distinctio autem vel fugiat?
              </Card.Text>
            </Card.Body>
          </Card>
        </li>
        <li>
          <Card className='text-center'>
            <Card.Body>
              <Card.Title className={css.cardTitle}>
                Надійно і швидко
              </Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                consequuntur laborum repellat possimus eveniet ipsam molestiae
                distinctio autem vel fugiat?
              </Card.Text>
            </Card.Body>
          </Card>
        </li>
        <li>
          <Card className='text-center'>
            <Card.Body>
              <Card.Title className={css.cardTitle}>Якість</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                consequuntur laborum repellat possimus eveniet ipsam molestiae
                distinctio autem vel fugiat?
              </Card.Text>
            </Card.Body>
          </Card>
        </li>
      </ul>
    </section>
  );
};
