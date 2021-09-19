import React, {Component} from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  StatusBar,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Text,
  Alert,
} from 'react-native';
import MainAppFooter from '../components/MainAppFooter';
import MaterialButtonShare from '../components/MaterialButtonShare';

const {width, height} = Dimensions.get('window');
class Profile extends Component {
  constructor(props) {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  gotoMain() {
    this.props.navigation.navigate('Mainactivity');
  }

  onSuccess() {}

  onFail() {}

  onSave() {}

  render() {
    const {email, password} = this.state;
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <View style={styles.rect2}>
          <TextInput
            Text="user"
            textBreakStrategy="highQuality"
            enablesReturnKeyAutomatically={true}
            defaultValue=""
            keyboardType="email-address"
            style={styles.textInput}
            onChangeText={text => this.setState({email: text})}
            value={email}></TextInput>
        </View>
        <View style={styles.rect3}>
          <TextInput
            Text="1234"
            textContentType="password"
            secureTextEntry={true}
            enablesReturnKeyAutomatically={true}
            blurOnSubmit={true}
            style={styles.textInput2}
            onChangeText={text => this.setState({password: text})}
            value={password}></TextInput>
        </View>
        <TouchableOpacity onPress={this.onSave.bind(this)}>
          <MaterialButtonShare
            iconName="share-variant"
            icon="content-save"
            style={styles.saveButton}></MaterialButtonShare>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  rect2: {
    width: width - width / 4,
    height: height / 15,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,1)',
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 255,
  },
  textInput: {
    fontFamily: 'Roboto',
    color: 'rgba(255,255,255,1)',
    width: 92,
    height: 17,
  },
  rect3: {
    width: width - width / 4,
    height: height / 15,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,1)',
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 33,
  },
  textInput2: {
    fontFamily: 'Roboto',
    color: 'rgba(255,255,255,1)',
    width: 58,
    height: 17,
  },
  saveButton: {
    height: 56,
    width: 56,
    marginTop: 53,
    alignSelf: 'center',
    fontSize: 35,
  },
});

export default Profile;
