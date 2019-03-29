const pet = {
    name: 'cat',
    age: 2
}

pet.toJSON = function() {
    console.log(this)
    return {
        name: this.name
    }
}

console.log(JSON.stringify(pet)) // {"name":"cat"}
