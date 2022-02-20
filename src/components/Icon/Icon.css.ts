import styled from 'styled-components';

import { CustomStylesT } from '../../types/generic';
import createStyledComponent from '../../utils/createStyledComponent';
import createStyles from '../../utils/createStyles';
import pxToRem from '../../utils/pxToRem';
import { StlyedIconT } from './Icon.type';

const variantStyles: CustomStylesT = {
  default: {
    color: '#060b25',
  },
  primary: {
    color: '#1f61f7',
  },
  secondary: {
    color: '#fff',
  },
};

const sizeStyles: CustomStylesT = {
  xsmall: {
    fontSize: pxToRem(16),
  },
  small: {
    fontSize: pxToRem(20),
  },
  medium: {
    fontSize: pxToRem(24),
  },
  large: {
    fontSize: pxToRem(28),
  },
  xlarge: {
    fontSize: pxToRem(32),
  },
};

const disabledStyles = createStyles({
  color: '#AFBACC',
  cursor: 'not-allowed',
});

const withBgStyles = createStyles({
  padding: pxToRem(4),
  boxSizing: 'border-box',
  borderRadius: '50%',
  backgroundColor: '#EBEFF5',
});

const iconClickStyles = createStyles({
  cursor: 'pointer',
  // [`& ${JSON.stringify(withBgStyles)}:hover`]: {
  //   backgroundColor: '#DDE3ED',
  // },
});

const addCustomChange = () => {
  withBgStyles[':hover'] = {
    backgroundColor: '#DDE3ED',
  };
};

const StyledIcon = styled.i<StlyedIconT>(
  ({ variant, size, disabled, withBg, onClick }) => {
    !!onClick && withBg && addCustomChange(); // todo: remove hover event :( Lo estoy agregando, no condicionando
    return {
      ...variantStyles[variant],
      ...sizeStyles[size],
      ...(disabled && disabledStyles),
      ...(withBg && withBgStyles),
      ...(!!onClick && iconClickStyles),
    };
  }
);

export default StyledIcon;
