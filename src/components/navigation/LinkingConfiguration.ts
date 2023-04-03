import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Home: {
            screens: {
              HomeScreen: 'Home'
            }
          },
          Alarms: {
            screens: {
              AlarmsScreen: 'Alarms',
              NewAlarmScreen: 'newAlarm',
              EditAlarmScreen: 'editAlarm'
            }
          },
          Insights: {
            screens: {
              InsightsScreen: 'insights'
            }
          },
          Settings: {
            screens: {
              SettingsScreen: 'Settings'
            }
          }
        }
      },
      NotFound: '*'
    }
  }
};
