const materialInput = document.getElementById("material_input");
const colorInput = document.getElementById("color_input");
const diameterInput = document.getElementById("diameter_input");
const capacityInput = document.getElementById("capacity_input");

const itemsContainer = document.getElementById("plate_container");

// local functions
const getItemId = (id) => `item-${id}`;

const itemTemplate = ({ id, material, color, diameter, capacity }) => `
<li id="${id}" class="card mb-3 item-card" draggable="true">
    <img
    src="https://promenu.ua/product_files/images/product-tarelka-27-sm-C-_fb95bb501beeb96503bca76319218a81.webp"
    class="item-container__image card-img-top" alt="card" draggable="true">
    <div class="card-body">
    <h5 class="card-title">${material}</h5>
    <p class="card-text">The plate is ${color}</p>
    <p class="card-text">${diameter} inches</p>
    <p class="card-text">${capacity} food grams</p>
    <button class="btn btn-primary edit-button" data-item-id="${id}">Edit</button>
    </div>
</li>`;


export const clearInputs = () => {
    materialInput.value = "";
    colorInput.value = "";
    diameterInput.value = "";
    capacityInput.value = "";
};

export const addItemToPage = ({ id, material, color, diameter, capacity }) => {
    itemsContainer.insertAdjacentHTML(
        "afterbegin",
        itemTemplate({ id, material, color, diameter, capacity })
    );

    const element = document.getElementById(id);


};

export const renderItemsList = (items) => {
    itemsContainer.innerHTML = "";

    for (const item of items) {
        addItemToPage(item);
    }
}



export const getInputValues = () => {
    return {
        material: materialInput.value,
        color: colorInput.value,
        diameter: diameterInput.value,
        capacity: capacityInput.value,
    };
};