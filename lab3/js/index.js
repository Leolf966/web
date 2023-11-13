import {
    addItemToPage,
    clearInputs,
    getInputValues,
    renderItemsList,
} from "./util.js";


const submitButton = document.getElementById("submit_button");
const findButton = document.getElementById("find_button");
const cancelFindButton = document.getElementById("cancel_find_button");
const findInput = document.getElementById("find_input");
const calculateButton = document.getElementById("calculate_button");
const summaryDiameter = document.getElementById("summary_diameter");
const sortPlates = document.getElementById("sort_button")
const deleteSection = document.getElementById("deleteSection");

let plates = [];

const addItem = ({ material, color, diameter, capacity }) => {
    const generatedId = uuid.v1();

    const newItem = {
        id: generatedId,
        material,
        color,
        diameter,
        capacity,
    };

    plates.push(newItem);

    addItemToPage(newItem);
}



submitButton.addEventListener("click", (event) => {
    event.preventDefault();

    const { material, color, diameter, capacity } = getInputValues();

    clearInputs();

    addItem({
        material,
        color,
        diameter,
        capacity,
    });
});

deleteSection.addEventListener("dragover", (event) => {
    event.preventDefault();
    deleteSection.classList.add("selected");
});

deleteSection.addEventListener("dragleave", () => {
    deleteSection.classList.remove("selected");
});

deleteSection.addEventListener("drop", (event) => {
    event.preventDefault();
    const itemId = event.dataTransfer.getData("text/plain");
    const itemElement = document.getElementById(itemId);

    if (itemElement) {
    const index = plates.findIndex((plate) => plate.id === itemId);
    plates.splice(index, 1);
    itemElement.remove();
    renderItemsList(plates);
    }

    deleteSection.classList.remove("selected");
});

findButton.addEventListener("click", () => {
    const foundPlates = plates.filter(
        (plate) => plate.color.search(findInput.value) !== -1
    );

    renderItemsList(foundPlates)
});

cancelFindButton.addEventListener("click", () => {
    renderItemsList(plates);

    findInput.value = "";
});

calculateButton.addEventListener("click", () => {

    const totalDiameter = plates.reduce((total, plate) => Number(total) + Number(plate.diameter), 0);
    summaryDiameter.textContent = `Summary Diameter: ${totalDiameter} inches`;
});

sortPlates.addEventListener("click", () => {
    plates.sort((first, second) => {
        return second.color.localeCompare(first.color);
    });

    renderItemsList(plates);
});


renderItemsList(plates);

const itemsContainer = document.getElementById("plate_container");

itemsContainer.addEventListener("click", (event) => {
    const editButton = event.target.closest(".edit-button");

    if (editButton) {
        console.log("Edit button clicked!");
        const itemId = editButton.getAttribute("data-item-id");
        const item = plates.find((plate) => plate.id === itemId);

        if (item) {
            const newMaterial = prompt("Введіть новий матеріал:", item.diameter);
            const newColor = prompt("Введіть новий колір:", item.color);
            const newDiameter = prompt("Введіть новий діаметр:", item.color);
            const newCapacity = prompt("Введіть нову кількість їжі:", item.color);

            if (newDiameter !== null && newColor !== null) {

                item.diameter = newDiameter;
                item.color = newColor;
                item.material = newMaterial;
                item.capacity = newCapacity;

                renderItemsList(plates);
            }
        }
    }
});