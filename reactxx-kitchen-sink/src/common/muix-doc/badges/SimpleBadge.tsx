//autogenerated--------------------------------------------------------------------
// 
// This code was generated from material-ui v3.0.0 by reactxx-codemod tool
// (https://github.com/reactxx/reactxx/tree/master/codemod)
// 
//----------------------------------------------------------------------------------

import React from 'react';
import PropTypes from 'prop-types';
import withStylesCreator from 'reactxx-mui-web/styles/withStyles';
import Badge from 'reactxx-mui-web/Badge/Badge';
import IconButton from 'reactxx-mui-web/IconButton/IconButton';
import MailIcon from 'reactxx-icons/Mail';
import AppBar from 'reactxx-mui-web/AppBar/AppBar';
import Tabs from 'reactxx-mui-web/Tabs/Tabs';
import Tab from 'reactxx-mui-web/Tab/Tab';
import Typography from 'reactxx-mui-web/Typography/Typography';
import Button from 'reactxx-mui-web/Button/Button';

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit * 2
  },
  padding: {
    padding: `0 ${theme.spacing.unit * 2}px`
  }
});

function SimpleBadge(props) {
  const {
    classes
  } = props;
  return <div>
      <div>
        <Badge className={classes.margin} badgeContent={4} color="primary">
          <MailIcon />
        </Badge>
        <Badge className={classes.margin} badgeContent={10} color="secondary">
          <MailIcon />
        </Badge>
        <IconButton aria-label="4 pending messages" className={classes.margin}>
          <Badge badgeContent={4} color="primary">
            <MailIcon />
          </Badge>
        </IconButton>
      </div>
      <AppBar position="static" className={classes.margin}>
        <Tabs value={0}>
          <Tab label={<Badge className={classes.padding} color="secondary" badgeContent={4}>
                Item One
              </Badge>} />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
        </Tabs>
      </AppBar>
      <Badge color="primary" badgeContent={4} className={classes.margin}>
        <Typography className={classes.padding}>Typography</Typography>
      </Badge>
      <Badge color="primary" badgeContent={4} className={classes.margin}>
        <Button variant="contained">Button</Button>
      </Badge>
    </div>;
}

SimpleBadge['propTypes'] = {
  classes: PropTypes.object.isRequired
};
export default withStylesCreator((styles as any), SimpleBadge)();