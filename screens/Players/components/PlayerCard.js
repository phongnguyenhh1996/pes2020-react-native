import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 5,
    flex: 1,
    maxWidth: '50%',
  },
  img: {
    width: '100%',
    height: undefined,
    aspectRatio: 182 / 256,
  },
  content: {
    position: 'absolute',
    right: 0,
    top: 0,
    left: 0,
    bottom: 0,
    // backgroundColor: 'red',
  },
  text: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
  },
  face: {
    width: 120,
    height: 120,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingRight: 10,
    paddingLeft: 10,
  },
  country: {
    width: 35,
    height: 35,
  },
  stat: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    width: '50%',
  },
  rowWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  nameWrapper: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

const STATS_KEY = ['spd', 'sht', 'dri', 'str', 'pas', 'def'];

export default function PlayerCard({data}) {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.img}
          source={require('../../../assets/playerBG.png')}
        />
        <View style={styles.content}>
          <View style={styles.row}>
            <View>
              <Text style={styles.text}>{data.position}</Text>
              <Text style={styles.text}>{data.stats && data.stats.ovr}</Text>
              <Image style={styles.country} source={{uri: data.country}} />
            </View>
            <Image style={styles.face} source={{uri: data.logo}} />
          </View>
          <View style={styles.rowWrap}>
            {STATS_KEY.map((key) => (
              <Text key={key} style={styles.stat}>
                {data.stats && data.stats[key]} {key.toUpperCase()}
              </Text>
            ))}
          </View>
          <View style={styles.nameWrapper}>
            <Text style={styles.name}>
              {data.name && data.name.toUpperCase()}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
