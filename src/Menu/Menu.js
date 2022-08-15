import React from "react"
import styled from "styled-components"
import {food, foods} from "../Data/FoodData"
import { Food, FoodGrid, FoodLabel } from "./FoodGrid"

const MenuStyled = styled.div`
    border: 2px solid;
    height: 1000px;
    margin: 0px 400px 50px 20px
`

export function Menu(){
    return <MenuStyled>
    {Object.entries(food).map(([sectionName,food]) => {

    return (
        <>
        <h1>{sectionName}</h1>
        <FoodGrid>
        {food.map(foo => {
            return (               
                <Food img={foo.img}>
                    <FoodLabel>{foo.name}</FoodLabel>
                </Food>                
            )
        })}
        </FoodGrid>
        </>
    )

    })}
        

    </MenuStyled>
}