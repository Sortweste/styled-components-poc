import styled from 'styled-components';

import { CustomStylesT } from '../../types/generic';
import fontWeight from '../../utils/fontWeight';
import pxToRem from '../../utils/pxToRem';
import { StyledButtonT } from './button.type';

const variantStyles: CustomStylesT = {
  primary: {
    backgroundColor: '#1f61f7',
    color: '#fff',
    fontWeight: '',
    border: 'none',
  },
  outline: {},
  text: {},
};

const sizeStyles: CustomStylesT = {
  small: {
    fontSize: pxToRem(12),
    lineHeight: pxToRem(16),
    fontWeight: fontWeight.medium,
    minWidth: pxToRem(72),
    height: pxToRem(32),
    padding: `${pxToRem(8)} ${pxToRem(12)}`,
    boxShadow: 'none',
  },
  medium: {},
  large: {},
  xlarge: {},
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
      color: '#AFBACC',
    },
  }),
  ({ iconPosition }) => iconPositionStyles[iconPosition]
);

export default StyledButton;
