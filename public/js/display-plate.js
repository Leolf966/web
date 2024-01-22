
function display(plates) {
    const plateList = document.getElementById("platelist");
    plateList.innerHTML = "";
    plates.forEach((item) => {
        console.log("http://127.0.0.1:5500");
        const plateItem = document.createElement("div");
        plateItem.classList.add("plate-item");
        plateItem.innerHTML = `
    <div class="card__body">
        <h1 class="card__title">${item.material}</h1>
        <h2 class="card__plate__color">Plate color: ${item.color}</h2>
        <h2 class="card__plate__diameter">Plate diameter: ${item.diameter}</h2>
        <h2 class="card__plate__capacity">Plate capacity: ${item.capacity}</h2>
        <button type="button" class="edit__button" onclick="startEdit(${item.id})">Edit</button>
    </div>
    `;
        plateList.appendChild(plateItem);
    });
}