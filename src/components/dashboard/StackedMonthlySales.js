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
  {value: 0, name: 'Oliver Hansen'},
  {value: 1, name: 'Van Henry'},
  {value: 2, name: 'April Tucker'},
  {value: 3, name: 'Ralph Hubbard'},
  {value: 4, name: 'Omar Alexander'},
  {value: 5, name: 'Carlos Abbott'},
  {value: 6, name: 'Miriam Wagner'},
  {value: 7, name: 'Bradley Wilkerson'},
  {value: 8, name: 'Virginia Andrews'},
  {value: 9, name: 'Kelly Snyder'},
];

class StackedMonthlySales extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: null,
      text: "constructor"
    };

  }

  handleChange = (event, index, value) => this.setState({ value });
  

  render() {
    return (


      <Paper style={styles.paper}>
        <span style={GlobalStyles.title}>Monthly sales</span>
        <div style={GlobalStyles.clear} />
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <SelectField
              floatingLabelText="Ready?"
              value={this.state.value}
              onChange={this.handleChange}
            >
              <MenuItem value={null} primaryText="" />
              <MenuItem value={"false"} primaryText="No" />
              <MenuItem value={"true"} primaryText="Yes" />
            </SelectField>
            <span> Hello {this.state.value} - {this.state.text} </span>
            <div style={styles.pieChartDiv}>
              <ResponsiveContainer>
                <BarChart width={600} height={300} data={this.props.data}
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
