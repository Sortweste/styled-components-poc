import styled from 'styled-components';

type CircularLoaderProps = {
  variant: string;
  size: string;
};

const StyledCircularLoader = styled.svg<CircularLoaderProps>({
  margin: 'auto',
  transformOrigin: 'center center',
});

export { StyledCircularLoader };
