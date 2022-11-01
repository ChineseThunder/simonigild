const names = ["muhammed", "jens", "jannie", "lars", "kanye", "east", "mikkel hansen"]

function createListItems(){
    document.getElementById("my-ul").innerHTML = names.map(name => `<li>${name}</li>`).join("")
}
createListItems()

document.getElementById("add").onclick = (evt ) => {
    evt.preventDefault()
    const newName = document.getElementById("input").value
    names.push(newName)
    createListItems()
}
document.getElementById("removeFirstName").onclick = (evt ) => {
    evt.preventDefault()
    names.shift()
    createListItems()
}
document.getElementById("removeLastnNme").onclick = (evt ) => {
    evt.preventDefault()
    names.pop()
    createListItems()
}