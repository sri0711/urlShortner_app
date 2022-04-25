import { View, Text,SafeAreaView,StyleSheet } from 'react-native';
import React from 'react';

const Chat = () => {
	return (
		<View style={chatStyle.main}>
			<View style={chatStyle.header}>
				<SafeAreaView>
					<Text style={chatStyle.heading}>Url Shortner Chat</Text>
				</SafeAreaView>
			</View>
		</View>
	);
};

const chatStyle = StyleSheet.create({
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
});

export default Chat;
