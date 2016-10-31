import React, { Component, } from 'react'
import { View, Text} from 'react-native'

class SettingsPage extends Component {

  static propTypes = {}

  static defaultProps = {}

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <View>
        <Text>Settings</Text>
      </View>
    )
  }
}

export default SettingsPage