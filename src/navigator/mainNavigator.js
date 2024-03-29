import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile4562Navigator from '../features/UserProfile4562/navigator';
import EmailAuth4548Navigator from '../features/EmailAuth4548/navigator';
import EmailAuth4547Navigator from '../features/EmailAuth4547/navigator';
import EmailAuth4546Navigator from '../features/EmailAuth4546/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
UserProfile4562: { screen: UserProfile4562Navigator },
EmailAuth4548: { screen: EmailAuth4548Navigator },
EmailAuth4547: { screen: EmailAuth4547Navigator },
EmailAuth4546: { screen: EmailAuth4546Navigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
