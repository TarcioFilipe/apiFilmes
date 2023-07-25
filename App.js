import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import Filmes from './src/components/Filmes';

import api from './src/services/api';

export default function App() {

  const [filmes, setFilmes] = useState([])

  useEffect(()=> {

    async function loadFilmes(){
      const response = await api.get('r-api/?api=filmes')
      // console.log(response.data)
      setFilmes(response.data)
    }

    loadFilmes()
    
  }, [])
  return (
    <View style={styles.container}>

      <FlatList 
      data={filmes}
      keyExtractor={ item => String(item.id) }
      renderItem={ ({ item }) => <Filmes data={item} /> }
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 36,
    justifyContent: 'center',
    backgroundColor: '#FFFAFA'
  },
});
