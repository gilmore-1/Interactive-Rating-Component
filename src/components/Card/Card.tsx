import React, { useEffect, useState } from "react";
import styled from "styled-components";
import FlexContainer from "../FlexContainer/FlexContainer";
import "./Card.css";
import PatchImg from "../../assets/PatchImg.png"; 

const Card = () => {
  const [showCard, setShowCard] = useState<Boolean>(true);


  useEffect(() => {
    setShowCard(true);
  }, []);
  return (
        <>
          {
          showCard ? 
            <Cards>
              <PathDiv>
                <PathImage src={PatchImg} />
              </PathDiv>
              <H1>How did we do?</H1>
              <FlexContainer />
              <p>
                Please let us know how we did with your support request. All
                feedback is appreciated to help us improve our offering!
              </p>
              <Button onClick={() => setShowCard(false)}>Submit</Button>
         </Cards>
            : null
          }
        </>
     
  );
}
export default Card;
const Cards = styled.div`
  width: 100%;
  max-width: 412px;
  border-radius: 30px;
  background: radial-gradient(
    98.96% 98.96% at 50% 0%,
    #232a34 0%,
    #181e27 100%
  );
  padding: 32px;
`;
const PathDiv = styled.div`
  width: 48px;
  height: 48px;
  background: #262e38;
  border-radius: 50%;
  cursor: pointer;
`;
const PathImage = styled.img`

  margin-left: 15px;
  margin-top: 15px;

`;
const Button = styled.button`
  background: #fc7614;
  border-radius: 22px;
  margin-top: 32px;
  height: 45px;
  width: 341px;
  font-family: "Overpass";
  font-style: normal;
  color: #ffffff;
  font-size: 15px;
  line-height: 19px;
  letter-spacing: 2px;
  cursor: pointer;
`;
const H1 = styled.h1`
  font-family: "Overpass";
  font-style: normal;
  font-size: 28px;
  line-height: 35px;
  color: white;
`;
