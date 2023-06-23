import styled from "styled-components";

export const CardText = styled.p`
margin: 0;
text-align: center;
font-family: ${p=> p.theme.fonts.body};
font-weight: ${p=> p.theme.fontWeights.normal};
font-size: ${p=> p.theme.fontSizes.s};
line-height: ${p=> p.theme.lineHeights.body};
color: ${p=> p.theme.colors.secondaryTitle};
overflow: hidden;
text-overflow: ellipsis;
`