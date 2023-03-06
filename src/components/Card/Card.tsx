import React, {  createContext, useContext, useEffect, useState } from "react";
import FlexContainer from "../FlexContainer/FlexContainer";
import PatchImg from "../../assets/PatchImg.png";
import paymentColor from "../../assets/paymentColor.png";
import { Button, Cards, H1, ParagrapOne, PathDiv, PathImage, PaymentImage, RateCard, SelectedOutButton, ThanksText, ThenksParagrap } from "./Card.style";
export interface MyContextProps {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}
export const MyContext = createContext<MyContextProps>({ count: 0, setCount: () => {} });
const Card = () => {
  const [showCard, setShowCard] = useState<Boolean>(true);
  const [count, setCount] = useState<number>(0);
  useEffect(() => {
    setShowCard(true);
  }, []);
  return (
    <div className="Card">
    <MyContext.Provider value={{ count, setCount }}>

      {showCard ? (
        <Cards>
          <PathDiv>
            <PathImage src={PatchImg} />
          </PathDiv>
          <H1>How did we do?</H1>
          <ParagrapOne>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </ParagrapOne>
          <FlexContainer />

      
          <Button onClick={() => setShowCard(false)}>Submit</Button>
        </Cards>
      ) : (
        <Cards>
          <RateCard>
            <PaymentImage src={paymentColor} />
            <SelectedOutButton>You selected {count} out of 5</SelectedOutButton>
            <ThanksText>Thank you!</ThanksText>
            <ThenksParagrap>
              We appreciate you taking the time to give a rating. If you ever
              need more support, don’t hesitate to get in touch!
            </ThenksParagrap>
          </RateCard>
        </Cards>
      )}
      </MyContext.Provider>
    </div>
  );
};
export default Card;
