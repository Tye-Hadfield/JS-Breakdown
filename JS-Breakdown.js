class Car { // Here we are defining our class which is the parent to our below class
    constructor(brand) { // The constructor is where we initialize our classes objects, we can only have one constructor per class
    this.carname = brand; // Here we are initializing our object and we can see that we are using an instance property to provide the value
    }
    present() {
    return 'I have a ' + this.carname; // We have a function created called 'present' that is to return a message with your instance property that will be provided when our child class is called later on
    }
    }
    
    class Model extends Car { // We are defining our child class here and we can tell that by 'extends Car'
    constructor(brand, mod) { // 2 instance props
    super(brand); // If we do not call super, we are unable to use our methods from the parent class
    this.model = mod;
    }
    show() {
    return this.present() + ', it was made in ' + this.model; // Function to call the type of model that is provided in the instance props
    }
    }
    
    let makes = ["Ford", "Holden", "Toyota"] // Declaring our 3 types of makes
    let models = Array.from(new Array(40), (x,i) => i + 1980) // This is a static method that is going to create an array of 40 elements that will increment from 1980 to 2019. (If you wanted 1980 to 2020 an easy fix is to just change from 40 to 41 without adding anymore logic)
    
    function randomIntFromInterval(min,max) { // min and max included
    return Math.floor(Math.random()\*(max-min+1)+min); // This function is all about finding an number from the arguments give, you will find a number between you min number and max number
    }
    
    for (model of models) { // Here we are going to create a loop using for of. This will not work unless you provide a variable deceleration like var,const ect in front of model should look like for (var model of models). Its important to note the variable passed through 'models' as this is going to give our loop the amount of elements we need to loop through.
    
    make = makes[randomIntFromInterval(0,makes.length-1)] // Here we are selecting a make randomly from the makes variable using our randomIntFromInterval function, You will see that our first argument is for the min number which is declared as 0 and our second argument the max number which is going to be the length of our makes array minus 1. We are using minus one to work in correlation with a zero index array. (Both these need a variable deceleration in front, eg var,const, ect)
    model = models[randomIntFromInterval(0,makes.length-1)] // The same is happening here for declaring our model as it was for declaring our make. (Both these need a variable deceleration in front, eg var,const, ect and we also have to swap makes.length to models.length to get the correct use of the 40 elements)
    
    mycar = new Model(make, model); // We are declaring a variable for mycar, we are passing through the two arguments that we declared earlier in the loop using a random generated index selected make and model. We are using our class here 'Model' and providing the two instance props that are needed for the object to be created,
    console.log(mycar.show()) // At the end of the loop we are asking to use a function inside our model class that is going to concat a string that is comprised of the two class objects Car and Model
    }
    