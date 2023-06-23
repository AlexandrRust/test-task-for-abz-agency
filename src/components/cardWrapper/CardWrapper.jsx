import { useDispatch, useSelector } from "react-redux";
import usersSelectors from "../../redux/users/usersSelectors";
import usersOperation from '../../redux/users/usersOperatiron';
import { useEffect } from "react";
import { useState } from "react";
import { CardBox } from "./cardBox/CardBox.styled";
import { Card } from "./card/Card.styled";
import { CardPhoto } from "./cardPhoto/CardPhoto.styled";
import { CardText } from "./cardText/CardText.styled";
import { Button } from "components/button/Button.styled";
import { CardButtonBox } from "./cardButtonBox/CardButtonBox.styled";
import { CardDescription } from "./cardDescription/CardDescription.styled";

export const CardWrapper = () => {
  const [page, setPage] = useState(1)
  const pages = useSelector(usersSelectors.getPages)
    const users = useSelector(usersSelectors.getUsersList)
    const dispath = useDispatch()
    useEffect(() => {
      dispath(usersOperation.getUsersList(page))
    }, [dispath, page])
    
    
    const onClick = ()=> {
      const nextPage = page + 1
      setPage(nextPage) 
    }
    console.log(pages)
    console.log(users);
  return (<>
  <CardBox>
    {users.map(user => <Card key={user.id}>
      <div><CardPhoto src={user.photo} alt={user.name}/></div>
      <CardText>{user.name}</CardText>
      <CardDescription>
      <CardText>{user.position}</CardText>
      <CardText>{user.email}</CardText>
      <CardText>{user.phone}</CardText>
      </CardDescription>
     
    </Card>)}
  </CardBox>
  <CardButtonBox>
    {page < pages && <Button onClick={onClick}>click</Button>}
    </CardButtonBox>
  </>)
  
};
