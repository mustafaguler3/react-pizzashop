import { useState } from "react";

export function useQuantity(defaultQuantity){
    const [value,setValue] = useState(defaultQuantity || 1);

    function onChange(e){
        if(!(+e.target.value >= 1)){
            setValue(1);
        }
        setValue(+e.target.value);
    }

    return {
        value,
        setValue,
        onChange
    }
}