import { CSSObject } from 'styled-components';

type VariantGeneratorT<T> = {
  [Property in keyof T]: Record<T[Property], CSSObject>;
};

type SelectVariantT<R> = {
  [Property in keyof R]: R[Property];
};

const createVariant = <T>(styles: VariantGeneratorT<T>) => {
  return (selectedValues: SelectVariantT<T>): CSSObject => {
    return Object.keys(selectedValues).reduce((acc, key) => {
      const value = selectedValues[key];
      const style = styles[key];
      return { ...acc, ...style[value] };
    }, {});
  };
};

export default createVariant;
