import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"white",
        alignItems:"center"
    },
    listView: {
        margin: wp(2),
        flexDirection: "row",
        justifyContent: "space-between",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.5,
        shadowRadius: 5.00,
        width:wp(90),
        backgroundColor:"white",
        elevation: 8,
        borderRadius:wp(3),
        padding:wp(2),
      
    },
    captialText: {
        fontSize: wp(5),
        marginVertical:wp(6),
        marginHorizontal:wp(6)
    },
    flagImg: {
        width: wp(20),
        height: wp(20),

    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
    heading: {
        textAlign: "center",
        fontSize: wp(6),
        color:"#A70D2A",
        fontWeight:"bold",
        marginBottom:wp(4),
        marginTop:wp(1)
    }
})