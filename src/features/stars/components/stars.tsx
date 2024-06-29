import Star from '@/features/stars/components/RatingStars';
import { FC, useState } from 'react';

export const StarRating: FC<{ rate: number }> = ({ rate }) => {
  const [selectedStars, setSelectedStars] = useState(rate);
  return (
    <>
      {[...Array(5)].map((_n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => {
            setSelectedStars(i + 1);
          }}
        />
      ))}
    </>
  );
};
