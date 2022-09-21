const checkStatusAndParse = (response) => {    
    if(!response.ok)
        throw new Error(response.status);    
    return response.json();
}

const printPlanets = (data) => {
    for(let planet of data.results)
        console.log(planet.name);    
    return Promise.resolve(data);
};

const getPlanets = (data) => {    
    return fetch(data.next);
}

fetch('https://swapi.dev/api/planets')
    .then(checkStatusAndParse)
    .then(printPlanets)
    .then(getPlanets)
    .then(checkStatusAndParse)
    .then(printPlanets)
    .then(getPlanets)
    .then(checkStatusAndParse)
    .then(printPlanets)
    .then(getPlanets)
    .then(checkStatusAndParse)
    .then(printPlanets)
    .then(getPlanets)
    
    .catch((error) => {
        console.log('Catch del error ', error);
    })


// function reqListener () {
//     console.log(this.responseText);
// }

// // var oReq = new XMLHttpRequest();
// // oReq.addEventListener("load", reqListener);
// // oReq.open("GET", "http://www.example.org/example.txt");
// // oReq.send();

// const firstRequest = new XMLHttpRequest();
// firstRequest.addEventListener('load', function () {
//     console.log('1 Ha cargado correctamente.')
//     const data = JSON.parse(this.responseText)
//     console.log(data.results);
//     const secondRequest = new XMLHttpRequest();        
// });

// // firstRequest.onload = function() {
// //     const data = JSON.parse(this.responseText)
// //     const firstFilm = data.results[0].films[0];    
// //     console.log(firstFilm);
    
// //     const secondRequest = new XMLHttpRequest();
// //     secondRequest.addEventListener('load', function () {
// //         console.log('secondRequest ha cargado correctamente \n')
// //         const filmData = JSON.parse(this.responseText);
// //         console.log('secondRequest', filmData);
// //     })
// //     // secondRequest.onload() = function() {
// //     //     console.log(`Second request responseText ${this.responseText}`);
// //     // }

// //     secondRequest.open('GET', firstFilm);    
// //     secondRequest.send();
// //     console.log('secondRequest Request send');
// // }

// firstRequest.addEventListener('error', () => {
//     console.log('Error.');
// });

// firstRequest.open('GET', 'https://swapi.dev/api/planets');
// firstRequest.send();
// console.log('Request send');
// https://swapi.dev/api/planets/1/




