import React from 'react'

import { ScrollView, StyleSheet, Text, 
  TextInput, View, TouchableOpacity } 
from 'react-native'

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {addContact} from '../actions/contactActions'

class AddContactForm extends React.Component {

  state = {
    name: '',
    phone: ''
  }

  handleSubmit() {
    this.props.addContact( this.state )
    this.setState( {
      name: '',
      phone: ''
    } )
    this.props.navigation.navigate('Home')
  }

  render() {
    return (
      <ScrollView style={styles.container}>

        <Text style={{ marginLeft: 10 }}>Name</Text>
        <TextInput
          style={{ height: 40, borderColor: '#ddd', borderWidth: 1, margin: 10, borderRadius: 5, padding: 10 }}
          onChangeText={(name) => this.setState({name})}
          value={this.state.name} />

        <Text style={{ marginLeft: 10 }}>Phone Number</Text>
        <TextInput
          style={{ height: 40, borderColor: '#ddd', borderWidth: 1, margin: 10, borderRadius: 5, padding: 10 }}
          onChangeText={(phone) => this.setState({phone})}
          value={this.state.phone} />

        <TouchableOpacity 
          style={{ margin: 20, backgroundColor: '#eee', padding: 15, borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}
          onPress={ this.handleSubmit.bind(this) }
          >
          <View>
            <Text>Add Contact</Text>
          </View>
        </TouchableOpacity>

      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
})

const mapStateToProps = ( state, ownProps ) => ({
  contacts: state.contacts
})

const mapDispatchToProps = (dispatch) => (
  bindActionCreators( {addContact: addContact}, dispatch )
)

export default connect( mapStateToProps, mapDispatchToProps )( AddContactForm )