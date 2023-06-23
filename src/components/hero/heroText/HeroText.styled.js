import styled from 'styled-components';

export const HeroText = styled.p`
  margin-bottom: 32px;
  font-family: ${p => p.theme.fonts.body};
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.body};
  text-align: center;
  color: ${p => p.theme.colors.primaryText};
`;
