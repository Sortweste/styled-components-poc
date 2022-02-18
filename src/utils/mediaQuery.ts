import { CSSObject } from 'styled-components';

const mediaSmall = (styles: CSSObject) => {
  return {
    [`@media (min-width: 576px)`]: styles,
  };
};

const mediaMedium = (styles: CSSObject) => {
  return {
    [`@media (min-width: 768px)`]: styles,
  };
};

const mediaLarge = (styles: CSSObject) => {
  return {
    [`@media (min-width: 992px)`]: styles,
  };
};

const mediaXLarge = (styles: CSSObject) => {
  return {
    [`@media (min-width: 1200px)`]: styles,
  };
};

export { mediaSmall, mediaMedium, mediaLarge, mediaXLarge };
