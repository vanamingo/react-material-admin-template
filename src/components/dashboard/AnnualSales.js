import React, { PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import {PieChart, Pie, Cell, ResponsiveContainer} from 'recharts';
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import GlobalStyles from '../../styles';
import {green200} from 'material-ui/styles/colors';


const AnnualSales = (props) => {

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
      <span style={GlobalStyles.title}>Annual sales by region</span>

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

AnnualSales.propTypes = {
  data: PropTypes.array
};

export default AnnualSales;
