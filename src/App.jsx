import { CardSection } from 'components/cardSection/CardSection';
import { Header } from 'components/header/Header';
import { Hero } from 'components/hero/Hero';
import { Container } from './components/container/Container.styled';

export const App = () => {
  return (
    <>
      <Container>
        <Header />
      </Container>
      <Hero />
        <CardSection />
    </>
  );
};
