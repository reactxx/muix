import React from 'react';
import { classNamesStr, classNames } from 'reactxx-basic';
import PropTypes from 'prop-types';
import withStylesCreator from 'reactxx-mui-web/styles/withStyles';
import List from 'reactxx-muix/current/List/List';
import ListItem from 'reactxx-muix/current/ListItem/ListItem';
import ListItemText from 'reactxx-muix/current/ListItemText/ListItemText';
import ListSubheader from 'reactxx-muix/current/ListSubheader/ListSubheader';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    maxHeight: 300
  },
  listSection: {
    backgroundColor: 'inherit'
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0
  }
});

function PinnedSubheaderList(props) {
  const {
    classes
  } = props;
  return <List className={classNames(classes.root)} subheader={<li />}>
      {[0, 1, 2, 3, 4].map(sectionId => <li key={`section-${sectionId}`} className={classNamesStr(classes.listSection)}>
          <ul className={classNamesStr(classes.ul)}>
            <ListSubheader>{`I'm sticky ${sectionId}`}</ListSubheader>
            {[0, 1, 2].map(item => <ListItem key={`item-${sectionId}-${item}`}>
                <ListItemText primary={`Item ${item}`} />
              </ListItem>)}
          </ul>
        </li>)}
    </List>;
}

PinnedSubheaderList['propTypes'] = {
  classes: PropTypes.object.isRequired
};
export default withStylesCreator((styles as any), PinnedSubheaderList)();