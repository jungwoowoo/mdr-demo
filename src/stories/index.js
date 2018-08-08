/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import { storiesOf, action, addDecorator } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import { muiTheme } from 'storybook-addon-material-ui';
import { WithNotes } from '@storybook/addon-notes';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import App from '../App';
import Header from '../Header';
import LeftMenu from '../LeftMenu';
import Intro from '../Intro';
import '../App.css';

const reqThemes = require.context('../.themes/', true, /.json/);
const themesList = [];
reqThemes.keys().forEach((filename) => {
    themesList.push(reqThemes(filename));
});

/** note: decorators
 *  You can add decorator globally:
 *  addDecorator(muiTheme(greyTheme));
 *  You can pass a single object or an array of themes
 */


storiesOf('React App', module)
    .addDecorator(muiTheme(themesList)) /* [lightTheme, darkTheme, greyTheme]*/
    .addDecorator(story => (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '50%', maxWidth: 500, minWidth: 200 }}>
          {story()}
          {/* SHOW_SUPPORT ? <SupportProject /> : null*/}
        </div>
      </div>
    ))
    .addDecorator(withKnobs)
    .add('App', () => {
        setOptions({
            name: 'MediRita UI Template',
            url: 'https://github.com/sm-react/react-theming',
        });
        return (<App />);
    })
    .addWithInfo('App-header', '<Header />', () => withNote(
      `
        Header Component

        source: src/Header.jsx
        story: src/stories
        test: src/tests
      `,
      <Header
        title={text('Title', 'Welcome to React-Theming')}
        subtitle={text('Subtitle', 'Storybook Boilerplate Project')}
      />,
    ))
    .addWithInfo('App-LeftMenu', '<LeftMenu />', () => withNote(
      `
        Header Component

        source: src/LeftMenu.jsx
        story: src/stories
        test: src/tests
      `,
      <LeftMenu
        title={text('Title', 'LeftMenu')}
        subtitle={text('Subtitle', 'App-LeftMenu')}
      />,
    ))

    .addWithInfo('App-intro', '<Intro />', () => withNote(
      `
        Intro Component

        source: src/Intro.jsx
        story: src/stories
        test: src/tests
      `,
      <Intro />,
    ))
    .add('Addons Knobs & Notes', () => (
      <div>
        {text('Label1', 'Hello Button')}
        {withNote(text('Label2', 'Hello Button'))}
      </div>
    ));


function withNote(note, child) {
    return (
      <WithNotes notes={note}>{child || null}</WithNotes>
    );
}
