import {StyleSheet} from 'react-native';
import {APP_COLOR} from './constants';

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 32,
    justifyContent: 'center',
    width: '100%',
  },
  textContainer: {
    alignItems: 'center',
  },
  buttonContainer: {
    paddingTop: 32,
    justifyContent: 'center',
  },
  orContainer: {
    flexDirection: 'row',
    marginTop: 32,
    justifyContent: 'center',
  },
  signupContainer: {
    alignSelf: 'center',
    marginTop: 32,
  },
  line: {
    width: '85%',
    alignSelf: 'center',
    height: 1,
    marginBottom: 24,
    backgroundColor: APP_COLOR,
  },
  smallLine: {
    width: '30%',
    alignSelf: 'center',
    height: 1,
    marginHorizontal: 12,
    backgroundColor: APP_COLOR,
  },
  text: {
    fontSize: 40,
    fontWeight: '400',
    lineHeight: 68,
    color: APP_COLOR,
  },
  signup: {
    color: APP_COLOR,
    lineHeight: 68,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
  input: {
    height: 40,
    margin: 8,
    borderWidth: 1,
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#F4F4F4',
  },
  headerShape: {
    height: 160,
    width: '100%',
    backgroundColor: APP_COLOR,
  },
  bottomShape: {
    height: 80,
    width: '100%',
    backgroundColor: APP_COLOR,
  },
  circleShape: {
    position: 'absolute',
    height: 28,
    width: 28,
    borderRadius: 60,
    backgroundColor: '#FFFFFF',
    opacity: 0.7,
    marginLeft: 24,
    marginTop: 12,
  },
});

export default styles;