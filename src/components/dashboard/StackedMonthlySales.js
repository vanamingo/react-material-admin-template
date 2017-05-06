import React, { PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import {PieChart, Pie, Cell, ResponsiveContainer} from 'recharts';
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import GlobalStyles from '../../styles';
import {green200} from 'material-ui/styles/colors';

import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

const data = [
      {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
      {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
      {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
      {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
      {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
      {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
      {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];


const StackedMonthlySales = (props) => {

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

  function getLabel(item){
    return item.region + "(" + item.value  + "mln.)";
  }

  return (
    <Paper style={styles.paper}>
      <span style={GlobalStyles.title}>Monthly sales</span>

      <div style={GlobalStyles.clear}/>

      <div className="row">

        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div style={styles.pieChartDiv}>
            <ResponsiveContainer>
              <PieChart >
                <Pie
                  innerRadius={70}
                  outerRadius={115}
                  data={props.data}
                  fill={"#8884d8"}
                  label={ getLabel }
                  legendType = {"diamond"}
                  
                  >
                  {
                    props.data.map((item) => <Cell key={item.region} fill={item.color}/>)
                  }
                  
                </Pie>
              </PieChart>
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
