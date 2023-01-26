import { useState } from 'react';
import {
  AppShell,
  Header,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
} from '@mantine/core';
import EarthquakeApp from './Earthquakes/EarthquakeApp';
import MySidebar from './MySidebar';

export default function AppShellDemo() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);


  return (
    <AppShell
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.lime[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      fixed
      aside={
        <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
          <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }} style={{background:theme.colors.lime[0]}}>
            <MySidebar />
          </Aside>
        </MediaQuery>
      }
      header={
        <Header height={70} p="md" style={{background:theme.colors.lime[0]}}>
          <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>
            <img src={require('../images/earthquake.png')} alt='earth spell pic' className='logo'/>
            <Text className='title'>Danger Shimmies</Text>
          </div>
        </Header>
      }
    >
      <EarthquakeApp />
    </AppShell>
  );
}