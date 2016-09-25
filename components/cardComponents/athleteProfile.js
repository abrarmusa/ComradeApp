import React, { Component, } from 'react'
import { View, Text, Image, StyleSheet, Dimensions} from 'react-native'
var {height, width} = Dimensions.get('window');
class AthleteProfile extends Component {

  static propTypes = {}

  static defaultProps = {}

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <View>
        <Image source={{uri: this.props.athlete.image}} style={styles.image}/>
        <Text>{this.props.athlete.name}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  image: {
    width: width,
    height: height,
    top:0
  }
});
export default AthleteProfile