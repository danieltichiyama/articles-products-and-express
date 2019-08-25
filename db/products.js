let counter = 1;

let products = [{ name: "Big Red Button", price: 20.0, inventory: 5, id: 0 }];

module.exports = {
  getCount: function() {
    return counter;
  },

  getProducts: function() {
    return products;
  },

  addProduct: function(obj) {
    if (!obj.name || !obj.price || !obj.inventory) {
      return false;
    }

    for (let i = 0; i < products.length; i++) {
      if (products[i].name === obj.name && products[i].price === obj.price) {
        return false;
      }
    }

    if (typeof parseFloat(obj.price) !== "number") {
      return false;
    }
    if (typeof parseFloat(obj.inventory) !== "number") {
      return false;
    }

    obj["id"] = counter;
    products.unshift(obj);
    counter++;

    return true;
  },

  changeItem: function(idx, obj) {
    if (!obj.name || !obj.price || !obj.inventory) {
      return false;
    }

    if (isNaN(obj.price)) {
      return false;
    }

    if (isNaN(obj.inventory)) {
      return false;
    }

    obj.id = parseInt(obj.id);

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
        return products[i];
      }
    }
  },

  deleteProduct: function(idx) {
    for (i = 0; i < products.length; i++) {
      if (products[i].id === idx) {
        let deletedItem = products.splice(i, 1);
        return deletedItem[0].name;
      }
    }
    return false;
  }
};
