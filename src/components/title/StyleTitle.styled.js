import styled from 'styled-components';

export const StyleTitle = styled.h2`
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.xl};
  line-height: ${p => p.theme.lineHeights.heading};
  text-align: center;
  color: ${p => p.theme.colors.secondaryTitle};
  margin-bottom: 50px;
`;
