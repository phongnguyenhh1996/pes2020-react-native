import React, {useEffect} from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import {getPlayers} from '../../utils/callApi';
import useAsync from '../../utils/useAsync';
import PlayerCard from './components/PlayerCard';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(214, 205, 221)',
    flex: 1,
  },
  wrapper: {
    padding: 5,
  },
});

export default function PlayersScreen({route, navigation}) {
  const {teamId} = route.params;
  const {execute, pending, value, error} = useAsync(getPlayers(teamId), false);

  useEffect(() => {
    execute();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log({players: value});

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.wrapper}
        numColumns={2}
        horizontal={false}
        data={value || []}
        renderItem={({item, index}) => (
          <PlayerCard navigation={navigation} index={index} data={item} />
        )}
        keyExtractor={(item) => item._id}
      />
    </View>
  );
}
