import styled from 'styled-components';

export const HeroTitle = styled.h1`
  margin: 0;
  margin-bottom: 21px;
  font-family: ${p => p.theme.fonts.body};
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.xl};
  line-height: ${p => p.theme.lineHeights.heading};
  text-align: center;

  color: ${p => p.theme.colors.primaryTitle};
`;
