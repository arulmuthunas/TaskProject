import { StyleSheet, Dimensions } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#A70D2A",
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: wp(4),
    paddingBottom: wp(3)
  },
  textinputView: {
    flex: 5,
    backgroundColor: "white",
    borderTopLeftRadius: wp(10),
  },
  inputView: {
    marginTop: wp(15),
    alignItems: "center",
  },
  input: {
    margin: wp(3),
    width: wp(85),
    borderRadius: wp(2),
    paddingHorizontal: wp(4),
    backgroundColor: "white",
    borderColor: "#A70D2A",
    borderWidth: 2,
  },
  signUpText: {
    textAlign: "left",
    fontSize: wp(6),
    fontWeight: "bold",
    color: "white",
  },
  loginBtn: {
    width: wp(40),
    height: wp(13),
    borderRadius: wp(3),
    marginTop: wp(4),
    backgroundColor: "#A70D2A",
    justifyContent: "center"
  },
  loginText: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: wp(4.5),
  },
  containers: {
    position: 'absolute',
    width: windowWidth,
    height: windowHeight,
  },
  flexCenter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
})