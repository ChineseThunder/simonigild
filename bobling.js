
document.getElementById("daddyDiv").onclick = (evt) => {
    const id = evt.target.id;
    console.log("Hi from div number: " + id)
    document.getElementById("divtekst").innerText = id;
}
