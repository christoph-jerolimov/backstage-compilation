import { createApp } from '@backstage/frontend-defaults';
import homePlugin from '@backstage/plugin-home/alpha';
import catalogPlugin from '@backstage/plugin-catalog/alpha';

import { navModule } from './modules/nav';
import { customHomePageModule } from './modules/homepage/module';

export default createApp({
  features: [
    navModule,
    homePlugin,
    customHomePageModule,
    catalogPlugin,
  ],
});
