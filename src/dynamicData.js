import { cyan600, pink600, purple600, blue600, red600 } from 'material-ui/styles/colors';

let dynamicData = getRegionSales();

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
      new region('Russia', getProductsSales(80, 100)),
      new region('USA', getProductsSales(30, 130)),
      new region('China', getProductsSales(80, 150)),
      new region('Europe', getProductsSales(0, 100)),
      new region('India', getProductsSales(10, 60))
    ];
}

function region(region, sales){
    this.region = region;
    this.sales = sales;
}

region.prototype.getTotalSales = function(){    
    var result = 
    this.sales
    .map(function(v){ return v.getTotalSales(); })
    .reduce(function(previousValue, currentValue){
        return previousValue + currentValue;
    });

    return result;
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