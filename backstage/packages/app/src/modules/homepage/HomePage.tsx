import {
  ClockConfig,
  CustomHomepageGrid,
  HeaderWorldClock,
  HomePageRandomJoke,
  HomePageStarredEntities,
  HomePageTopVisited,
  HomePageRecentlyVisited,
  WelcomeTitle,
} from '@backstage/plugin-home';
import { Content, Header, Page } from '@backstage/core-components';

const clockConfigs: ClockConfig[] = [
  {
    label: 'Raleigh',
    timeZone: 'EST',
  },
  {
    label: 'London',
    timeZone: 'GMT',
  },
  {
    label: 'Berlin and Brno',
    timeZone: 'CET',
  },
  {
    label: 'Bangalore',
    timeZone: 'Asia/Kolkata',
  },
];

const timeFormat: Intl.DateTimeFormatOptions = {
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
};

const defaultConfig = [
  {
    component: 'HomePageRecentlyVisited',
    x: 0,
    y: 0,
    width: 6,
    height: 4,
  },
  {
    component: 'HomePageTopVisited',
    x: 6,
    y: 0,
    width: 6,
    height: 4,
  },
];

export const homePage = (
  <Page themeId="home">
    <Header title={<WelcomeTitle />} pageTitleOverride="Home">
      <HeaderWorldClock
        clockConfigs={clockConfigs}
        customTimeFormat={timeFormat}
      />
    </Header>
    <Content>
      <CustomHomepageGrid config={defaultConfig}>
        {/* order by the english title when clicking on Add widget */}
        <HomePageRandomJoke />
        <HomePageRecentlyVisited />
        <HomePageTopVisited />
        <HomePageStarredEntities />
      </CustomHomepageGrid>
    </Content>
  </Page>
);
