import { FC } from 'react';
import { FaStar } from 'react-icons/fa';

const Star: FC<{
  selected: boolean;
  onSelect: () => void;
}> = ({ selected, onSelect }) => {
  return <FaStar color={selected ? 'red' : 'gray'} onClick={onSelect} />;
};

export default Star;
