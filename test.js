// var nikeShoes = {
//     color: "red",
//     size: 8,
//     brand: "Nike"
// }

// var addidasShoes = {
//     color: "blue",
//     size: 11,
//     brand: "Addidas"
// }

// console.log(nikeShoes)

class Shoe {
    constructor(color, size, brand, price) {
        this.color = color;
        this.size = size;
        this.brand = brand;
        this.price = price;
    }

    onSale() {
        this.price = this.price / 2;
    }

    getPrice() {
        return this.price;
    }
}

var nikeShoes = new Shoe("red", 8, "Nike", 100);
var addidasShoes = new Shoe("blue", 11, "Addidas", 80)

console.log(nikeShoes)
console.log(addidasShoes)
console.log(addidasShoes.getPrice())

addidasShoes.onSale();
console.log(addidasShoes.getPrice())

