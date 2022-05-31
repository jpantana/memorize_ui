import { View, StyleSheet, Text, Pressable } from 'react-native';
import { Dispatch, SetStateAction } from 'react';

export interface PropTypes {
  showMemorized: boolean;
  setShowMemorized: Dispatch<SetStateAction<null | boolean>>;
  showBible: boolean;
  setShowBible: Dispatch<SetStateAction<null | boolean>>;
}

export default function Nav(props: PropTypes) {
  const views = {
    0: (value: boolean) => props.setShowMemorized(value),
    1: (value: boolean) => props.setShowBible(value)
  };

  const handleShow = (index: number) => {
    views[0](false);
    views[1](false);
    switch (index) {
      case 0:
        views[index](true);
        break;
      case 1:
        views[index](true);
        break;
      default:
        return;
    }
  };

  return (
    <View style={styles.navbar}>
      <Pressable onPress={() => handleShow(0)}>
        <View style={[styles.navbar.linkView, !props.showBible && styles.navbar.activeView]}>
          <Text style={styles.navbar.linkView.text}>Bible</Text>
        </View>
      </Pressable>

      <Pressable onPress={() => handleShow(1)}>
        <View style={[styles.navbar.linkView, !props.showMemorized && styles.navbar.activeView]}>
          <Text style={styles.navbar.linkView.text}>Study</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: '#2D7AAD',
    flexGrow: 1,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    linkView: {
      marginRight: 12,
      marginLeft: 12,
      maxHeight: 32,

      text: {
        color: '#eee',
        fontSize: 18,
        lineHeight: 32
      }
    },

    activeView: {
      borderBottomWidth: 4,
      borderBottomColor: '#eee'
    }
  }
});
