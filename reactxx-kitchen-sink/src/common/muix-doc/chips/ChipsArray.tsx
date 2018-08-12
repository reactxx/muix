import React from 'react';
import { mergeRulesets as classNamesStr } from 'reactxx-primitives';
import PropTypes from 'prop-types';
import withStylesCreator from 'reactxx-mui-web/styles/withStyles';
import Avatar from 'reactxx-muix/current/Avatar/Avatar';
import Chip from 'reactxx-muix/current/Chip/Chip';
import Paper from 'reactxx-muix/current/Paper/Paper';
import TagFacesIcon from 'reactxx-icons/TagFaces';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: theme.spacing.unit / 2
  },
  chip: {
    margin: theme.spacing.unit / 2
  }
});

class ChipsArray extends React.Component<any, any> {
  state: any = {
    chipData: [{
      key: 0,
      label: 'Angular'
    }, {
      key: 1,
      label: 'jQuery'
    }, {
      key: 2,
      label: 'Polymer'
    }, {
      key: 3,
      label: 'React'
    }, {
      key: 4,
      label: 'Vue.js'
    }]
  };
  handleDelete = data => () => {
    if (data.label === 'React') {
      alert('Why would you want to delete React?! :)'); // eslint-disable-line no-alert

      return;
    }

    this.setState(state => {
      const chipData = [...state.chipData];
      const chipToDelete = chipData.indexOf(data);
      chipData.splice(chipToDelete, 1);
      return {
        chipData
      };
    });
  };

  render() {
    const {
      classes
    } = this.props;
    return <Paper className={classes.root}>
        {this.state.chipData.map(data => {
        let avatar = null;

        if (data.label === 'React') {
          avatar = <Avatar>
                <TagFacesIcon className={classes.svgIcon} />
              </Avatar>;
        }

        return <Chip key={data.key} avatar={avatar} label={data.label} onDelete={this.handleDelete(data)} className={classes.chip} />;
      })}
      </Paper>;
  }

}

ChipsArray['propTypes'] = {
  classes: PropTypes.object.isRequired
};
export default withStylesCreator((styles as any), ChipsArray)();