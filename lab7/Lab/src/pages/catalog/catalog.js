import CatalogSearch from "../../components/catalogSearch/catalogSearch";
import "../../components/catalogSearch/catalogSearch.css";
import PlateItems from "../../components/plateItems/plateItems";

import "../../components/plateItems/defaultPlate.css"
import "../../components/plateItems/plateItems.css";


import plate1 from "./platesPhoto/plate.jpg";
import plate2 from "./platesPhoto/plate 2.jpg";
import plate3 from "./platesPhoto/plate 3.jpg";
import plate4 from "./platesPhoto/plate 4.jpg";
import plate5 from "./platesPhoto/plate 5.jpg";
import plate6 from "./platesPhoto/plate 6.jpg";
import plate7 from "./platesPhoto/plate 7.jpg";

const platedata = [
    {
        id: 1,
        name: "Plate1",
        price: 45,
        material: 1,
        location: "Lviv",
        imageSrc: plate2,
    },
    {
        id: 2,
        name: "Plate2",
        price: 44,
        material: 2,
        location: "Kyiv",
        imageSrc: plate3,
    },
    {
        id: 3,
        name: "Plate3",
        price: 33,
        material: 3,
        location: "Zhytomyr",
        imageSrc: plate1,
    },
    {
        id: 4,
        name: "Plate4",
        price: 28,
        material: 4,
        location: "Kyiv",
        imageSrc: plate4,
    },
    {
        id: 5,
        name: "Plate5",
        price: 15,
        material: 5,
        location: "Lviv",
        imageSrc: plate5,
    },
    {
        id: 6,
        name: "Plate6",
        price: 10,
        material: 6,
        location: "Poltava",
        imageSrc: plate6,
    },
    {
        id: 7,
        name: "Plate7",
        price: 5,
        material: 7,
        location: "Lviv",
        imageSrc: plate7,
    },
    {
        id: 8,
        name: "Plate8",
        price: 3,
        material: 8,
        location: "Ternopil",

    },
    {
        id: 9,
        name: "Plate8",
        price: 15,
        material: 9,
        location: "Lviv",

    },

];



function Catalog() {
    return (
        <div className="Home">
            <CatalogSearch />
            <PlateItems data={platedata} />
        </div>
    );
}

export default Catalog;