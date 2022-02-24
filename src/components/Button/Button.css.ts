import styled from 'styled-components';

import { CustomStylesT } from '../../types/generic';
import fontWeight from '../../utils/fontWeight';
import pxToRem from '../../utils/pxToRem';
import { StyledButtonT } from './button.type';

const variantStyles: CustomStylesT = {
  primary: {
    backgroundColor: '#1f61f7',
    color: '#ffffff',
    fontWeight: fontWeight.bold,
    border: 'none',
  },
  outline: {
    backgroundColor: '#FFFFFF',
    color: '#060b25',
    fontWeight: fontWeight.medium,
    border: `${pxToRem(1)} solid #dde3ed`,
    boxShadow: 'none',
  },
  text: {
    backgroundColor: '#FFFFFF',
    color: '#1f61f7',
    fontWeight: fontWeight.medium,
    border: `none`,
    boxShadow: 'none',
  },
};

const sizeStyles: CustomStylesT = {
  small: {
    fontSize: pxToRem(12),
    lineHeight: pxToRem(16),
    fontWeight: fontWeight.medium,
    minWidth: pxToRem(72),
    height: pxToRem(32),
    padding: `${pxToRem(8)} ${pxToRem(12)}`,
    boxShadow: `${pxToRem(0)} ${pxToRem(4)} ${pxToRem(
      12
    )} rgba(18, 25, 84, 0.07)`,
  },
  medium: {
    fontSize: pxToRem(14),
    lineHeight: pxToRem(24),
    fontWeight: fontWeight.medium,
    minWidth: pxToRem(96),
    height: pxToRem(40),
    padding: `${pxToRem(8)} ${pxToRem(16)}`,
    boxShadow: `${pxToRem(0)} ${pxToRem(6)} ${pxToRem(
      14
    )} rgba(18, 25, 84, 0.07)`,
  },
  large: {
    fontSize: pxToRem(16),
    lineHeight: pxToRem(32),
    fontWeight: fontWeight.medium,
    minWidth: pxToRem(128),
    height: pxToRem(48),
    padding: `${pxToRem(8)} ${pxToRem(20)}`,
    boxShadow: `${pxToRem(0)} ${pxToRem(10)} ${pxToRem(
      16
    )} rgba(18, 25, 84, 0.07)`,
  },
  xlarge: {
    fontSize: pxToRem(20),
    lineHeight: pxToRem(40),
    fontWeight: fontWeight.medium,
    minWidth: pxToRem(160),
    height: pxToRem(56),
    padding: `${pxToRem(8)} ${pxToRem(24)}`,
    boxShadow: `${pxToRem(0)} ${pxToRem(10)} ${pxToRem(
      16
    )} rgba(18, 25, 84, 0.07)`,
  },
};

const iconPositionStyles: CustomStylesT = {
  left: {
    flexDirection: 'row',
    '& > img, & > i, & > svg': {
      marginRight: pxToRem(4),
    },
  },
  right: {
    flexDirection: 'row-reverse',
    '& > img, & > i, & > svg': {
      marginRight: pxToRem(4),
    },
  },
};

const StyledButton = styled.button<StyledButtonT>(
  {
    appearance: 'none',
    boxSizing: 'border-box',
    backgroundColor: 'transparent',
    border: 0,
    outline: 0,
    textAlign: 'center',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: pxToRem(24),
    fontFamily: 'inherit',
    width: 'fit-content',
  },
  ({ variant }) => variantStyles[variant],
  ({ size }) => sizeStyles[size],
  ({ loading }) => ({
    cursor: loading ? 'not-allowed' : 'pointer',
    '&:disabled': {
      boxShadow: 'none',
      cursor: 'not-allowed',
      color: '#afbacc',
      backgroundColor: '#ebeff5',
    },
  }),
  ({ iconPosition }) => iconPositionStyles[iconPosition]
);

export default StyledButton;
