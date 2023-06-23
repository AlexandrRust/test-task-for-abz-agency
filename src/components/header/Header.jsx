import logo from '../../img/logo.png';
import { HeaderContainer } from './headerContainer/HeaderContainer.styled';
import { HeaderListButtons } from './headerListButtons/HeaderListButtons';

export const Header = () => {
  return (
    <HeaderContainer>
      <img src={logo} alt="logo" width={104} height={26} />
      <HeaderListButtons />
    </HeaderContainer>
  );
};
