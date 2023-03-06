import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { MyContext, MyContextProps } from '../Card/Card';

const FlexContainer: React.FC = () => {
  const { count, setCount } = useContext<MyContextProps>(MyContext);

  const handleClick = (event: React.MouseEvent<HTMLElement>,number: number) => {
      event.preventDefault();
        const current : Number | undefined = event.currentTarget.parentElement?.querySelectorAll('button').length;
        if(current ){
          for (let index = 0; index < current; index++) {
            const element =  event.currentTarget.parentElement?.querySelectorAll('button')[index];
            if(element){
              element.style.backgroundColor = "#262E38";
              element.style.color = "#7C8798";
            }
            setCount(number)
          }
        }
        event.currentTarget.style.color="#FFFFFF";
        event.currentTarget.style.backgroundColor = "#7C8798";
  }
  return (
    <div className='FlexContainer'>
        <Container >
              <Circle onClick={(e) => handleClick(e,1)}>1</Circle>
              <Circle onClick={(e) => handleClick(e,2)}>2</Circle>
              <Circle onClick={(e) => handleClick(e,3)}>3</Circle>
              <Circle onClick={(e) => handleClick(e,4)}>4</Circle>
              <Circle onClick={(e) => handleClick(e,5)}>5</Circle>
        </Container>
    </div>
  )
}

export default FlexContainer
const Container = styled.div`
    display: flex;
    justify-content: space-around;
`
const Circle = styled.button`
    padding: 15px 10px;
    text-align: center;
    background-color: #262E38;
    color: #7C8798;
    border-radius: 50%;
    border: 0px solid ;
    padding-top: 10px;
    width: 48px;
    height: 48px;
    cursor: pointer;
    &:hover  {
      background: #FC7614;    
    }
    &:active {
      
    }
  
`