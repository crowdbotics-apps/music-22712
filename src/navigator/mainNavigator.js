import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList175006Navigator from '../features/ArticleList175006/navigator';
import ArticleList175005Navigator from '../features/ArticleList175005/navigator';
import BlankScreen0175004Navigator from '../features/BlankScreen0175004/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList175006: { screen: ArticleList175006Navigator },
ArticleList175005: { screen: ArticleList175005Navigator },
BlankScreen0175004: { screen: BlankScreen0175004Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
