let locations = [
    {
        id: 1,
        region: "Արագածոտն",
        cities: ['Աշտարակ', 'Ապարան', 'Թալին']
    },
    {
        id: 2,
        region: "Արարատ",
        cities: ['Արտաշատ', 'Մասիս', 'Վեդի']
    },
    {
        id: 3,
        region: "Արմավիր",
        cities: ['Էջմիածին', 'Արմավիր', 'Մեծամոր']
    },
    {
        id: 4,
        region: "Գեղարքունիք",
        cities: ['Գավառ', 'Սևան', 'Մարտունի']
    },
    {
        id: 5,
        region: "Կոտայք",
        cities: ['Աբովյան', 'Հրազդան', 'Չարենցավան']
    },
    {
        id: 6,
        region: "Լոռի",
        cities: ['Վանաձոր', 'Ալավերդի', 'Ստեփանավան']
    },
    {
        id: 7,
        region: "Շիրակ",
        cities: ['Գյումրի', 'Արթիկ', 'Մարալիկ']
    },
    {
        id: 8,
        region: "Սյունիք",
        cities: ['Կապան', 'Գորիս', 'Մեղրի']
    },
    {
        id: 9,
        region: "Տավուշ",
        cities: ['Իջևան', 'Դիլիջան', 'Բերդ']
    },
    {
        id: 10,
        region: "Վայոց ձոր",
        cities: ['Եղեգնաձոր', 'Ջերմուկ', 'Վայք']
    },
];
const select = document.getElementById("region");
const selectCity = document.getElementById("cities");
        select.addEventListener("change", function () {
            selectCity.innerHTML = '';
            if (select.value) {
                const region = locations.find((location) => location.region === select.value)
                if (region) {
                    region.cities.forEach((city) => {
                        selectCity.options.add(new Option(city, city))
                    })
                }
            }
        });
const selectName = document.getElementById("name");
const selectSurname = document.getElementById("surname");
const selectSubmit = document.getElementById("message");
const result = document.getElementById("result");
let a = 1;

selectSubmit.addEventListener("click", function (event) {
    event.preventDefault();
    const createDiv = document.createElement("div");
    const createSpan1 = document.createElement("span");
    const createSpan2 = document.createElement("span");
    const createSpan3 = document.createElement("span");
    const createSpan4 = document.createElement("span");
    const createSpan5 = document.createElement("span");
    createDiv.className = "divStyle";
    createSpan1.className = "spanStyle";
    createSpan2.className = "spanStyle";
    createSpan3.className = "spanStyle";
    createSpan4.className = "spanStyle";
    createSpan5.className = "spanStyle";
    result.append(createDiv);
    createDiv.append(createSpan1);
    createDiv.append(createSpan2);
    createDiv.append(createSpan3);
    createDiv.append(createSpan4);
    createDiv.append(createSpan5);
    createSpan1.append(a);
    createSpan2.append(`${select.value}ի մարզ `);
    createSpan3.append(`ք․ ${selectCity.value}`);
    if (selectName.value.length <= 3) {
        alert("nermuceq 3 ic shat anun")
    } else {
        createSpan4.append(selectName.value);
    }
    if (selectSurname.value.length <= 3) {
        alert("nermuceq 3 ic shat azganun")
    } else {
        createSpan5.append(selectSurname.value);
    }
    a++;
})

// for (let i = 0; i <= locations.length; i++) {
//     if (locations[i]["region"] === select.value) {
//         console.log(locations[i]["cities"]);
//         for (let j = 0; j < locations[i]["cities"].length; j++) {
//             console.log(locations[i]["cities"][j])
//             const cityOption = document.createElement("option");
//             cityOption.innerHTML = locations[i]["cities"][j];
//             selectCity.append(cityOption);
//         }
//     }
// }


// const select = document.getElementById("region");
// const selectCity = document.getElementById("cities");
// //let cityOption;
// select.addEventListener("change", function () {
//     selectCity.innerHTML = '';
//     if (select.value) {
//         const region = locations.find((location) => location.region === select.value)
//         if (region) {
//             region.cities.forEach((city) => {
//                 selectCity.options.add(new Option(city, city))
//             })
//         }
//     }
// });

//hin
// const select = document.getElementById("region");
// const selectCity = document.getElementById("cities");
// let cityOption;
// select.addEventListener("change", function () {
//     selectCity.innerHTML = '';
//     if (select.value) {
//         const region = locations.find((location)=>location.region===select.value)
//         if(region){
//             region.cities.map((city)=>{
//                 return new Option(city,city)
//             })
//         }
//         // locations.forEach(location => {
//         //     if (location.region === select.value) {
//         //         location.cities.forEach(city => {
//         //             cityOption = document.createElement("option");
//         //             cityOption.textContent = `${city}`;
//         //             selectCity.append(cityOption);
//         //         })
//         //     }
//         // })
//     }
//});
//
// const select = document.getElementById("region");
// const selectCity = document.getElementById("cities");
// let cityOption;
// select.addEventListener("click", function () {
//     selectCity.innerHTML = '';
//     if (select.value) {
//         locations.forEach(location => {
//             if (location.region === select.value) {
//                 location.cities.forEach(city => {
//                     cityOption = document.createElement("option");
//                     cityOption.textContent = ${city};
//                     selectCity.append(cityOption);
//                 })
//             }
//         })
//     }
// });

// const select = document.getElementById("region");
// const selectCity = document.getElementById("cities");
// //let cityOption;
// select.addEventListener("change", function () {
//     selectCity.innerHTML = '';
//     if (select.value) {
//         const region = locations.find((location) => location.region === select.value)
//         if (region) {
//             region.cities.forEach((city) => {
//                 selectCity.options.add(new Option(city, city))
//             })
//         }
//     }
// });