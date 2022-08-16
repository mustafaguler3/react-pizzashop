export function formatPrice(price){
    return price.toLocaleString("en-US",{
        style:"currency",
        currency:"USD"
    })
}

export const foods = [
    {
        name: "Cheese Pizza",
        img: "/img/cheesePizza.jpg",
        section:"Pizza",
        price:40
    },
    {
        name: "Burger",
        img: "/img/burger.jpg",
        section:"Sandwich",
        price:50
    },
    {
        name: "Chicken Pizza",
        img: "/img/chickenPizza.jpg",
        section:"Pizza",
        price:20
    },
    
]

export const food = foods.reduce((res,food)=>{
    if(!res[food.section]){
        res[food.section] = [];
    }
    res[food.section].push(food);
    return res;
},{});