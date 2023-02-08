import {StyleSheet} from 'react-native';

const ITEM_HEIGHT = 64;
export default StyleSheet.create({
  footer: {
    height: ITEM_HEIGHT,
  },
  itemContainer: {
    padding: 16,
    height: ITEM_HEIGHT,
  },
  itemContent: {
    justifyContent: 'center',
  },
});
