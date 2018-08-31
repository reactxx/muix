//autogenerated--------------------------------------------------------------------
// 
// This code was generated from material-ui v3.0.0 by reactxx-codemod tool
// (https://github.com/reactxx/reactxx/tree/master/codemod)
// 
//----------------------------------------------------------------------------------

import React from 'react';
import PropTypes from 'prop-types';
import withStylesCreator from 'reactxx-mui-web/styles/withStyles';
import Card from 'reactxx-mui-web/Card/Card';
import CardActionArea from 'reactxx-mui-web/CardActionArea/CardActionArea';
import CardActions from 'reactxx-mui-web/CardActions/CardActions';
import CardContent from 'reactxx-mui-web/CardContent/CardContent';
import CardMedia from 'reactxx-mui-web/CardMedia/CardMedia';
import Button from 'reactxx-mui-web/Button/Button';
import Typography from 'reactxx-mui-web/Typography/Typography';
const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    // ⚠️ object-fit is not supported by IE11.
    objectFit: 'cover'
  }
};

function ImgMediaCard(props) {
  const {
    classes
  } = props;
  return <Card className={classes.card}>
      <CardActionArea>
        <CardMedia component="img" className={classes.media} {...{
        height: 140
      }} image="src/ks/common/muix/static/images/cards/contemplative-reptile.jpg" title="Contemplative Reptile" />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Lizard
          </Typography>
          <Typography component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>;
}

ImgMediaCard['propTypes'] = {
  classes: PropTypes.object.isRequired
};
export default withStylesCreator((styles as any), ImgMediaCard)();