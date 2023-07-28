//Exercise45:
// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
//----------------------------------------------------------------------------------------------------------------------------

interface Car{
    manufacturer: string;
    model:string;
    [key: string]:string | number;
}

function createCar(manufacturer: string, model: string, options?: { [key: string]: string | number }): Car {
    let car: Car = {manufacturer, model};
if(options){
    for(let key in options){
        car[key] = options[key];
    }
}
    return car;
}
let car = createCar("Toyota", "Honda", {color: "white", year: 2020,  optionalFeature: "sunroof"});
console.log(car);
