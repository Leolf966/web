
let plates = [];
let showedlist = plates;

const displayAllPlates = async () => {
    const allPlates = await getAllPlates();
    plates = allPlates;
    showedlist = plates;
    console.log(plates)
    display(plates);
    TotalByDiameter(showedlist);
}


const savePlate = () => {
    const plateList = document.getElementById("platelist");
    const materialInput = document.getElementById("material__input").value;
    const colorInput = document.getElementById("color__input").value;
    const diameterInput = parseFloat(document.getElementById("diameter__input").value);
    const capacityInput = document.getElementById("capacity__input").value;

    if (diameterInput <= 0 || colorInput === '' || materialInput === '' || plateList === '' || capacityInput === '0') {
        alert("Please fill in all fields and ensure the diameter is not 0.");
        return; // Exit the function if diameter is 0
    }

    const plate = {
        material: materialInput,
        color: colorInput,
        diameter: diameterInput,
        capacity: capacityInput,
    };
    console.log(plate);

    postPlate(plate).then((allPlates) => {
        plates = allPlates;
        showedlist = plates;
        console.log(allPlates);
        display(plates);
        TotalByDiameter(showedlist);
    });
    display(plates);
    showedlist = plates;
    TotalByDiameter(showedlist);

    materialInput.value = "";
    colorInput.value = "";
    diameterInput.value = "";
    capacityInput.value = "";
};


function plateDelete(plateId) {
    deletePlate(plateId).then(displayAllPlates);
    TotalByDiameter(showedlist);
}
displayAllPlates();
