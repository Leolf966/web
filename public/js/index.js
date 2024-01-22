const materialInput = document.getElementById("material__input");
const colorInput = document.getElementById("color__input");
const diameterInput = document.getElementById("diameter__input");
const capacityInput = document.getElementById("capacity__input");
const submitButton = document.getElementById("submit__button");
const plateForm = document.getElementById("plateform");

function checkForDiameter(diameterValue) {
    return diameterValue !== 0;
}

const editButton = document.getElementById("submit__edit__button");
editButton.addEventListener("click", function (event) {
    event.preventDefault();
});

plateForm.addEventListener("submit", function (event) {
    event.preventDefault();
});

submitButton.addEventListener("click", function (event) {
    event.preventDefault();
});

function checkFields() {
    const materialValue = materialInput.value.trim();
    const colorValue = colorInput.value.trim();
    const diameterValue = parseInt(diameterInput.value.trim());
    const capacityValue = capacityInput.value.trim();
    return materialValue && colorValue && checkForDiameter(diameterValue) && capacityValue;
}

