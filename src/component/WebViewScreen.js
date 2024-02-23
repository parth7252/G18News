import React, {useState, useEffect} from 'react';
import {WebView} from 'react-native-webview';
import {
  ActivityIndicator,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import Orientation from 'react-native-orientation-locker';

const WebViewScreen = () => {
  const [loading, setLoading] = useState(true);
  const [isRecording, setIsRecording] = useState(false);

  useEffect(() => {
    Orientation.lockToLandscape();

    return () => {
      Orientation.unlockAllOrientations();
    };
  }, []);

  const toggleRecording = () => {
    setIsRecording(!isRecording);
  };

  const htmlContent = `
    <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>body, html { margin: 0; padding: 0; height: 100%; overflow: hidden; }</style>
    </head>
    <body>
      <iframe src="https://player.castr.com/live_452c4760c0fe11eea617cd6527f010ba" width="100%" height="100%" frameborder="0" scrolling="no" allow="autoplay" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>
    </body>
    </html>
  `;

  return (
    <View style={{flex: 1}}>
      {loading && (
        <ActivityIndicator
          style={StyleSheet.absoluteFill}
          size="large"
          color="#0000ff"
        />
      )}
      <WebView
        source={{html: htmlContent}}
        style={{flex: 1}}
        onLoadEnd={() => setLoading(false)}
        allowsFullscreenVideo
        mediaPlaybackRequiresUserAction={false}
      />
      {/* <View style={styles.iconContainer}>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={toggleRecording}>
          <Image
            source={require('../assets/record.png')}
            style={[styles.icon, isRecording && styles.recording]}
          />
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 50,
  },
  recording: {
    tintColor: 'red',
  },
  icon: {
    width: 30,
    height: 30,
  },
});
export default WebViewScreen;
