import React from 'react'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const regions = [
    { value: 'Russia', name: 'Russia' },
    { value: 'USA', name: 'USA' },
    { value: 'China', name: 'China' },
    { value: 'Europe', name: 'Europe' },
    { value: 'India', name: 'India' }
];

const regionDictionary = _(regions).mapKeys('value').value();

class RegionSelector extends React.Component {
    constructor(props) {
        super(props);
    }

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
                checked={this.props.selectedRegions.includes(region.value)}
                value={region.value}
                primaryText={region.name}
            />
        ));
    }

    render() {
        return (
            <SelectField
                multiple={true}
                hintText="All regions"
                value={this.props.selectedRegions}
                onChange={this.props.handleRegionChange}
                selectionRenderer={this.regionSelectionRenderer}
            >
                {this.regionMenuItems(regions)}
            </SelectField>
        )
    }
}

export default RegionSelector