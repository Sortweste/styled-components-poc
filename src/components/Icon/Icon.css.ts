import styled from 'styled-components';

import { CustomStylesT } from '../../types/generic';
import createVariant from '../../utils/createVariant';
import pxToRem from '../../utils/pxToRem';
import { StyledIconT, StyledIconVariantT } from './Icon.type';

const variantStyles = createVariant<StyledIconVariantT>({
  size: {
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
  },
  variant: {
    default: {
      color: '#060b25',
    },
    primary: {
      color: '#1f61f7',
    },
    secondary: {
      color: '#fff',
    },
  },
});

const disabledStyles: CustomStylesT = {
  color: '#AFBACC',
  cursor: 'not-allowed',
};

const withBgStyles: CustomStylesT = {
  padding: pxToRem(4),
  boxSizing: 'border-box',
  borderRadius: '50%',
  backgroundColor: '#EBEFF5',
};

const iconClickStyles: CustomStylesT = {
  cursor: 'pointer',
};

const withBgAndOnClickStyles: CustomStylesT = {
  '&:hover': {
    backgroundColor: '#DDE3ED',
  },
};

const StyledIcon = styled.i<StyledIconT>(
  ({ variant, size, disabled, withBg, onClick }) => ({
    ...variantStyles({ size, variant }),
    ...(disabled && disabledStyles),
    ...(withBg && withBgStyles),
    ...(!!onClick && iconClickStyles),
    ...(!!onClick && withBg && withBgAndOnClickStyles),
  })
);

export default StyledIcon;
