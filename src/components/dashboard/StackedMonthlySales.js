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

const persons = [
  { value: 'Product1', name: 'Product1' },
  { value: 'Product2', name: 'Product2' },
  { value: 'Product3', name: 'Product3' },
  { value: 'Product4', name: 'Product4' },
];

const personDictionary = _(persons).mapKeys('value').value();

class StackedMonthlySales extends React.Component {

  constructor(props) {
    console.log('props');
    console.log(props);
    super(props);
    this.state = {
      values: [],
      text: "constructor",
      data: props.getStackedMothSales()
    };

  }

  handleChange = (event, index, values) => this.setState({ values });

  selectionRenderer = (values) => {
    switch (values.length) {
      case 0:
        return '';
      case 1:
        return personDictionary[values[0]].name;
      default:
        return `${values.length} names selected`;
    }
  }

  menuItems(persons) {
    return persons.map((person) => (
      <MenuItem
        key={person.value}
        insetChildren={true}
        checked={this.state.values.includes(person.value)}
        value={person.value}
        primaryText={person.name}
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
              value={this.state.values}
              onChange={this.handleChange}
              selectionRenderer={this.selectionRenderer}
            >
              {this.menuItems(persons)}
            </SelectField>
            <span> Hello {this.state.values.join()} - {this.state.text} </span>
            <div style={styles.pieChartDiv}>
              <ResponsiveContainer>
                <BarChart width={600} height={300} data={this.state.data}
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
/*
StackedMonthlySales.propTypes = {
  data: PropTypes.array
};
*/
export default StackedMonthlySales;
