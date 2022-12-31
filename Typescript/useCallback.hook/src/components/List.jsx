import {useEffect, useState} from "react";

export default function List({getCount})
{
    const [items,setItems]=useState([]);

    useEffect(() =>
    {
        setItems(getCount(50))
        console.log("changings")
    },[getCount])
    return items.map(el => <div key={el}>{el}</div>)
}