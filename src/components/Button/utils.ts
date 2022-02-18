const parseVariants = (variant: string) => {
  switch (variant) {
    case 'primary':
      return 'secondary';
    case 'text':
      return 'primary';
    default:
      return 'default';
  }
};

export default parseVariants;
