import React, { useEffect } from "react";

const FetchData = () => {
    useEffect(() => {
        const fetchData = async () => {
            try {
                await fetch("/logement.json");
            } catch {
                console.log("il y a une erreur dans la récupération des données:");
            }
        };
        fetchData();
    }, []);

    return (
        <div>
        </div>
    );
};

export default FetchData;


// fetch ('./logement.json').then((response) => {
//     response = response.json();
//     response.then((result) => {
//         console.log(result);
//     })
// })


  