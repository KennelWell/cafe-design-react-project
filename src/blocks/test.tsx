import React, {useState, useEffect} from "react";

const URL = "https://api.spacexdata.com/v3/ships";
export const Test: React.FC = () => {
    const [fact, setFact] = useState([{ship_name: "", year_built: ""}]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(URL);
            result.json().then(data => {
                setFact(data);
            })
            // console.log(result.json());
        }
        fetchData();
    }, []);
    let count = 0;
    const fact2 = fact.slice(0, 10);
    return (
        <div>
            {fact2.map((item) => (
                count++,
                <div key={count}>
                    <p>{item.ship_name}</p>
                    <p>{item.year_built}</p>
                </div>
            ))}
            {count}
        </div>
    )
}