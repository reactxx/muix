import React from 'react';
import { classNamesStr, classNames } from 'reactxx-basic';
import FormGroup from 'reactxx-muix/current/FormGroup/FormGroup';
import FormControlLabel from 'reactxx-muix/current/FormControlLabel/FormControlLabel';
import Switch from 'reactxx-muix/current/Switch/Switch';

class SwitchLabels extends React.Component<any, any> {
  state: any = {
    checkedA: true,
    checkedB: true
  };
  handleChange = name => event => {
    this.setState({
      [name]: event.target.checked
    });
  };

  render() {
    return <FormGroup row>
        <FormControlLabel control={<Switch checked={this.state.checkedA} onChange={this.handleChange('checkedA')} value="checkedA" />} label="Secondary" />
        <FormControlLabel control={<Switch checked={this.state.checkedB} onChange={this.handleChange('checkedB')} value="checkedB" color="primary" />} label="Primary" />
        <FormControlLabel control={<Switch value="checkedC" />} label="Uncontrolled" />
        <FormControlLabel disabled control={<Switch value="checkedD" />} label="Disabled" />
        <FormControlLabel disabled control={<Switch checked value="checkedE" />} label="Disabled" />
      </FormGroup>;
  }

}

export default SwitchLabels;