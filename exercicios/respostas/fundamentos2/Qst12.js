const filtrarArray = (e) => {
    if (typeof(e) === "number"){
        return true
    }
}

console.log(["a",2,"s",3].filter(filtrarArray))