import { FC } from 'react';
import { StarRating } from './stars';

const Color: FC<{ title: string; color: string; rating: number }> = ({
  title,
  color,
  rating,
}) => {
  return (
    <section>
      <h1>{title}</h1>
      <div style={{ height: 50, backgroundColor: color }} />
      <StarRating rate={rating} />
    </section>
  );
};

export default Color;
