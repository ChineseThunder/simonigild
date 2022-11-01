const cars = [
    {id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000},
    {id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900},
    {id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000},
    {id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799},
    {id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799}
];
function makeTableRows(carsToMap) {
    const tableRows = carsToMap.map(car => `
     <tr>
       <td>${car.id}</td>
       <td>${car.year}</td>
       <td>${car.make}</td>
       <td>${car.model}</td>
       <td>${car.price}</td>
     </tr>
    `).join("\n")
    document.getElementById("tbody").innerHTML = tableRows
}
makeTableRows(cars)

document.getElementById("btn-filter-price").onclick = () => {
    const price = document.getElementById("filter-price").value
    const filteredCars = cars.filter(car => car.price < price)
    makeTableRows(filteredCars)
}

document.getElementById("btn-clear-filter").onclick = function(){
    makeTableRows(cars)
}
let sortOrderMake = 1
document.getElementById("header-make").onclick = function(){
    const sortedCars = cars.sort((a,b)=> {
        let sortResult =0
        if (a.make < b.make) sortResult =  -1
        if (a.make > b.make) sortResult= 1
        sortResult *= sortOrderMake
        return sortResult
    })
    sortOrderMake *= -1
    makeTableRows(sortedCars)
}