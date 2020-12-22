import React from 'react';
import { ImagePicker, Permissions } from 'expo';
import {
	StyleSheet,
	Text,
	TextInput,
	View,
	Button,
	ImageEditor
} from 'react-native';

import firebaseSDK from '../firebase';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Signup extends React.Component {
	state = {
		name: '',
		email: '',
		password: '',
		avatar: ''
	};

	onPressCreate = async () => {
		try {
			const user = {
				name: this.state.name,
				email: this.state.email,
				password: this.state.password
			};
			await firebaseSDK.createAccount(user);
		} catch ({ message }) {
			console.log('create account failed. catch error:' + message);
		}
	};

	onChangeTextEmail = email => this.setState({ email });
	onChangeTextPassword = password => this.setState({ password });
	onChangeTextName = name => this.setState({ name });

	render() {
		return (
			<View style={styles.screen}>
				<Text style={styles.title}>Email:</Text>
				<TextInput
					style={styles.nameInput}
					placeHolder="your email"
					onChangeText={this.onChangeTextEmail}
					value={this.state.email}
				/>
				<Text style={styles.title}>Password:</Text>
				<TextInput
					style={styles.nameInput}
					onChangeText={this.onChangeTextPassword}
					value={this.state.password}
				/>
				<Text style={styles.title}>Name:</Text>
				<TextInput
					style={styles.nameInput}
					onChangeText={this.onChangeTextName}
					value={this.state.name}
				/>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={this.onPressCreate}
          >
            <Text style={styles.buttonText}>Signup</Text>
          </TouchableOpacity>
        </View>
			</View>
		);
	}
}

const offset = 16;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#d3ebf5',
  },
	title: {
    fontFamily: 'Bungee_400Regular',
    fontSize: 40,
		marginTop: offset,
		marginLeft: offset,
		fontSize: offset
	},
	nameInput: {
    width: '90%',
		margin: offset,
    borderRadius: 10,
		borderColor: '#111111',
    borderWidth: 2,
    padding: 15

  },
  button: {
    width: '70%',
    flexDirection: 'row',
    padding: 20,
    borderWidth: 2,
    borderColor:'black',
    borderRadius: 15,
    marginTop: 100,
    shadowOpacity: .25,
    shadowOffset: {width: 2, height: 10},
    shadowRadius: 10,
    backgroundColor: "#168ec9",
  },
	buttonText: {
		fontFamily: 'Bungee_400Regular',
    fontSize: 40,
  },
  buttonContainer: {
    alignItems: 'center'
  }
});

