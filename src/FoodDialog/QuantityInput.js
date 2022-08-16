import React from "react"
import styled from "styled-components"
import { pizzaRed } from "../Styles/color"
import { Title } from "../Styles/title"

const QuantityInputStyled = styled.input`
    font-size: 18px;
    width:24px;
    text-align:center;
    border:none;
    outline:none;
`
const IncrementContainer = styled(Title)`
    display:flex;
    height:24px;
`
const IncrementButton = styled.div`
    width:23px;
    color: ${pizzaRed};
    font-size:20px;
    text-align: center;
    cursor: pointer;
    padding: -12px;
    line-height: 23px;
    margin:0px 10px;
    border:1px solid white;
    border:1px solid ${pizzaRed};
`

export function QuantityInput({quantity}){
    return <IncrementContainer>
        <div>Quantity:</div>
        <IncrementButton onClick={() => {
            quantity.setValue(quantity.value - 1);
        }}
        disabled={+quantity.value === 1}>         
            -
        </IncrementButton>
        <QuantityInputStyled {...quantity}/>
        <IncrementButton onClick={()=>{
            quantity.setValue(quantity.value + 1)
        }}> 
        + 
        </IncrementButton>
    </IncrementContainer>
}