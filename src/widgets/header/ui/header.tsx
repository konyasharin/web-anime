import { FC } from 'react';
import { Container, Logo } from '@shared';

export const Header: FC = () => {
  return (
    <div className={'mt-8 bg-(--black-light-700) relative'}>
      <Container className={'flex justify-between items-center'}>
        <div>
          <div
            className={
              'absolute left-[-10px] h-full w-[30%] skew-x-12 bg-white'
            }
          />
          <Logo />
        </div>
        <div>123</div>
      </Container>
    </div>
  );
};
