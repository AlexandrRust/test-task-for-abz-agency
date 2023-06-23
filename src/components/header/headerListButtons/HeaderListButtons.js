import { Button } from 'components/button/Button.styled';
import { ListButtons } from '../listButtons/ListButons.styled';

export const HeaderListButtons = () => {
  return (
    <ListButtons>
      <li>
        <Button>Users</Button>
      </li>
      <li>
        <Button>Sign up</Button>
      </li>
    </ListButtons>
  );
};
