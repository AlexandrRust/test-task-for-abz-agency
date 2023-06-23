import styled from 'styled-components';

export const Button = styled.button`
  background-color: ${p => p.theme.colors.primary};
  border-radius: ${p => p.theme.radius.button};
  border: none;
  width: 100px;
  height: 34px;
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.body};
`;
