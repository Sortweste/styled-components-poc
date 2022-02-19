import CircularLoader from '../CircularLoader';
import Icon from '../Icon';
import StyledButton from './Button.css';
import { ButtonT, StyledButtonT } from './button.type';
import parseVariants from './utils';

const Button = ({
  id,
  icon,
  onClick,
  text,
  className,
  iconClassName,
  loading = false,
  disabled = false,
  size = 'medium',
  variant = 'primary',
  iconPosition = 'left',
}: ButtonT & Partial<StyledButtonT>) => {
  const buttonProps = { id, className, variant, loading, size, onClick };

  return (
    <StyledButton
      iconPosition={iconPosition}
      disabled={disabled || loading}
      type="button"
      {...buttonProps}
    >
      {loading ? (
        <CircularLoader size={size} variant={parseVariants(variant)} />
      ) : (
        <>
          {icon && <Icon className={iconClassName} name={icon} />}
          {text}
        </>
      )}
    </StyledButton>
  );
};

export default Button;
