import React, { useEffect, useState } from 'react';
import {
	ActivityIndicator,
	Button,
	Platform,
	SafeAreaView,
	Share,
	StyleSheet,
	Text,
	TouchableOpacity,
	View
} from 'react-native';
import axios from 'axios';
import SvgQRCode from 'react-native-qrcode-svg';

function Url({ navigation, route }) {
	const [mainData, setMainData] = useState();
	useEffect(() => {
		fetchData();
	}, []);
	const fetchData = async () => {
		const inputs = {
			url: route.params.url,
			hrs: 3
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
	const ClickShare = () => {
		const shareOptions = {
			message: `Thank you for Choosing our App, Please Click the URL Fallow Your Link https://allakai.cf/${mainData.data.short}/ . It will be active until ${mainData.data.expirydate} ${mainData.data.expirytime} In Utc`
		};
		Share.share(shareOptions);
	};
	return (
		<View>
			<Text style={urlStyle.webAddress}>{mainData.data.url}</Text>
			<SvgQRCode
				size={250}
				value={`https://allakai.cf/${mainData.data.short}`}
			/>
			<View>
				<Text style={urlStyle.time}>
					{'until valid ' +
						mainData.data.expirydate +
						`-` +
						mainData.data.expirytime +
						' UTC'}
				</Text>
			</View>
			{/* share url to any app */}
			<View style={{ alignSelf: 'center' }}>
				<TouchableOpacity style={urlStyle.button}>
					{Platform.OS === 'android' ? (
						<Text
							style={{ color: '#EEF2FF', padding: 10 }}
							onPress={() => {
								ClickShare();
							}}
						>
							Share
						</Text>
					) : (
						<Button
							title='Share'
							color={'#EEF2FF'}
							fontWeight={'600'}
							onPress={() => {
								ClickShare();
							}}
						/>
					)}
				</TouchableOpacity>
			</View>
			{/* return to home */}
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
			<ActivityIndicator size={'large'} color={'#f80000'} />
			<View style={{ alignSelf: 'center' }}>
				<TouchableOpacity style={urlStyle.button}>
					{Platform.OS === 'android' ? (
						<Text
							style={{ color: '#EEF2FF' }}
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
		alignItems: 'center',
		flex: 1
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
	},
	webAddress: {
		color: '#f80000',
		fontSize: 25,
		alignSelf: 'center',
		fontWeight: '600',
		marginBottom: 20
	},
	time: {
		color: '#f80000',
		fontSize: 15,
		marginTop: 15,
		alignSelf: 'center'
	}
});
