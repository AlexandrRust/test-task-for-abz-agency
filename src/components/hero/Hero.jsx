import { Button } from 'components/button/Button.styled';
import { HeroContainer } from './heroContainer/HeroContainer.styled';
import { HeroText } from './heroText/HeroText.styled';
import { HeroTitle } from './heroTitle/HeroTitle.styled';

export const Hero = () => {
  return (
    <HeroContainer>
      <HeroTitle>Test assignment for front-end developer</HeroTitle>
      <HeroText>
        What defines a good front-end developer is one that has skilled
        knowledge of HTML, CSS, JS with a vast understanding of User design
        thinking as they'll be building web interfaces with accessibility in
        mind. They should also be excited to learn, as the world of Front-End
        Development keeps evolving.
      </HeroText>
      <Button>Sign up</Button>
    </HeroContainer>
  );
};
