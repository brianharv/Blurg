import React from 'react';
import { Text, View, Button, StyleSheet, TextInput } from 'react-native';
import firebaseSDK from '../config/firebaseSDK'; 


class Login extends React.Component {

  state = {
    name: 'Brian Harvey',
    email: 'admin@admin.com',
    password: '123456'    
  };

  onPressLogin = async () => {
    const user = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    };
    await firebaseSDK.login(user, this.loginSuccess, this.loginFailed);
  };

  loginSuccess = () => {
    console.log('login successful')
    this.props.navigation.navigate('Chat', {
      name: this.state.name,
      email: this.state.email,
    });
  };

  loginFailed = () => {
    alert('Login failed');
  };

  onChangeTextEmail = email => this.setState({ email });
  onChangeTextPassword = password => this.setState({ password });

  render() {
    return (
      <View>
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
          <Button
            title="Login"
            style={styles.buttonText}
            onPress={this.onPressLogin}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Signup"
            style={styles.buttonText}
            onPress={() => this.props.navigation.navigate("Signup")}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    marginTop: 16,
    marginLeft: 16,
    fontSize: 16
  },
  nameInput: {
    height: 16 * 2,
    margin: 16,
    paddingHorizontal: 16,
    borderColor: "#111111",
    borderWidth: 1,
    fontSize: 16
  },
  buttonText: {
    marginLeft: 16,
    fontSize: 42,
  },
  buttonContainer: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 20,
    backgroundColor: '#ddd'
  }
});


export default Login;