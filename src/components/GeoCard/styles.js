import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    height: 50,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'gray',
    borderRadius: 5,
  },
  title: {
    fontWeight: 'bold',
    color: 'gray',
  },
});

export default styles;
