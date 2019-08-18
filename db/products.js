let counter = 0;

let products = [];

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
