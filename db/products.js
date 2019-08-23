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

  changeItem: function(idx, obj) {
    if (typeof parseFloat(obj.price) !== "number") {
      return false;
    }
    if (typeof parseFloat(obj.inventory) !== "number") {
      return false;
    }

    for (i = 0; i < products.length; i++) {
      if (products[i].id === parseFloat(idx)) {
        for (key in obj) {
          products[i][key] = obj[key];
        }
        return true;
      }
    }
    return false;
  },

  getProduct: function(numStr) {
    for (i = 0; i < products.length; i++) {
      if (products[i].id === parseInt(numStr)) {
        console.log("getProduct>product[i]", products[i]);
        return products[i];
      }
    }
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
