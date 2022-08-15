export const foods = [
    {
        name: "Cheese Pizza",
        img: "/img/cheesePizza.jpg",
        section:"Pizza"
    },
    {
        name: "Burger",
        img: "/img/burger.jpg",
        section:"Sandwich"
    },
    {
        name: "Chicken Pizza",
        img: "/img/chickenPizza.jpg",
        section:"Pizza"
    },
    
]

export const food = foods.reduce((res,food)=>{
    if(!res[food.section]){
        res[food.section] = [];
    }
    res[food.section].push(food);
    return res;
},{});