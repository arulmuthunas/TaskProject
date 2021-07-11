import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        marginTop: wp(5)
    }, listStyle: {
        width: wp(90),
        margin: wp(2),
        padding: wp(5),
        borderRadius: wp(3),
        backgroundColor: "#A70D2A",
    },
    listText: {
        color: "white",
        fontSize: wp(5),
        fontWeight: "bold",
        textAlign: "center"
    },
    dataText: {
        color: "black",
        fontSize: wp(4),
        textAlign: "left",
    },
    listView: {
        width: wp(90),
        margin: wp(1),
        padding: wp(3),
        borderRadius: wp(3),
        paddingHorizontal: wp(5),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.5,
        shadowRadius: 5.00,
        width: wp(90),
        backgroundColor: "white",
        elevation: 2,
    }

})