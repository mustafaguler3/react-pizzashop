import React from "react"
import styled from "styled-components"
import { FoodLabel } from "../Menu/FoodGrid"
import { pizzaRed } from "../Styles/color"
import { Title } from "../Styles/title"

const Dialog = styled.div`
    width:500px;
    background-color:white;
    position:fixed;
    top:75px;
    z-index:5;
    max-height:calc(100% - 100px);
    left:calc(50% - 250px);
    display:flex;
    flex-direction:column;
`
const DialogBanner = styled.div`
    min-height: 200px;
    margin-bottom:20px;
    ${({img}) => `background-image: url(${img})`};
    background-position:center;
    background-size:cover
`
const DialogShadow = styled.div`
    position:fixed;
    height:100%;
    width:100%;
    top:0px;
    background-color:black;
    opacity:0.7;
    z-index:4
`
const DialogBannerName = styled(FoodLabel)`
    top:100px;
    font-size:30px;
    padding:5px; 40px;
`
export const DialogContent = styled.div`
    overflow:auto;
    min-height:100px;
`;

export const DialogFooter = styled.div`
    box-shadow:0px -2px 10px 0px grey;
    height:60px;
    display:flex;
    justify-content:center;
`

 export const ConfirmButton = styled(Title)`
    margin:10px;
    color:white;
    height:20px;
    border-radius: 5px;
    padding:10px;
    text-align:center;
    width:200px;
    cursor:pointer;
    background-color: ${pizzaRed};
`

export function FoodDialog({ openFood, setOpenFood, setOrders,orders}){
    function close(){
        setOpenFood();
    }
    if(!openFood) return null;

    const order = {
        name: openFood.name
    }
    function addToOrder(){
        setOrders([...orders,order]);
        close();
    }

    return( 
            <>
            <DialogShadow onClick={close}/>
            <Dialog>
                <DialogBanner img={openFood.img}>
                    <DialogBannerName>{openFood.name}</DialogBannerName>
                </DialogBanner>
                <DialogContent />
                <DialogFooter>
                    <ConfirmButton onClick={addToOrder}>
                        Add to order
                    </ConfirmButton>
                </DialogFooter>
            </Dialog>
            </>        
    )
}