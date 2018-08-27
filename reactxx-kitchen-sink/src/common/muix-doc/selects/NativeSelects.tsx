//autogenerated--------------------------------------------------------------------
// 
// This code was generated from material-ui v3.0.0 by reactxx-codemod tool
// (https://github.com/reactxx/reactxx/tree/master/codemod)
// 
//----------------------------------------------------------------------------------

import React from 'react';
import PropTypes from 'prop-types';
import withStylesCreator from 'reactxx-mui-web/styles/withStyles'
import Input from 'reactxx-mui-web/Input/Input';
import InputLabel from 'reactxx-mui-web/InputLabel/InputLabel';
import FormHelperText from 'reactxx-mui-web/FormHelperText/FormHelperText';
import FormControl from 'reactxx-mui-web/FormControl/FormControl';
import Select from 'reactxx-mui-web/Select/Select';
import NativeSelect from 'reactxx-mui-web/NativeSelect/NativeSelect';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

class NativeSelects extends React.Component<any,any> {
  state: any = {
    age: '',
    name: 'hai',
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-native-simple">Age</InputLabel>
          <Select
            native
            value={this.state.age}
            onChange={this.handleChange('age')}
            inputProps={{
              name: 'age',
              id: 'age-native-simple',
            }}
          >
            <option value="" />
            <option value={10}>Ten</option>
            <option value={20}>Twenty</option>
            <option value={30}>Thirty</option>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-native-helper">Age</InputLabel>
          <NativeSelect
            value={this.state.age}
            onChange={this.handleChange('age')}
            input={<Input name="age" id="age-native-helper" />}
          >
            <option value="" />
            <option value={10}>Ten</option>
            <option value={20}>Twenty</option>
            <option value={30}>Thirty</option>
          </NativeSelect>
          <FormHelperText>Some important helper text</FormHelperText>
        </FormControl>
        <FormControl className={classes.formControl}>
          <NativeSelect
            value={this.state.age}
            onChange={this.handleChange('age')}
            name="age"
            className={classes.selectEmpty}
          >
            <option value="">None</option>
            <option value={10}>Ten</option>
            <option value={20}>Twenty</option>
            <option value={30}>Thirty</option>
          </NativeSelect>
          <FormHelperText>Without label</FormHelperText>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel shrink htmlFor="age-native-label-placeholder">
            Age
          </InputLabel>
          <NativeSelect
            value={this.state.age}
            onChange={this.handleChange('age')}
            input={<Input name="age" id="age-native-label-placeholder" />}
          >
            <option value="">None</option>
            <option value={10}>Ten</option>
            <option value={20}>Twenty</option>
            <option value={30}>Thirty</option>
          </NativeSelect>
          <FormHelperText>Label + placeholder</FormHelperText>
        </FormControl>
        <FormControl className={classes.formControl} disabled>
          <InputLabel htmlFor="name-native-disabled">Name</InputLabel>
          <NativeSelect
            value={this.state.name}
            onChange={this.handleChange('name')}
            input={<Input name="name" id="name-native-disabled" />}
          >
            <option value="" />
            <optgroup label="Author">
              <option value="hai">Hai</option>
            </optgroup>
            <optgroup label="Contributors">
              <option value="olivier">Olivier</option>
              <option value="kevin">Kevin</option>
            </optgroup>
          </NativeSelect>
          <FormHelperText>Disabled</FormHelperText>
        </FormControl>
        <FormControl className={classes.formControl} error>
          <InputLabel htmlFor="name-native-error">Name</InputLabel>
          <NativeSelect
            value={this.state.name}
            onChange={this.handleChange('name')}
            name="name"
            input={<Input id="name-native-error" />}
          >
            <option value="" />
            <optgroup label="Author">
              <option value="hai">Hai</option>
            </optgroup>
            <optgroup label="Contributors">
              <option value="olivier">Olivier</option>
              <option value="kevin">Kevin</option>
            </optgroup>
          </NativeSelect>
          <FormHelperText>Error</FormHelperText>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="uncontrolled-native">Name</InputLabel>
          <NativeSelect defaultValue={30} input={<Input name="name" id="uncontrolled-native" />}>
            <option value="" />
            <option value={10}>Ten</option>
            <option value={20}>Twenty</option>
            <option value={30}>Thirty</option>
          </NativeSelect>
          <FormHelperText>Uncontrolled</FormHelperText>
        </FormControl>
        <FormControl className={classes.formControl}>
          <NativeSelect
            className={classes.selectEmpty}
            value={this.state.age}
            name="age"
            onChange={this.handleChange('age')}
          >
            <option value="" disabled>
              Placeholder
            </option>
            <option value={10}>Ten</option>
            <option value={20}>Twenty</option>
            <option value={30}>Thirty</option>
          </NativeSelect>
          <FormHelperText>Placeholder</FormHelperText>
        </FormControl>
        <FormControl required className={classes.formControl}>
          <InputLabel htmlFor="age-native-required">Age</InputLabel>
          <Select
            native
            value={this.state.age}
            onChange={this.handleChange('age')}
            name="age"
            inputProps={{
              id: 'age-native-required',
            }}
          >
            <option value="" />
            <option value={10}>Ten</option>
            <option value={20}>Twenty</option>
            <option value={30}>Thirty</option>
          </Select>
          <FormHelperText>Required</FormHelperText>
        </FormControl>
      </div>
    );
  }
}

NativeSelects['propTypes'] = {
  classes: PropTypes.object.isRequired,
};

export default withStylesCreator(styles as any, NativeSelects)();
