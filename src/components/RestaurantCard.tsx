import React from 'react'
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  StyleSheet
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Entypo } from '@expo/vector-icons';
import FullStars from './FullStars'
import EmptyStars from './EmptyStars'

interface RestProps {
  name: string,
  location: string,
  likes: number,
  image: string,
  isPopular: boolean
}
const RestaurantCard = (props: RestProps) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={{ uri: props.image }}
        style={styles.imageBackground}
        imageStyle={{ borderTopLeftRadius: 10, borderTopRightRadius: 10, borderWidth: 0.5 }}>
        <View style={{
          height: Dimensions.get('window').height * 0.33,
          overflow: 'hidden',
          borderTopRightRadius: 10,
          borderTopLeftRadius: 10
        }}>
          <LinearGradient
            colors={['rgba(0,0,0,0.9)', 'transparent']}
            start={{ x: 0, y: 1 }}
            end={{ x: 0, y: -1 }}
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              top: 0,
              height: Dimensions.get('window').height * 0.33,
              borderTopLeftRadius: 10,
            }}>

            <View style={{ flex: 1, justifyContent: 'flex-end' }}>
              <View style={{ flexDirection: 'row' }}>
                <View style={{ borderLeftWidth: 6, borderColor: '#607d8b', marginBottom: 10 }} />
                <View style={{ marginLeft: 20, marginBottom: 10 }}>
                  <Text style={{ color: 'white', fontSize: 30, fontWeight: '300' }}>{props.name}</Text>
                  <Text style={{ color: 'white', fontSize: 20, fontWeight: '300' }}>{props.location}</Text>
                  <View style={{ flexDirection: 'row' }}>
                  </View>
                </View>
                <View style={{ alignItems: 'flex-end' }}>
                </View>
              </View>
            </View>
          </LinearGradient>
        </View>
      </ImageBackground>
      <View style={styles.bottom}>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Entypo name="heart" size={30} color='#d92027' />
          <Text style={{ color: '', fontSize: 20, margin: 4, fontWeight: 'bold' }}>{props.likes}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          {
            props.isPopular ?
             <FullStars></FullStars>
              :
              <EmptyStars></EmptyStars>
          }
        </View>

      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    marginTop: 30, padding: 10, shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.40,
    shadowRadius: 10.32,
    elevation: 14,
  },
  imageBackground: {
    width: '100%',
    height: Dimensions.get('window').height * 0.33
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.40,
    shadowRadius: 10.32,
    elevation: 14,
    borderBottomLeftRadius: 10, borderBottomRightRadius: 10, backgroundColor: 'rgba(0, 0, 0, 0.2)'
  }

})
export default RestaurantCard

