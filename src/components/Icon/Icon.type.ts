import { MouseEvent } from 'react';

export type IconT = {
  /**
   * Declares id attribute
   */
  id?: string;
  /**
   * Declares an icon for the button element
   * Icons from: https://material.io/resources/icons/?style=round
   */
  name: string;
  /**
   * Declares classes to customize the icon element
   */
  className?: string;
};

export type StyledIconVariantT = {
  /**
   * Declares variant attribute
   * Default value: default
   */
  variant: 'primary' | 'secondary' | 'default';
  /**
   * Declares size attribute
   * Default value: medium
   */
  size: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
};

export type StyledIconT = {
  /**
   * Declares disabled state.
   * Default value: false
   * */
  disabled: boolean;
  /**
   * Declares if the icon has bg.
   * Default value: false
   * */
  withBg: boolean;
  /**
   * Declares click function.
   * */
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
} & StyledIconVariantT;
