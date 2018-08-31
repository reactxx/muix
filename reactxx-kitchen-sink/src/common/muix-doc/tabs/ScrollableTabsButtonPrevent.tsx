//autogenerated--------------------------------------------------------------------
// 
// This code was generated from material-ui v3.0.0 by reactxx-codemod tool
// (https://github.com/reactxx/reactxx/tree/master/codemod)
// 
//----------------------------------------------------------------------------------

import React from 'react';
import PropTypes from 'prop-types';
import withStylesCreator from 'reactxx-mui-web/styles/withStyles';
import AppBar from 'reactxx-mui-web/AppBar/AppBar';
import Tabs from 'reactxx-mui-web/Tabs/Tabs';
import Tab from 'reactxx-mui-web/Tab/Tab';
import PhoneIcon from 'reactxx-icons/Phone';
import FavoriteIcon from 'reactxx-icons/Favorite';
import PersonPinIcon from 'reactxx-icons/PersonPin';
import HelpIcon from 'reactxx-icons/Help';
import ShoppingBasket from 'reactxx-icons/ShoppingBasket';
import ThumbDown from 'reactxx-icons/ThumbDown';
import ThumbUp from 'reactxx-icons/ThumbUp';
import Typography from 'reactxx-mui-web/Typography/Typography';

function TabContainer(props) {
  return <Typography component="div" style={{
    padding: 8 * 3
  }}>
      {props.children}
    </Typography>;
}

TabContainer['propTypes'] = {
  children: PropTypes.node.isRequired
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper
  }
});

class ScrollableTabsButtonPrevent extends React.Component<any, any> {
  state: any = {
    value: 0
  };
  handleChange = (event, value) => {
    this.setState({
      value
    });
  };

  render() {
    const {
      classes
    } = this.props;
    const {
      value
    } = this.state;
    return <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange} scrollable scrollButtons="off">
            <Tab icon={<PhoneIcon />} />
            <Tab icon={<FavoriteIcon />} />
            <Tab icon={<PersonPinIcon />} />
            <Tab icon={<HelpIcon />} />
            <Tab icon={<ShoppingBasket />} />
            <Tab icon={<ThumbDown />} />
            <Tab icon={<ThumbUp />} />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer>Item One</TabContainer>}
        {value === 1 && <TabContainer>Item Two</TabContainer>}
        {value === 2 && <TabContainer>Item Three</TabContainer>}
        {value === 3 && <TabContainer>Item Four</TabContainer>}
        {value === 4 && <TabContainer>Item Five</TabContainer>}
        {value === 5 && <TabContainer>Item Six</TabContainer>}
        {value === 6 && <TabContainer>Item Seven</TabContainer>}
      </div>;
  }

}

ScrollableTabsButtonPrevent['propTypes'] = {
  classes: PropTypes.object.isRequired
};
export default withStylesCreator((styles as any), ScrollableTabsButtonPrevent)();