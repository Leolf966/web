const HIDE_CLASSNAME = "hide";
const edit = document.querySelector(".edit");
let globalPlateId;


const startEdit = (plateId) => {
    edit.classList.remove(HIDE_CLASSNAME);
    const foundPlate = plates.find((plate) => plate.id === plateId);
    document.getElementById("material__input__edit").value = `${foundPlate.material}`;
    document.getElementById("color__input__edit").value = `${foundPlate.color}`;
    document.getElementById("diameter__input__edit").value = `${foundPlate.diameter}`;
    document.getElementById("capacity__input__edit").value = `${foundPlate.capacity}`;
    globalPlateId = plateId
};

const saveEdit = () => {
    const materialUpdated = document.getElementById("material__input__edit").value;
    const colorUpdated = document.getElementById("color__input__edit").value;
    const diameterUpdated = document.getElementById("diameter__input__edit").value;
    const capacityUpdated = document.getElementById("capacity__input__edit").value;
    if (diameterUpdated <= 0 || colorUpdated === '' || materialUpdated === '' || capacityUpdated === '' || capacityUpdated === '0') {
        alert("Please fill in all fields and ensure the diameter is not 0.");
        return; 
    }
    const plate = {
        id: globalPlateId,
        material: materialUpdated,
        color: colorUpdated,
        diameter: diameterUpdated,
        capacity: capacityUpdated
    };
    console.log()

    editPlate(plate).then(displayAllPlates);
    edit.classList.add(HIDE_CLASSNAME);
};

const cancelEdit = () => {
    edit.classList.add(HIDE_CLASSNAME);
}