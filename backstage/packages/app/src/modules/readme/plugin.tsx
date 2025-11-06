import { compatWrapper, convertLegacyPlugin } from '@backstage/core-compat-api';

import { EntityCardBlueprint } from '@backstage/plugin-catalog-react/alpha';

import { readmePlugin } from '@axis-backstage/plugin-readme';

const entityReadmeCard = EntityCardBlueprint.make({
  name: 'entityReadmeCard',
  params: {
    loader: async () =>
      import('@axis-backstage/plugin-readme').then(m =>
        compatWrapper(<m.ReadmeCard />),
      ),
  },
});

export default convertLegacyPlugin(
  readmePlugin,
  {
    extensions: [
      entityReadmeCard,
    ],
  },
);
