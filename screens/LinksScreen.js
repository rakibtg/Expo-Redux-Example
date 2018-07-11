import React from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import AddContactForm from '../components/AddContactForm'

export default class LinksScreen extends React.Component {
  
  static navigationOptions = {
    title: 'New Contact',
  }

  render() {
    return <AddContactForm navigation={this.props.navigation}/>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
