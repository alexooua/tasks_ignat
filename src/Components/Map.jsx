import React from 'react';
import s from './Map.module.css';


function Map() {
    function ListItem(props) {
     console.log(props);
        let red=props.value === "Комуннист" ? "red" : "";
        return <p className={red}>{props.value}</p>;
    }

    function NumberList(props) {
        const numbers = props.numbers;
        return (
            <div>
                {numbers.map((number) =>
                    <ListItem key={number.toString()}
                              value={number} />
                )}
            </div>
        );
    }

    const numbers = ["Рационалист","Комуннист","Анимешник" ];

    return (

            <div id="mapDiv">
                <NumberList numbers={numbers} />

            </div>


    );
}

export default Map;
