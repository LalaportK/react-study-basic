import { FC } from 'react';
import { Link } from 'react-router-dom';

export const Top: FC = () => {
  return (
    <>
      <p>
        <Link to={'/color'}>color</Link>
      </p>
    </>
  );
};
