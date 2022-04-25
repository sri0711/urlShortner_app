import { useState } from 'react';
import {
	Button,
	Platform,
	SafeAreaView,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View
} from 'react-native';

function Home({ navigation }) {
	const [Inpvalue, setInpvalue] = useState('');
	return (
		<View style={homeStyles.main}>
			<View style={homeStyles.header}>
				<SafeAreaView>
					<Text style={homeStyles.heading}>Url Shortner</Text>
				</SafeAreaView>
			</View>
			<View style={homeStyles.body}>
				<View>
					<TextInput
						selectionColor={'#f80000'}
						style={homeStyles.searchBar}
						placeholder='Enter Your Url'
						onChangeText={(value) => setInpvalue(value)}
					/>
					<View style={{ alignSelf: 'center' }}>
						<TouchableOpacity style={homeStyles.button}>
							{Platform.OS === 'android' ? (
								<Text
									style={{ color: '#EEF2FF', padding: 10 }}
									onPress={() => {
										navigation.navigate('Url', { url: Inpvalue });
									}}
								>
									Short The Link
								</Text>
							) : (
								<Button
									color={'#EEF2FF'}
									fontWeight={'600'}
									title='Short the Url'
									onPress={() => {
										navigation.navigate('Url', { url: Inpvalue });
									}}
								/>
							)}
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</View>
	);
}

export default Home;

const homeStyles = StyleSheet.create({
	main: {
		height: '100%',
		backgroundColor: '#EEF2FF'
	},
	header: {
		backgroundColor: '#f80000',
		height: '15%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
	heading: {
		alignSelf: 'center',
		fontSize: 40,
		color: '#EEF2FF',
		fontWeight: '700'
	},
	body: {
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		marginTop: 40
	},
	searchBar: {
		alignSelf: 'center',
		borderWidth: 0.4,
		padding: 10,
		width: '70%',
		borderRadius: 10,
		color: '#f80000',
		fontSize: 15
	},
	button: {
		backgroundColor: '#f80000',
		margin: 30,
		borderRadius: 10
	}
});
