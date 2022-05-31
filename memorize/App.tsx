import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import Nav from './src/components/Nav';

export default function App() {
  const [showMemorized, setShowMemorized] = useState(true);
  const [showBible, setShowBible] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.container.body}>
        {showMemorized && (
          <View style={styles.container.view}>
            <Text style={styles.container.view.text}>SHOWING BIBLE</Text>
          </View>
        )}

        {showBible && (
          <View style={styles.container.view}>
            <Text style={styles.container.view.text}>SHOWING STUDY</Text>
          </View>
        )}
      </View>
      <StatusBar style="auto" />

      <Nav
        setShowMemorized={setShowMemorized}
        showMemorized={showMemorized}
        setShowBible={setShowBible}
        showBible={showBible}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#484848',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',

    view: {
      flexGrow: 1,

      text: {
        color: '#eee',
        width: '100%'
      }
    },

    body: {
      flexGrow: 11,
      marginTop: '20%'
    }
  }
});
