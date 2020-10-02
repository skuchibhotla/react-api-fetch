import React, { useEffect, useState } from 'react'

function MyComponent() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("https://api.example.com/items")
        .then(res => res.json())
        .then(
            (result) => {
                setIsLoaded(true);
                setItems(result.items);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
    }, [])

    if(error) {
        return <div>Error: {error.message}</div>;
    }
    else if(!isLoaded){
        return <div>Loading...</div>
    }
    else {
        return (
            <ul>
                {items.map(item => (
                    <li key = {item.name}>
                        {item.name} {item.price}
                    </li>
                ))}
            </ul>
        );
    }
}

export default MyComponent