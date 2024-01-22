import React from "react";
import defaultPlateImage from "./plate.jpg";
import { NavLink } from "react-router-dom";

const DefaultPlate = ({
    id,
    name = "No name",
    material = 0,
    price = 0,
    location = "Nowhere",
    imageSrc = defaultPlateImage,
}) => {
    return (
        <div className="container">
            <div class="plate-item">
                <img src={imageSrc} className="plate-image" alt="plate" />
                <h2 className="plate-name">{name}</h2>
                <h6 className="plate-text">Material: <text>{material} metal</text></h6>
                <h6 className="plate-text">location: <text>{location}</text></h6>
                <h6 className="plate-text">Price:{price} $</h6>
                <NavLink exact to={`/Catalog/${id}`}> View more</NavLink>
            </div>
        </div>
    );
};
export default DefaultPlate;