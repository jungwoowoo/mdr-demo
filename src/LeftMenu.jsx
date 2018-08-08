import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { BrowserRouter , Switch , Route, NavLink } from "react-router-dom";

import {
    Avatar,
    Checkbox,
    DatePicker,
    Dialog,
    DropDownMenu,
    FlatButton,
    Drawer,
    MenuItem,
    Paper,
    RadioButton,
    RadioButtonGroup,
    RaisedButton,
    Snackbar,
    Slider,
    Tabs,
    Tab,
    TextField,
    Toggle,
    List,
    ListItem,
    Divider,
  } from 'material-ui';

const propTypes = {
    //title: PropTypes.string,
    //subtitle: PropTypes.string,
    menuItemCount : PropTypes.number,
};

const defaultProps = {
    menuItemCount : 20,
    //title: 'Welcome to React-Theming',
    //subtitle: 'Storybook Boilerplate Project',
};

const contextTypes = {
    muiTheme: PropTypes.object,
};

const activeStyle = {
    color: 'green',
    fontSize: '2rem'
};

class LeftMenu extends React.Component {

    constructor(props) {
        super(props);      
        this.handleClicked = this.handleClicked.bind(this);
    }
    state = {
        menuID : "qwer",
    };

    componentWillReceiveProps(nextprops){
        console.log("componentWillReceiveProps " + this.props.menuItemCount);
    }

    handleClicked = (event) => {
        console.log("target !! " + event.currentTarget.dataset.id )
        this.setState({
            menuID: "selected " + event.currentTarget.dataset.id,
        });
    };
    

    render() {
        const { palette } = this.context.muiTheme;
        const styleTitle = {
            color: palette.secondaryTextColor,
        };
        const styleSubtitle = {
            color: palette.alternate1Color,
        };
        const styleHeader = {
            backgroundColor: palette.alternateСanvasColor,
        };

        const names = [
            { 
                keyString: "mnu00", value: "test menu 00" 
            },
            {
                keyString: "mnu01", value: "test menu 01" 
            }
    ];
        const getListItem = names.map((prop,key) =>
            <ListItem id={prop.keyString} button data-id={key} onClick={this.handleClicked}>
            <b>{prop.value}</b>
            </ListItem>
        );

        return (
            <Drawer
                variant="permanent"
                anchor="left"
              >
              <h1>{this.state.menuID}</h1>
            <List>
                {getListItem}
            </List>
            </Drawer>
        );
    }
}

LeftMenu.propTypes = propTypes;
LeftMenu.defaultProps = defaultProps;
LeftMenu.contextTypes = contextTypes;

export default LeftMenu;
