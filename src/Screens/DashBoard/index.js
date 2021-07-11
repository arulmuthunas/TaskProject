import React, { useEffect} from "react";
import { Text, FlatList, TouchableOpacity, SafeAreaView,Image} from "react-native";
import { styles } from './styles'
import { useSelector, useDispatch } from 'react-redux'
import { getList } from '../../Redux/action'
import { SvgUri } from 'react-native-svg';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const DashBoard = ({ navigation }) => {
  const { getData } = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getList())
  }, []);
  const onPressTitle = () => {
    navigation.push('ListDetails')
  };
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.listView} onPress={() => onPressTitle()}>
        <Text style={styles.captialText}>{item.capital}</Text>
        <SvgUri
          width={wp(30)}
          height={wp(20)}
          uri={item.flag}
        /> 
      </TouchableOpacity>
      )
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>DashBoard</Text>
      <FlatList
        data={getData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};
export default DashBoard;
