import React from 'react'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const products = [
  { value: 'Product1', name: 'Product 1' },
  { value: 'Product2', name: 'Product 2' },
  { value: 'Product3', name: 'Product 3' },
  { value: 'Product4', name: 'Product 4' },
];

const productDictionary = _(products).mapKeys('value').value();

class ProductSelector extends React.Component {
    constructor(props) {
        super(props);
    }

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
                checked={this.props.selectedProducts.includes(product.value)}
                value={product.value}
                primaryText={product.name}
            />
        ));
    }

    render() {
        return (
            <SelectField
                multiple={true}
                hintText="All products"
                value={this.props.selectedProducts}
                onChange={this.props.handleProductChange}
                selectionRenderer={this.productSelectionRenderer}
            >
                {this.productMenuItems(products)}
            </SelectField>
        )
    }
}


export default ProductSelector