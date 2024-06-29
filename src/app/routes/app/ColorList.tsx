import Color from '@/features/stars/components/Color';
import { FC, useState } from 'react';
import colorData from '@/features/stars/assets/color-data.json';

export const ColorList: FC = () => {
  const [colors] = useState(colorData);
  return (
    <>
      {colors.map((color) => (
        <Color
          key={color.id}
          title={color.title}
          rating={color.rating}
          color={color.color}
        />
      ))}
    </>
  );
};
