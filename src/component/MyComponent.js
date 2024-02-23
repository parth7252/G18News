import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text, Platform } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const MyComponent = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/header_image.jpeg')}
          style={styles.image}
          resizeMode="center"
        />
      </View>

      <View style={styles.buttonsRow}>
        <TouchableOpacity
          style={styles.customButton}
          onPress={() => navigation.navigate('WebViewScreen')}>
          <LinearGradient
            colors={['#c0c0c0', '#ffffff']} // Replace with your gradient colors
            style={styles.gradient}>
            <Image
              source={require('../assets/video_camera.png')}
              style={[styles.icon, {tintColor: '#FF3131', justifyContent: 'flex-start', alignSelf: 'flex-start'}]}
            />
            <Text style={styles.buttonText} >English News</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.customButton}
          onPress={() => navigation.navigate('WebViewScreen')}>
          <LinearGradient
            colors={['#c0c0c0', '#ffffff']} // Replace with your gradient colors
            style={styles.gradient}>
            <Image
              source={require('../assets/video_camera.png')}
              style={[styles.icon, {tintColor: '#FF3131',justifyContent: 'flex-start', alignSelf: 'flex-start'}]}
            />
            <Text style={styles.buttonText} numberOfLines={2}>Gujarati News</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'white',
  },
  imageContainer: {
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
  },
  buttonsRow: {
    flexDirection: 'row', // Align buttons in a row
    justifyContent: 'space-around', // Add space between the buttons
    width: '100%', // Ensure the container takes the full width
    paddingHorizontal: 20, // Add some padding to not stick to the edges
  },
  customButton: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  gradient: {
    flexDirection: 'column', // Stack icon and text vertically
    alignItems: 'center', // Center items horizontally
    justifyContent: 'center', // Center items vertically
    // borderWidth: 1,
    // borderColor: '#000',
    padding: 10,
    borderRadius: 10,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  buttonText: {
    color: 'black',
    marginTop: 10, // Ensure text is below the icon
    fontWeight: 'bold',
    fontSize: 18,
  },
  icon: {
    width: 50,
    height: 50,
  },
});

export default MyComponent;
