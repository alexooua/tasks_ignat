import React from 'react';
import s from './Map.module.css';


function Map() {
    function ListItem(props) {
     console.log(props)
        let text=props.value === "Комуннист" ? s.red : "";
        return <p className={text+' '+s.qvol}>{props.value}</p>;
    }

    function QualitiesList(props) {
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
                <QualitiesList qualities={qualities} />

            </div>


    );
}

export default Map;
