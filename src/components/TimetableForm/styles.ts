import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
  },
  fab: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    margin: 16,
  },
  sectionHeader: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    paddingRight: 0,
  },
  span: {
    flex: 1,
  },
  footer: {
    height: 100,
  },
  empty: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
