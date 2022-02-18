import { StyledCircularLoader } from './circularLoader.css';
import { CircularLoaderT } from './circularLoader.type';

const CircularLoader = ({
  size = 'medium',
  variant = 'primary',
  className,
}: CircularLoaderT) => {
  return (
    <StyledCircularLoader
      size={size}
      variant={variant}
      className={className}
      viewBox="25 25 50 50"
    >
      <circle cx="50" cy="50" r="20" />
    </StyledCircularLoader>
  );
};

export default CircularLoader;
