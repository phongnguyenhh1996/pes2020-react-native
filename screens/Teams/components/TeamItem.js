import React from 'react';
import {View, Text, TouchableHighlight, Image, StyleSheet} from 'react-native';
import TeamStats from './TeamStats';
import {NAVIGATION_NAME} from '../../../utils/constants';

const styles = StyleSheet.create({
  logo: {
    width: 120,
    height: 120,
    marginRight: 10,
  },
  title: {
    fontWeight: '700',
    fontSize: 25,
    marginBottom: 10,
  },
  teamItemContainer: {
    padding: 20,
  },
  teamItemContainerOdd: {
    backgroundColor: 'rgba(255,255,255,0.3)',
  },
  teamItemContainerEven: {
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
  row: {
    flexDirection: 'row',
  },
});

export default function TeamItem(props) {
  const {data, index, navigation} = props;
  return (
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor="#fff"
      onPress={() =>
        navigation.navigate(NAVIGATION_NAME.PLAYERS, {
          team: data.code,
          title: data.name,
        })
      }>
      <View
        style={[
          styles.teamItemContainer,
          index % 2 === 0
            ? styles.teamItemContainerEven
            : styles.teamItemContainerOdd,
        ]}>
        <Text style={styles.title}>{data.name && data.name.toUpperCase()}</Text>
        <View style={styles.row}>
          <Image
            style={styles.logo}
            source={{uri: data.logo && data.logo.split('?')[0]}}
          />
          <TeamStats stats={data.stats} />
        </View>
      </View>
    </TouchableHighlight>
  );
}
