import React from 'react';
import Assessment from 'material-ui/svg-icons/action/assessment';
import GridOn from 'material-ui/svg-icons/image/grid-on';
import PermIdentity from 'material-ui/svg-icons/action/perm-identity';
import Web from 'material-ui/svg-icons/av/web';
import { cyan600, pink600, purple600, blue600, red600, orange300, green600 } from 'material-ui/styles/colors';
import ExpandLess from 'material-ui/svg-icons/navigation/expand-less';
import ExpandMore from 'material-ui/svg-icons/navigation/expand-more';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';
import { dynamicData } from '../src/dynamicData';
import _ from 'lodash';

let colorsDictionary = {
  countries: {
    Russia: red600,
    USA: blue600,
    China: green600,
    Europe: pink600,
    India: orange300
  }
};

let countries = ['Russia', 'USA', 'China', 'Europe', 'India'];

const data = {
  colorsDictionary: colorsDictionary,
  menus: [
    { text: 'DashBoard', icon: <Assessment />, link: '/dashboard' },
    { text: 'Form Page', icon: <Web />, link: '/form' },
    { text: 'Table Page', icon: <GridOn />, link: '/table' },
    { text: 'Login Page', icon: <PermIdentity />, link: '/login' }
  ],
  tablePage: {
    items: [
      { id: 1, name: 'Product 1', price: '$50.00', category: 'Category 1' },
      { id: 2, name: 'Product 2', price: '$150.00', category: 'Category 2' },
      { id: 3, name: 'Product 3', price: '$250.00', category: 'Category 3' },
      { id: 4, name: 'Product 4', price: '$70.00', category: 'Category 4' },
      { id: 5, name: 'Product 5', price: '$450.00', category: 'Category 5' },
      { id: 6, name: 'Product 6', price: '$950.00', category: 'Category 6' },
      { id: 7, name: 'Product 7', price: '$550.00', category: 'Category 7' },
      { id: 8, name: 'Product 8', price: '$750.00', category: 'Category 8' }
    ]
  },
  dashBoardPage: {
    recentProducts: [
      { id: 1, title: 'Samsung TV', text: 'Samsung 32 1080p 60Hz LED Smart HDTV.' },
      { id: 2, title: 'Playstation 4', text: 'PlayStation 3 500 GB System' },
      { id: 3, title: 'Apple iPhone 6', text: 'Apple iPhone 6 Plus 16GB Factory Unlocked GSM 4G ' },
      { id: 4, title: 'Apple MacBook', text: 'Apple MacBook Pro MD101LL/A 13.3-Inch Laptop' }
    ],
    monthlySales: [
      { name: 'Jan', uv: 3700 },
      { name: 'Feb', uv: 3000 },
      { name: 'Mar', uv: 2000 },
      { name: 'Apr', uv: 2780 },
      { name: 'May', uv: 2000 },
      { name: 'Jun', uv: 1800 },
      { name: 'Jul', uv: 2600 },
      { name: 'Aug', uv: 2900 },
      { name: 'Sep', uv: 3500 },
      { name: 'Oct', uv: 3000 },
      { name: 'Nov', uv: 2400 },
      { name: 'Dec', uv: 2780 }
    ],
    newOrders: [
      { pv: 2400 },
      { pv: 1398 },
      { pv: 9800 },
      { pv: 3908 },
      { pv: 4800 },
      { pv: 3490 },
      { pv: 4300 }
    ],
    browserUsage: [
      { name: 'Chrome', value: 800, color: cyan600, icon: <ExpandMore /> },
      { name: 'Firefox', value: 300, color: pink600, icon: <ChevronRight /> },
      { name: 'Safari', value: 300, color: purple600, icon: <ExpandLess /> }
    ],

    annualSalesByRegion: dynamicData
      .map(function (v) {
        return {
          region: v.region,
          value: v.getTotalSales(),
          color: colorsDictionary.countries[v.region]
        }
      }),

    getStackedMothSales: getstackedMothSales
  }
};

function getstackedMothSales(products, countries) {
  return [
    getStackedSalesForMonth('Jan', 0, products, countries),
    getStackedSalesForMonth('Feb', 1, products, countries),
    getStackedSalesForMonth('Mar', 2, products, countries),
    getStackedSalesForMonth('Apr', 3, products, countries),
    getStackedSalesForMonth('May', 4, products, countries),
    getStackedSalesForMonth('Jun', 5, products, countries),
    getStackedSalesForMonth('Jul', 6, products, countries),
    getStackedSalesForMonth('Aug', 7, products, countries),
    getStackedSalesForMonth('Sep', 8, products, countries),
    getStackedSalesForMonth('Oct', 9, products, countries),
    getStackedSalesForMonth('Nov', 10, products, countries),
    getStackedSalesForMonth('Dec', 11, products, countries),
  ];
}

function getStackedSalesForMonth(monthName, monthNumber, products, selectedCountries) {

  let d = _(dynamicData).mapKeys('region').value();

  let filteredCountries = _(countries)
    .filter(function (c) {
      return selectedCountries.length == 0 || selectedCountries.includes(c);
    });

    window.d = d;
  window.filteredCountries = filteredCountries;
  window.monthNumber = monthNumber;
  window.products = products;
  var result = filteredCountries
    .zipObject(filteredCountries.map(
      function (c) { 
         return d[c].getSalesByMonths(monthNumber, products)
        }).value())
    .value();

  console.log('result');
  console.log(result);

  return result;

  /*return {
    name: monthName,
    Russia: d['Russia'].getSalesByMonths(monthNumber, products),
    USA: d['USA'].getSalesByMonths(monthNumber, products),
    China: d['China'].getSalesByMonths(monthNumber, products),
    Europe: d['Europe'].getSalesByMonths(monthNumber, products),
    India: d['India'].getSalesByMonths(monthNumber, products)
  };*/
}


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function get(monthSales) {
  _(arr).flatten().filter({ month: 0 }).map('sales').reduce(function (prev, current) { return prev + current; })

}

export default data;

//export default data;
