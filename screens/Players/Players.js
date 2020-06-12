import React, {useEffect} from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import {getTeams} from '../../utils/callApi';
import useAsync from '../../utils/useAsync';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(214, 205, 221)',
    flex: 1,
  },
});

export default function PlayersScreen({route}) {
  const {team} = route.params;
  // const {execute, pending, value, error} = useAsync(getTeams(league), false);

  // useEffect(() => {
  //   execute();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // console.log({team: value});

  return (
    <View style={styles.container}>
      <Text>{team}</Text>
    </View>
  );
}
