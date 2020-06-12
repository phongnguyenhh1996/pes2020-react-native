import React, {useEffect} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {getTeams} from '../../utils/callApi';
import useAsync from '../../utils/useAsync';
import TeamItem from './components/TeamItem';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(214, 205, 221)',
    flex: 1,
  },
});

export default function TeamsScreen({route, navigation}) {
  const {league} = route.params;
  const {execute, pending, value, error} = useAsync(getTeams(league), false);

  useEffect(() => {
    execute();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // console.log({team: value});

  return (
    <View style={styles.container}>
      <FlatList
        data={value || []}
        renderItem={({item, index}) => (
          <TeamItem navigation={navigation} index={index} data={item} />
        )}
        keyExtractor={(item) => item.code}
      />
    </View>
  );
}
