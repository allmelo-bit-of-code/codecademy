const menu = {

    _courses: {
      appetizers: [{
          name: "ceasar salad",
          price: 4,
        },{
          name: "chicken wings",
          price: 8,
        } ],
      mains: [{
          name: "meal",
          price: 10,
        },{
          name: "pasta",
          price: 8,
        } ],
      desserts: [{
          name: "chocolat",
          price: 0.4,
        },{
          name: "creme",
          price: 0.2,
        } ]
      },
  
    get courses(){
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts,
      }
    },
  
    addDishToCourse: function(courseName, dishName, dishPrice){
      const dish = {
          name: dishName,
          price: dishPrice,
      };
      switch (courseName) {
        case 'appetizers':
          this.appetizers = dish;
          break;
        case 'mains':
          this.mains = dish;
          break;
        case 'desserts':
          this.desserts = dish;
          break;
        default:
          return 'Invalid option';
      };    
    },
  
    getRandomDishFromCourse: function(courseName){
      let dishes = "";
      if (courseName == 'appetizers') {
        dishes = this.appetizers;
      } else if (courseName == 'mains') {
        dishes = this.mains;
      } else if (courseName == 'desserts') {
        dishes = this.desserts;
      } else {
        return 'Invalid option';
      };
      dishes = dishes[Math.floor(Math.random() * dishes.length)];
      return dishes;
    },
  
    generateRandomMeal: function() {
      const appetizer = this.getRandomDishFromCourse('appetizers');
      const main = this.getRandomDishFromCourse('mains');
      const dessert = this.getRandomDishFromCourse('desserts');
      const totalPrice = appetizer.price + main.price + dessert.price;
      return `We suggest that you should try the ${appetizer.name} with ${main.name} and finally, ${dessert.name}. This dish will cost $${totalPrice}.`;
    },
    
    get appetizers() { return this._courses.appetizers }, 
    get mains() { return this._courses.mains },
    get desserts() { return this._courses.desserts },
      
    set appetizers(apt) {
      this._courses.appetizers.push(apt);},
    set mains(main) {
      this._courses.mains.push(main);},
    set desserts(desrt) {
      this._courses.desserts.push(desrt);},
  
  };
  
  var test = menu.generateRandomMeal(); 
  console.log(test);