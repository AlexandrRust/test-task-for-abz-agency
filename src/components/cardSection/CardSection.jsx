import { CardWrapper } from 'components/cardWrapper/CardWrapper';
import { Title } from 'components/title/Title';
import { CardSectionWrapper } from './cardSectionWrapper/CardSectionWrapper.styled';
import { Container } from '../container/Container.styled';


export const CardSection = () => {
  
  return (
    <CardSectionWrapper>
      <Container>
      <Title text={'Working with GET request'} />
      <CardWrapper />
      
      </Container>
    </CardSectionWrapper>
  );
};
