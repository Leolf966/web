let result = [];

const displaySortedPlates = async () => {
    const sortPlates = await getSortedPlate();
    plates = sortPlates;
    display(plates);
    TotalByDiameter(plates);
}

async function SortPlates() {
    await displaySortedPlates();
    TotalByDiameter(showedlist);
}

async function getFilteredPlates(query) {
    const response = await fetch(`${BASE_URL}/plate?query=${query}`);
    const data = await response.json();
    return data;
}

function TotalByDiameter(plates) {
    let totalDiameter = 0;
        plates.forEach((plate) => {
            totalDiameter += parseFloat(plate.diameter);
        });
        const totalDiameterElement = document.getElementById("total__diameter");
        totalDiameterElement.textContent = `Total diameter: ${totalDiameter}`;

    }
function SearchPlates() {
    const findPlateTitle = document
        .getElementById("find__title")
        .value.toLowerCase();
        result = plates.filter(plate => {
            const plateMaterial = plate.material || '';  // Замініть 'material' на правильну назву властивості
            const plateColor = plate.color || '';  // Замініть 'color' на правильну назву властивості
            const plateDiameter = plate.diameter || '';  // Замініть 'diameter' на правильну назву властивості
            const plateCapacity = plate.capacity || '';  // Замініть 'capacity' на правильну назву властивості
    
            // Застосуйте toLowerCase до всіх властивостей, які ви шукаєте
            return (
                plateMaterial.toLowerCase().includes(findPlateTitle) ||
                plateColor.toLowerCase().includes(findPlateTitle) ||
                plateDiameter.toLowerCase().includes(findPlateTitle) ||
                plateCapacity.toLowerCase().includes(findPlateTitle)
            );
        });
    
    display(result);
    TotalByDiameter(result);
    showedlist = result;
}


function restore() {
    displayAllPlates();
    TotalByDiameter(plates);
    showedlist = plates;
}

