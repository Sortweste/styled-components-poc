import { MouseEvent } from 'react';

export type ButtonT = {
  /**
   * Declares button text attribute
   */
  text: string;
  /**
   * Declares id attribute
   */
  id?: string;
  /**
   * Declares an icon for the button element
   * Icons from: https://material.io/resources/icons/?style=round
   */
  icon?: string;
  /**
   * Declares disable state
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Declares onClick attribute
   */
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  /**
   * Declares classes to customize the button element
   */
  className?: string;
  /**
   * Declares classes to customize the icon element
   */
  iconClassName?: string;
};

export type StyledButtonT = {
  /**
   * Declares variant attribute
   * Default value: primary
   */
  variant: 'primary' | 'outline' | 'text';
  /**
   * Declares size attribute
   * Default value: medium
   */
  size: 'small' | 'medium' | 'large' | 'xlarge';
  /**
   * Declares loading state
   * Default value: false
   */
  loading: boolean;
  /**
   * Declares icon position atrribute
   * Default value: left
   */
  iconPosition: 'left' | 'right';
};
