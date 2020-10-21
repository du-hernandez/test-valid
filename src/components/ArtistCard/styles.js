import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 5,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    borderRadius: 50,
    backgroundColor: '#3CAEA3',
    paddingRight: 20,
  },
  body: {},
  name: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  avatar: {
    borderWidth: 3,
    borderColor: '#FFF',
  },
});

export default styles;
