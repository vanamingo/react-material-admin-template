import React from 'react'
import MonthlySales from './MonthlySales'
import StackedMonthlySales from './StackedMonthlySales/StackedMonthlySales'
import Paper from 'material-ui/Paper';
import AnnualSales from './AnnualSales'

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

class ConsolidatedSalesReport extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Paper style={styles.paper}>
                <div class="row">
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 m-b-15 ">
                        <StackedMonthlySales getStackedMothSales={this.props.getStackedMothSales} />
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 m-b-15 ">
                        <AnnualSales data={this.props.data} />
                    </div>
                </div>
            </Paper>
        );
    }
}

export default ConsolidatedSalesReport;
