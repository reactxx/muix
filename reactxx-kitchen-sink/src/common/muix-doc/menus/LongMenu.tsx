//autogenerated--------------------------------------------------------------------
// 
// This code was generated from material-ui v3.0.0 by reactxx-codemod tool
// (https://github.com/reactxx/reactxx/tree/master/codemod)
// 
//----------------------------------------------------------------------------------

import React from 'react';
import IconButton from 'reactxx-mui-web/IconButton/IconButton';
import Menu from 'reactxx-mui-web/Menu/Menu';
import MenuItem from 'reactxx-mui-web/MenuItem/MenuItem';
import MoreVertIcon from 'reactxx-icons/MoreVert';
const options = ['None', 'Atria', 'Callisto', 'Dione', 'Ganymede', 'Hangouts Call', 'Luna', 'Oberon', 'Phobos', 'Pyxis', 'Sedna', 'Titania', 'Triton', 'Umbriel'];
const ITEM_HEIGHT = 48;

class LongMenu extends React.Component<any, any> {
  state: any = {
    anchorEl: null
  };
  handleClick = event => {
    this.setState({
      anchorEl: event.currentTarget
    });
  };
  handleClose = () => {
    this.setState({
      anchorEl: null
    });
  };

  render() {
    const {
      anchorEl
    } = this.state;
    const open = Boolean(anchorEl);
    return <div>
        <IconButton aria-label="More" aria-owns={open ? 'long-menu' : null} aria-haspopup="true" onClick={this.handleClick}>
          <MoreVertIcon />
        </IconButton>
        <Menu id="long-menu" anchorEl={anchorEl} open={open} onClose={this.handleClose} PaperProps={{
        style: {
          maxHeight: ITEM_HEIGHT * 4.5,
          width: 200
        }
      }}>
          {options.map(option => <MenuItem key={option} selected={option === 'Pyxis'} onClick={this.handleClose}>
              {option}
            </MenuItem>)}
        </Menu>
      </div>;
  }

}

export default LongMenu;