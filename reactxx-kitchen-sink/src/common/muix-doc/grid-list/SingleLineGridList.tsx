import React from 'react';
import { classNamesStr, classNames } from 'reactxx-basic';
import PropTypes from 'prop-types';
import withStylesCreator from 'reactxx-mui-web/styles/withStyles';
import GridList from 'reactxx-muix/current/GridList/GridList';
import GridListTile from 'reactxx-muix/current/GridListTile/GridListTile';
import GridListTileBar from 'reactxx-muix/current/GridListTileBar/GridListTileBar';
import IconButton from 'reactxx-muix/current/IconButton/IconButton';
import StarBorderIcon from 'reactxx-icons/StarBorder';
import tileData from './tileData';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)'
  },
  title: {
    color: theme.palette.primary.light
  },
  titleBar: {
    background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)'
  }
});
/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */


function SingleLineGridList(props) {
  const {
    classes
  } = props;
  return <div className={classNamesStr(classes.root)}>
      <GridList className={classNames(classes.gridList)} cols={2.5}>
        {tileData.map(tile => <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar title={tile.title} classes={{
          root: classes.titleBar,
          title: classes.title
        }} actionIcon={<IconButton>
                  <StarBorderIcon className={classNames(classes.title)} />
                </IconButton>} />
          </GridListTile>)}
      </GridList>
    </div>;
}

SingleLineGridList['propTypes'] = {
  classes: PropTypes.object.isRequired
};
export default withStylesCreator((styles as any), SingleLineGridList)();