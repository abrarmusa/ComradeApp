import React, { Component, } from 'react'
import { View, Text, StyleSheet} from 'react-native'

class NoMoreCards extends Component {

  static propTypes = {}

  static defaultProps = {}

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <View style={styles.noMoreCards}>
        <Text>No more cards</Text>
      </View>
    )
  }  
}

const styles = StyleSheet.create({
  noMoreCards: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  }
})

export default NoMoreCards