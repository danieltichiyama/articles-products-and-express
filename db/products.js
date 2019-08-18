let counter = 3;

let products = [
  { name: "Test", price: 500.0, inventory: 100, id: 0 },
  { name: "Big Red Button", price: 200.0, inventory: 1, id: 1 },
  { name: "Rubber ducky", price: 20.0, inventory: 1000, id: 2 }
];

module.exports = {
  getCount: function() {
    return counter;
  },

  getProducts: function() {
    return products;
  },

  addProduct: function(data) {
    for (let i = 0; i < products.length; i++) {
      if (products[i].name === data.name && products[i].price === data.price) {
        return false;
      }
    }
    data["id"] = counter;
    products.push(data);
    counter++;

    return true;
  },

  changeProduct: function(idx, obj) {
    for (i = 0; i < products.length; i++) {
      if (products[i].id === idx) {
        for (key in obj) {
          products[i][key] = obj[key];
        }
        return true;
      }
    }
    return false;
  },

  getProduct: function(idx) {
    return products[idx];
  },

  deleteProduct: function(idx) {
    for (i = 0; i < products.length; i++) {
      if (products[i].id === idx) {
        products.splice(i, 1);
        return true;
      }
    }
    return false;
  }
};
