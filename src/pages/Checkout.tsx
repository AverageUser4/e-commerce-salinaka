import { Redirect } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import PageContainer from "../components/PageContainer/PageContainer";
import Text from "../components/Text/Text";
import { selectUser } from "../features/user/userSlice";
import Button from "../components/Button/Button";
import { useDispatch } from "react-redux";
import { clearBasket, selectBasket } from "../features/basket/basketSlice";

export default function Checkout() {
  const dispatch = useDispatch();
  const user = useAppSelector(selectUser);
  const basket = useAppSelector(selectBasket);
  
  if(!user) {
    return <Redirect to="signin"/>
  }

  return (
    <PageContainer>
      {
        basket.length ?
          <>
            <Text variant="h3" element="h1" style={{ marginBottom: 12 }}>Are you sure you want to buy what's in your basket?</Text>
            <Button onClick={() => dispatch(clearBasket())}>YES</Button>
          </>
        :
          <Text variant="h3" element="h1" style={{ marginBottom: 12 }}>Your basket is empty!</Text>
      }
    </PageContainer>
  );
}