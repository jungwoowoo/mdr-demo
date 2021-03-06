import * as storybook from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import infoAddon from '@storybook/addon-info';

storybook.setAddon(infoAddon);

setOptions({
    name: 'MediRita UI Template',
    url: 'https://github.com/sm-react/react-theming',
    goFullScreen: true,
    showLeftPanel: true,
    showDownPanel: true,
    showSearchBox: false,
    downPanelInRight: false,
});

storybook.configure(
    () => {
      require('../src/stories');
      require('../src/ThemeSwitcher.story');
      require('../src/MaterialUI/index.story');
    },
    module
);
