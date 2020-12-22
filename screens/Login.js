import React from 'react';
import { Text, View, Button, StyleSheet, TextInput, ScrollView, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import firebaseSDK from '../firebase';

export default class Login extends React.Component {
	static navigationOptions = {
		title: 'Login'
	};

	state = {
		name: '',
		email: '',
		password: '',
		avatar: ''
	};

	onPressLogin = async () => {
		const user = {
			name: this.state.name,
			email: this.state.email,
			password: this.state.password,
			avatar: this.state.avatar
		};

		const response = firebaseSDK.login(
			user,
			this.loginSuccess,
			this.loginFailed
		);
	};

	loginSuccess = () => {
		console.log('login successful, navigate to chat.');
		this.props.navigation.navigate('Name', {
			name: this.state.name,
			email: this.state.email,
			avatar: this.state.avatar
		});
	};

	loginFailed = () => {
		alert('Login failure. Please tried again.');
	};

	onChangeTextEmail = email => this.setState({ email });
	onChangeTextPassword = password => this.setState({ password });

	render() {
		return (
			<View style={styles.screen}> 
				<Text style={styles.title}>Email:</Text>
				<TextInput
					style={styles.nameInput}
					placeHolder="test3@gmail.com"
					onChangeText={this.onChangeTextEmail}
					value={this.state.email}
				/>
				<Text style={styles.title}>Password:</Text>
				<TextInput
					style={styles.nameInput}
					onChangeText={this.onChangeTextPassword}
					value={this.state.password}
				/>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
          style={styles.button} 
          onPress={() => {
          props.navigation.navigate('Chat');
          }}
          >
          <Text style={styles.text}>Login</Text>
          </TouchableOpacity> 

          <TouchableOpacity
            style={styles.button} 
            onPress={() => {
            props.navigation.navigate('Signup');
            }}
            >
            <Text style={styles.text}>Signup</Text>
          </TouchableOpacity> 
        </View>
			</View>
		);
	}
}
const offset = 16
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
		height: offset * 2,
		margin: offset,
    paddingHorizontal: offset,
    borderRadius: 10,
		borderColor: '#111111',
    borderWidth: 2,
    paddingVertical: 25,
		fontSize: offset
	},
	buttonText: {
		marginLeft: offset,
		fontSize: 42
  },
  button: {
    width: '40%',
    padding: 20,
    borderWidth: 2,
    borderColor:'black',
    borderRadius: 15,
    margin: 10,
    shadowOpacity: .25,
    shadowOffset: {width: 2, height: 10},
    shadowRadius: 10,
    backgroundColor: "#168ec9"
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  text: {
    fontFamily: 'Bungee_400Regular',
    fontSize: 25,
    textAlign: 'center'
  }
});
