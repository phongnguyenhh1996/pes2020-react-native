import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Rating, Icon} from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontWeight: 'bold',
  },
  barWrapper: {
    borderColor: '#000',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#000',
  },
  bar: {
    height: 6,
  },
  text: {
    fontWeight: '700',
  },
  rating: {
    backgroundColor: 'transparent',
  },
  starWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 5,
  },
  absolute: {
    position: 'absolute',
  },
  statItem: {
    marginBottom: 6,
  },
});

function StatItem({stat = 50, title, bgColor}) {
  return (
    <View style={styles.statItem}>
      <View style={styles.row}>
        <Text style={styles.text}>{title}</Text>
        <Text style={styles.text}>{stat}</Text>
      </View>
      <View style={styles.barWrapper}>
        <View
          style={[styles.bar, {width: stat + '%', backgroundColor: bgColor}]}
        />
      </View>
    </View>
  );
}

export default function TeamStats({stats = {}}) {
  return (
    <View style={styles.container}>
      <StatItem stat={stats.attack} title="FW" bgColor="#DA3D78" />
      <StatItem stat={stats.midfield} title="MF" bgColor="#69D043" />
      <StatItem stat={stats.defence} title="DF" bgColor="#4CC3DD" />
      <View style={styles.starWrapper}>
        <View>
          <Icon name="star" color="#F3F525" />
          <Icon
            containerStyle={styles.absolute}
            name="star-o"
            type="font-awesome"
            color="#000"
          />
        </View>
        <View>
          <Icon name="star" color="#F3F525" />
          <Icon
            containerStyle={styles.absolute}
            name="star-o"
            type="font-awesome"
            color="#000"
          />
        </View>
        <View>
          <Icon name="star" color="#F3F525" />
          <Icon
            containerStyle={styles.absolute}
            name="star-o"
            type="font-awesome"
            color="#000"
          />
        </View>
        <View>
          <Icon name="star" color="#F3F525" />
          <Icon
            containerStyle={styles.absolute}
            name="star-o"
            type="font-awesome"
            color="#000"
          />
        </View>
        <View>
          <Icon name="star" type="font-awesome" color="#000" />
          <Icon
            containerStyle={styles.absolute}
            name="star-half"
            type="font-awesome"
            color="#F3F525"
          />
          <Icon
            containerStyle={styles.absolute}
            name="star-o"
            type="font-awesome"
            color="#000"
          />
        </View>
      </View>
    </View>
  );
}
