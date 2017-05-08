import { cyan600, pink600, purple600, blue600, red600 } from 'material-ui/styles/colors';
import _ from 'lodash';

class ProductSales {
    constructor(product, sales) {
        this.product = product;
        this.sales = sales;
    }

    getTotalSales() {
        var result =
            this.sales
                .map(function (v) { return v.sales; })
                .reduce(function (previousValue, currentValue) {
                    return previousValue + currentValue;
                });

        return result;
    }

}

class Region {
    constructor(region, sales) {
        this.region = region;
        this.sales = sales;
    }
    getTotalSales() {
        var result =
            this.sales
                .map(function (v) { return v.getTotalSales(); })
                .reduce(function (previousValue, currentValue) {
                    return previousValue + currentValue;
                });

        return result;
    }

    getSalesByMonths(monthNum, products) {
        let regionSales = _(this.sales)
        .filter(function(value){ 
                return !_(products).some() || products.includes(value.product);
              })
        .map('sales')
        .flatten()
        .value();
        
        return _(regionSales)
            .filter({ month: monthNum })            
            .map('sales')
            .reduce(function (prev, current) {
                return prev + current;
            });
    }
}

let dynamicData = getRegionSales();

console.log('dynamicData');
console.log(dynamicData);
window.dynamicData = dynamicData;

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRegionSales(){ 
  return [
      new Region('Russia', getProductsSales(80, 100)),
      new Region('USA', getProductsSales(30, 130)),
      new Region('China', getProductsSales(80, 150)),
      new Region('Europe', getProductsSales(0, 100)),
      new Region('India', getProductsSales(10, 60))
    ];
}

function getProductsSales(min, max){
  return [
      new ProductSales("Product1", getYearSales(min, max)),
      new ProductSales("Product2", getYearSales(min, max)),
      new ProductSales("Product3", getYearSales(min, max)),
      new ProductSales("Product4", getYearSales(min, max))
  ]
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