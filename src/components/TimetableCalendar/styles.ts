import {StyleSheet} from 'react-native';

const ITEM_HEIGHT = 64;
export default StyleSheet.create({
  footer: {
    height: ITEM_HEIGHT,
  },
  itemContainer: {
    height: ITEM_HEIGHT,
  },
  itemContent: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  contentContainer: {
    flexGrow: 1,
  },
});
