import { createApp } from '@backstage/frontend-defaults';
import homePlugin from '@backstage/plugin-home/alpha';
import catalogPlugin from '@backstage/plugin-catalog/alpha';

import { navModule } from './modules/nav';
import { customHomePageModule } from './modules/homepage/module';
// import playlistPlugin from './modules/playlist/plugin';

export default createApp({
  features: [
    navModule,
    homePlugin,
    customHomePageModule,
    catalogPlugin,
    // playlistPlugin, // FIXME(christoph-jerolimov): playlist plugin integration doesn't work so far
  ],
});
