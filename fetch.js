const URl = "https://jsonplaceholder.typicode.com/users/"
//post request
const options = {
    method: "POST",
    headers : {"Content-type": "application/json"},
    body: JSON.stringify({name: "kurt wonnegut"})
}
fetch(URl,options)
    .then(r=>r.json())//no error handling in this demo
    .then(data =>
        //this is where you can use the reult
        console.log(data))

const button = document.getElementById("load-data-button")
button.onclick =loadData
//get request
function loadData (){
    fetch(URl)
        .then((r) => {
            if (!r.ok) {
                return Promise.reject("ups", r.status)
            }
            return r.json() //retuns a promise
        })
        .then(names => {
            //her kan vi arbejd med data
            const ul = names.map(name => `
        <li>
            ${name.name}
            ${name.id}
            ${name.username}
            ${name.email}
        </li>
    `)
            const ulAsStr = ul.join("")
            document.getElementById("my-ul").innerHTML = ulAsStr
            console.log(names)
        })
        .catch(e => {
            console.error(e)
        })
    console.log("who was called first")
}