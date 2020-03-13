import React from 'react';
import s from './Map.module.css';


function Map() {
    function ListItem(props) {
     console.log(props);
        let red=props.value === "Комуннист" ? "red" : "";
        return <p className={red}>{props.value}</p>;
    }

    function NumberList(props) {
        const qualities = props.qualities;
        return (
            <div>
                {qualities.map((quality,i) =>
                    <ListItem key={i}
                              value={quality} />
                )}
            </div>
        );
    }

    const qualities = ["Рационалист","Комуннист","Анимешник" ];

    return (

            <div id="mapDiv">
                <NumberList qualities={qualities} />

            </div>


    );
}

export default Map;
