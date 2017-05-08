import React, { PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import GlobalStyles from '../../styles';
import { green200 } from 'material-ui/styles/colors';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import Data from '../../data';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const countryColors = Data.colorsDictionary.countries;

const styles = {
  paper: {
    minHeight: 344,
    padding: 10
  },
  legend: {
    paddingTop: 20,
  },
  pieChartDiv: {
    height: 300,
    textAlign: 'center'
  }
};

const products = [
  { value: 'Product1', name: 'Product1' },
  { value: 'Product2', name: 'Product2' },
  { value: 'Product3', name: 'Product3' },
  { value: 'Product4', name: 'Product4' },
];

const productDictionary = _(products).mapKeys('value').value();

const regions = [
  { value: 'Russia', name: 'Russia' },
  { value: 'USA', name: 'USA' },
  { value: 'China', name: 'China' },
  { value: 'Europe', name: 'Europe' },
  { value: 'India', name: 'India' }
];

const regionDictionary = _(regions).mapKeys('value').value();

class StackedMonthlySales extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedProducts: [],
      selectedRegions: []
    };
  }

  handleProductChange = (event, index, selectedProducts) => this.setState(
    {
      selectedProducts: selectedProducts
    });

  productSelectionRenderer = (selectedProducts) => {
    switch (selectedProducts.length) {
      case 0:
        return '';
      case 1:
        return productDictionary[selectedProducts[0]].name;
      default:
        return `${selectedProducts.length} names selected`;
    }
  }

  productMenuItems(products) {
    return products.map((product) => (
      <MenuItem
        key={product.value}
        insetChildren={true}
        checked={this.state.selectedProducts.includes(product.value)}
        value={product.value}
        primaryText={product.name}
      />
    ));
  }

  handleRegionChange = (event, index, selectedRegions) => this.setState(
    {
      selectedRegions: selectedRegions
    });


  regionSelectionRenderer = (selectedRegions) => {
    switch (selectedRegions.length) {
      case 0:
        return '';
      case 1:
        return regionDictionary[selectedRegions[0]].name;
      default:
        return `${selectedRegions.length} regions selected`;
    }
  }

  regionMenuItems(region) {
    return regions.map((region) => (
      <MenuItem
        key={region.value}
        insetChildren={true}
        checked={this.state.selectedRegions.includes(region.value)}
        value={region.value}
        primaryText={region.name}
      />
    ));
  }


  render() {
    return (
      <Paper style={styles.paper}>
        <span style={GlobalStyles.title}>Monthly sales</span>
        <div style={GlobalStyles.clear} />
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <SelectField
              multiple={true}
              hintText="All products"
              value={this.state.selectedProducts}
              onChange={this.handleProductChange}
              selectionRenderer={this.productSelectionRenderer}
            >
              {this.productMenuItems(products)}
            </SelectField>

            <SelectField
              multiple={true}
              hintText="All regions"
              value={this.state.selectedRegions}
              onChange={this.handleRegionChange}
              selectionRenderer={this.regionSelectionRenderer}
            >
              {this.regionMenuItems(products)}
            </SelectField>

            <div style={styles.pieChartDiv}>
              <ResponsiveContainer>
                <BarChart width={600} height={300}
                  data={this.props.getStackedMothSales(this.state.selectedProducts, this.state.selectedRegions)}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="USA" stackId="a" fill={countryColors['USA']} />
                  <Bar dataKey="Russia" stackId="a" fill={countryColors['Russia']} />
                  <Bar dataKey="China" stackId="a" fill={countryColors['China']} />
                  <Bar dataKey="Europe" stackId="a" fill={countryColors['Europe']} />
                  <Bar dataKey="India" stackId="a" fill={countryColors['India']} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </Paper>
    )
  }
};

export default StackedMonthlySales;
