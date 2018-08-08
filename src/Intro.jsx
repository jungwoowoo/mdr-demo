/* eslint-disable quotes */
/* eslint-disable no-template-curly-in-string */

import React from 'react';
import ThemeProvider from 'react-theme-provider';
import setCSS from './.themes/setCSS';
import MyGraph from './3d-force-graph/MyGraph'

/*

const propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
};

const defaultProps = {
    title: 'Welcome to React-Theming',
    subtitle: 'Boilerplate Project',
};

const contextTypes = {
    muiTheme: PropTypes.object,
};
*/

class Intro extends React.Component {
    render() {
//        const { palette } = this.context.muiTheme;
//        const styleTitle = {
//            color: palette.alternateTextColor,
//        };
//        const styleSubtitle = {
//            color: palette.alternate1Color,
//        };
//        const styleHeader = {
//            backgroundColor: palette.alternateСanvasColor,
//        };
        return (
          <div className="App-intro" style={{ maxWidth: 1000, margin: '0 auto' }}>
          <MyGraph/>
          </div>
        );
    }
}

// Intro.propTypes = propTypes;
// Intro.defaultProps = defaultProps;
// Intro.contextTypes = contextTypes;

export default Intro;

