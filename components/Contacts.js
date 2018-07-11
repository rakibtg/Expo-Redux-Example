import React from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {getContacts} from '../actions/contactActions'

class Contacts extends React.Component {

  static navigationOptions = {
    header: null,
  }

  componentDidMount() {
    console.log( 'this.props.contacts', this.props.contacts )
  }

  renderContacts() {
    if ( this.props.contacts.length > 0 ) {
      return this.props.contacts.map( (c, i) => {
        return <View key={i} style={{borderWidth: 1, borderColor: '#ddd', padding: 10, marginVertical: 10}}>
          <View><Text>Name: {c.name}</Text></View>
          <View><Text>Phone: {c.phone}</Text></View>
          <View style={{ marginTop: 5, flexDirection: 'row' }}>
            <TouchableOpacity>
              <Text style={{ paddingVertical: 5, color: 'red', marginRight: 20 }}>Delete</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{ paddingVertical: 5, color: 'orange' }}>Edit</Text>
            </TouchableOpacity>
          </View>
        </View>
      } )
    } else {
      return <Text>No contacts found</Text>
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 20, marginBottom: 10 }}>Contacts</Text>
        {this.renderContacts()}
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

const mapStateToProps = (state, ownProps) => ({
  contacts: state.contacts
})

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({getContacts: getContacts}, dispatch)
)

export default connect( mapStateToProps, mapDispatchToProps )( Contacts )