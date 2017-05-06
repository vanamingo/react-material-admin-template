import React, { PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import {PieChart, Pie, Cell, ResponsiveContainer} from 'recharts';
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import GlobalStyles from '../../styles';
import {green200} from 'material-ui/styles/colors';

import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import Data from '../../data';

const countryColors = Data.colorsDictionary.countries;

const StackedMonthlySales = (props) => {

  console.log('StackedMonthlySales props');
  console.log(props);

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




  return (
    <Paper style={styles.paper}>
      <span style={GlobalStyles.title}>Monthly sales</span>

      <div style={GlobalStyles.clear}/>

      <div className="row">

        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div style={styles.pieChartDiv}>
            <ResponsiveContainer>
              <BarChart width={600} height={300} data={props.data}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Bar dataKey="USA" stackId="a" fill={ countryColors['USA'] } />
                <Bar dataKey="Russia" stackId="a" fill={ countryColors['Russia'] } />
                <Bar dataKey="China" stackId="a" fill = { countryColors['China'] } />
                <Bar dataKey="Europe" stackId="a" fill = { countryColors['Europe'] } />                
                <Bar dataKey="India" stackId="a" fill = { countryColors['India'] } />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </Paper>
  );
};

StackedMonthlySales.propTypes = {
  data: PropTypes.array
};

export default StackedMonthlySales;
