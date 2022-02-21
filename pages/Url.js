import React, { useEffect, useState } from 'react';
import {
	ActivityIndicator,
	Button,
	Platform,
	SafeAreaView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View
} from 'react-native';
import axios from 'axios';

function Url({ navigation, route }) {
	const [mainData, setMainData] = useState();
	useEffect(() => {
		fetchData();
	}, []);
	const fetchData = async () => {
		const inputs = {
			url: route.params.url
		};
		const config = {
			url: 'https://apiurls.herokuapp.com/api',
			method: 'Post',
			header: {
				'Content-Type': 'Application/json'
			},
			data: inputs
		};
		const fetched = (await axios(config)).data;
		setMainData(fetched);
	};
	return (
		<View style={urlStyle.main}>
			<View style={urlStyle.header}>
				<SafeAreaView>
					<Text style={urlStyle.heading}>Url Shortner</Text>
				</SafeAreaView>
			</View>
			<View style={urlStyle.body}>
				{mainData
					? mainBody({ mainData, navigation })
					: LoadingAnime(navigation)}
			</View>
		</View>
	);
}

export default Url;

const mainBody = ({ mainData, navigation }) => {
	return (
		<View>
			<Text>{mainData.data.url}</Text>
			<View style={{ alignSelf: 'center' }}>
				<TouchableOpacity style={urlStyle.button}>
					{Platform.OS === 'android' ? (
						<Text
							style={{ color: '#EEF2FF', padding: 10 }}
							onPress={() => {
								navigation.navigate('Home');
							}}
						>
							Home
						</Text>
					) : (
						<Button
							title='Home'
							color={'#EEF2FF'}
							fontWeight={'600'}
							onPress={() => {
								navigation.navigate('Home');
							}}
						/>
					)}
				</TouchableOpacity>
			</View>
		</View>
	);
};

const LoadingAnime = (navigation) => {
	return (
		<View>
			<ActivityIndicator
				size={'large'}
				color={'#f80000'}
				style={{ margin: '20%' }}
			/>

			<View style={{ alignSelf: 'center' }}>
				<TouchableOpacity style={urlStyle.button}>
					{Platform.OS === 'android' ? (
						<Text
							style={{ color: '#EEF2FF', padding: 10 }}
							onPress={() => {
								navigation.navigate('Home');
							}}
						>
							Cancel
						</Text>
					) : (
						<Button
							title='Cancel'
							color={'#EEF2FF'}
							fontWeight={'600'}
							onPress={() => {
								navigation.navigate('Home');
							}}
						/>
					)}
				</TouchableOpacity>
			</View>
		</View>
	);
};

const urlStyle = StyleSheet.create({
	main: {
		height: '100%',
		backgroundColor: '#EEF2FF'
	},
	body: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
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
	button: {
		backgroundColor: '#f80000',
		margin: 30,
		borderRadius: 10
	}
});
