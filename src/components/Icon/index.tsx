import StyledIcon from './Icon.css';
import { IconT } from './Icon.type';

const Icon = ({ id, name, className }: IconT) => {
  return (
    <StyledIcon id={id} className={className}>
      {name}
    </StyledIcon>
  );
};

export default Icon;
