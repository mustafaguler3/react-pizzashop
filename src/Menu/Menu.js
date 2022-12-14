import React from "react"
import styled from "styled-components"
import {food, foods, formatPrice} from "../Data/FoodData"
import { Food, FoodGrid, FoodLabel } from "./FoodGrid"

const MenuStyled = styled.div`
    height: 1000px;
    margin: 0px 400px 50px 20px
`
export function Menu({ setOpenFood }){
    return <MenuStyled>
    {Object.entries(food).map(([sectionName,food]) => {

    return (
        <>
        <h1>{sectionName}</h1>
        <FoodGrid>
        {food.map(foo => {
            return (               
                <Food img={foo.img} onClick={()=>{setOpenFood(foo)}}>
                    <FoodLabel>
                        <div>{foo.name}</div>
                        <div>{formatPrice(foo.price)}</div>
                    </FoodLabel>
                </Food>                
            )
        })}
        </FoodGrid>
        </>
    )

    })}
        

    </MenuStyled>
}