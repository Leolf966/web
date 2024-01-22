import React from "react";

import DefaultPlate from "./defaultPlate";


const PlateItems = ({ data = [] }) => {
    return (
        <div className="wrapper">
            <div className="inner">
                {data.map(({ id, name, price, material, location, imageSrc }, idx) => (
                    <DefaultPlate
                        id={id}
                        name={name}
                        price={price}
                        material={material}
                        location={location}
                        imageSrc={imageSrc}
                    />
                ))}
            </div>
        </div>
    );
};

export default PlateItems;