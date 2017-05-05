import { cyan600, pink600, purple600, blue600, red600 } from 'material-ui/styles/colors';

let dynamicData = getRegionSales();
let colorsDictionary = {
  countries:{
    Russia: red600, 
    USA: blue600,
    China: purple600,
    Europe: pink600,
    India: cyan600 
  }
};

console.log('regionSaleZ');
console.log(dynamicData);
window.dynamicData = dynamicData;

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getAnnualSalesByRegion(){

}

function getRegionSales(){ 
  return [
      { region: 'Russia', value: getProductsSales(800, 1000) },
      { region: 'USA', value: getProductsSales(300, 1300) },
      { region: 'China', value: getProductsSales(800, 1500) },
      { region: 'Europe', value: getProductsSales(0, 1000) },
      { region: 'India', value: getProductsSales(100, 600) }
    ];
}

function getProductsSales(min, max){
  return [
      new productSales("Product1", getYearSales(min, max)),
      new productSales("Product2", getYearSales(min, max)),
      new productSales("Product3", getYearSales(min, max)),
      new productSales("Product4", getYearSales(min, max))
  ]
}

function productSales(product, sales){
    this.product = product;
    this.sales = sales;
}

productSales.prototype.getTotalSales = function(){    
    var result = 
    this.sales
    .map(function(v){ return v.sales; })
    .reduce(function(previousValue, currentValue){
        return previousValue + currentValue;
    });

    return result;
}

function getYearSales(min, max) {
  let result = [];
  for (let i = 0; i < 12; i++) {
    result.push({month:i, sales: getRandomInt(min, max)});
  }
  return result;
}


exports.dynamicData = dynamicData;
exports.getRandomInt = getRandomInt;