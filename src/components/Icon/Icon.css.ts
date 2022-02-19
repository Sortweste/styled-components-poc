import styled, { CSSObject } from 'styled-components';

import { CustomStylesT } from '../../types/generic';
import pxToRem from '../../utils/pxToRem';
import { StlyedIconT } from './Icon.type';

const variantStyles: CustomStylesT = {
  default: {
    color: '#060b25',
  },
  primary: {
    color: '',
  },
  secondary: {
    color: '',
  },
};

const sizeStyles: CustomStylesT = {
  xsmall: {
    fontSize: '',
  },
  small: {
    fontSize: '',
  },
  medium: {
    fontSize: '',
  },
  large: {
    fontSize: '',
  },
  xlarge: {
    fontSize: '',
  },
};

const disabledStyles: CSSObject = {
  color: '',
  cursor: 'not-allowed',
};

const withBgStyles: CSSObject = {
  padding: pxToRem(4),
  boxSizing: 'border-box',
  borderRadius: '50%',
  backgroundColor: '',
};

const iconClickStyles: CSSObject = {
  cursor: 'pointer',
  // '& .${withBgStyles}': {
  //   '&:hover': {
  //     '@media (hover:hover)': {
  //       backgroundColor: '',
  //     },
  //   },
  // },
};

const StyledIcon = styled.i<StlyedIconT>(
  ({ variant, size, disabled, withBg, onClick }) => ({
    ...variantStyles[variant],
    ...sizeStyles[size],
    ...(disabled && disabledStyles),
    ...(withBg && withBgStyles),
    ...(!!onClick && iconClickStyles),
  })
);

export default StyledIcon;
