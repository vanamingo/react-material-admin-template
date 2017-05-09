import React from 'react'
import ProductSelector from './StackedMonthlySales/ProductSelector'
import RegionSelector from './StackedMonthlySales/RegionSelector'
import GlobalStyles from '../../styles';
import Paper from 'material-ui/Paper';

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

class SalesFilter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedProducts: [],
      selectedRegions: []
    };
  }

  render() {
    return (
      <Paper >
        <span style={GlobalStyles.title}>Filters</span>
        <div style={GlobalStyles.clear} />
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">

            <ProductSelector
              handleProductChange={this.handleProductChange}
              selectedProducts={this.state.selectedProducts}
            />

            <RegionSelector
              handleRegionChange={this.handleRegionChange}
              selectedRegions={this.state.selectedRegions}
            />
          </div>
        </div>
      </Paper>
    )
  }
}

export default SalesFilter