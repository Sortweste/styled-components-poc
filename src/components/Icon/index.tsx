import classNames from 'classnames';

import StyledIcon from './Icon.css';
import { IconT, StyledIconT } from './Icon.type';

const Icon = ({
  id,
  name,
  className,
  onClick,
  variant = 'default',
  size = 'medium',
  withBg = false,
  disabled = false,
}: IconT & Partial<StyledIconT>) => {
  const iconProps = { variant, size, withBg, disabled };
  const iconClassNames = classNames('material-icons', className);

  return (
    <StyledIcon
      id={id}
      className={iconClassNames}
      onClick={onClick}
      {...iconProps}
    >
      {name}
    </StyledIcon>
  );
};

export default Icon;
