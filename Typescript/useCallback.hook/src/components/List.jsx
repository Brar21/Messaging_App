import {useEffect, useState} from "react";

export default function List({getCount})
{
    const [items,setItems]=useState([]);

    useEffect(() =>
    {
        setItems(getCount())
        console.log("changings")
    },[getCount])
    return items.map(el => <div key={el}>{el}</div>)
}