export type CircularLoaderT = {
  /**
   * Declares variant attribute
   * Default value: primary
   */
  variant?: 'primary' | 'secondary' | 'default';
  /**
   * Declares size attribute
   * Default value: medium
   */
  size?: 'small' | 'medium' | 'large' | 'xlarge';
  /**
   * Declares classes to customize the circular loader element
   */
  className?: string;
};
