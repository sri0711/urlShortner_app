import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';
import Home from './pages/Home';
import Url from './pages/Url';

const AppStack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<StatusBar backgroundColor={'#f80000'} />
			<AppStack.Navigator
				screenOptions={{
					headerShown: false
				}}
			>
				<AppStack.Screen name='Home' component={Home} />
				<AppStack.Screen name='Url' component={Url} />
			</AppStack.Navigator>
		</NavigationContainer>
	);
}
