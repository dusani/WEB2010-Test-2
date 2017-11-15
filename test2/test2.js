const itemsArray = [
  {
    itemId: 294488,
    name: "Camcoder",
    price: 230.36,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    itemId: 857147,
    name: "Macbook",
    price: 1700.17,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ne."
  },
  {
    itemId: 992324,
    name: "Coffee",
    price: 3.59,
    description: "Morbi lacinia molestie dui."
  },
  {
    itemId: 319827,
    name: "Jordan Sneakers",
    price: 120.54,
    description: "Integer nec odio. Praesent libero."
  },
  {
    itemId: 769984,
    name: "Fedora Hat",
    price: 5.69,
    description: "Sed cursus ante dapibus diam. Sed nisi."
  }
]

class NewProducts {
  constructor(itemsArray) {
    this.itemsArray = itemsArray
    this.arrangedNames = this.getNames(this.itemsArray)
    this.filteredSalesItems = this.getSalesItems(this.itemsArray)
    this.increasedOrders = this.orderItems(this.itemsArray)
  }

  getNames() {
    let newNamesArray =  itemsArray.map(function (item) {
      return item.name
    })
    return newNamesArray.sort()
  }

  getSalesItems(itemsArray) {
    return itemsArray.filter(function (item) {
      return (item.price < 6.00) ? true : false
    })
  }

  orderItems(itemsArray) {
    let filterItems = itemsArray.reduce(function (sum, item) {
      // console.log(item.price);
      return sum + item.price
    }, 0)
    return `$${(filterItems * 35).toFixed(2)}`
  }
}

let newItems = new NewProducts(itemsArray)
console.log(newItems.arrangedNames);
console.log(newItems.filteredSalesItems);
console.log(newItems.increasedOrders);
