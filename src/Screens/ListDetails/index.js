import React, { useEffect, useState } from "react";
import { Text, FlatList, View, Image, SafeAreaView, TouchableOpacity } from "react-native";
import { styles } from './styles'
import { useSelector, useDispatch } from 'react-redux'
import { getList } from '../../Redux/action'

const ListDetails = () => {
  const [currencies, setCurrencies] = useState(false);
  const [languages, setLanguages] = useState(false);
  const [region, setRegion] = useState(false);
  const [population, setPopulation] = useState(false);
  const { getData } = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getList())
  }, []);
  const renderItem = ({ item }) => {
    return (
      <View style={styles.listView}>
           <Text style={styles.dataText}>{item.code}</Text>
            <Text style={styles.dataText}>{item.name}</Text>
            <Text style={styles.dataText}>{item.symbol}</Text>
      </View>)
  }
  const renderItemLanguage = ({ item }) => {
    return (
      <View style={styles.listView}>
        <Text style={styles.dataText}>{item.iso639_1}</Text>
        <Text style={styles.dataText}>{item.iso639_2}</Text>
        <Text style={styles.dataText}>{item.name}</Text>
        <Text style={styles.dataText}>{item.nativeName}</Text>
      </View>
    )
  }
  const renderItemRegion = ({ item }) => {
    return (
      <View style={styles.listView} onPress={() => onPressTitle()}>
        <Text style={styles.dataText}>{item.region}</Text>
      </View>)
  }
  const renderItemPopulation = ({ item }) => {
    return (
      <View style={styles.listView} onPress={() => onPressTitle()}>
        <Text style={styles.dataText}>{item.population}</Text>
      </View>)
  }
  const getDataCurrency = getData.flatMap((item) => item.currencies)
  const getDataLanguages = getData.flatMap((item) => item.languages)

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.listStyle} onPress={() => setCurrencies(!currencies)}>
        <Text style={styles.listText}>Currencies</Text>
      </TouchableOpacity>
      {currencies &&
        <FlatList
          data={getDataCurrency}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      }
      <TouchableOpacity style={styles.listStyle} onPress={() => setLanguages(!languages)}>
        <Text style={styles.listText}>Languages</Text>
      </TouchableOpacity>
      {languages &&
        <FlatList
          data={getDataLanguages}
          renderItem={renderItemLanguage}
          keyExtractor={(item) => item.id}
        />}
      <TouchableOpacity style={styles.listStyle} onPress={() => setRegion(!region)}>
        <Text style={styles.listText}>Region</Text>
      </TouchableOpacity>
      {region && <FlatList
        data={getData}
        renderItem={renderItemRegion}
        keyExtractor={(item) => item.id}
      />}
      <TouchableOpacity style={styles.listStyle} onPressIn={() => setPopulation(!population)}>
        <Text style={styles.listText}>Population</Text>
      </TouchableOpacity>
      {population &&
        <FlatList
          data={getData}
          renderItem={renderItemPopulation}
          keyExtractor={(item) => item.id}
        />}
      
    </SafeAreaView>
  );
};


export default ListDetails;
