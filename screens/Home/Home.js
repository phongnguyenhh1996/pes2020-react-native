import React, {useEffect} from 'react';
import {ScrollView, Text, StyleSheet, Button} from 'react-native';
import {ListItem} from 'react-native-elements';
import {getLeagues} from '../../utils/callApi';
import useAsync from '../../utils/useAsync';
import {NAVIGATION_NAME} from '../../utils/constants';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(214, 205, 221)',
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  header: {
    backgroundColor: '#9c27b0',
  },
  listItemOdd: {
    backgroundColor: 'rgba(255,255,255,0.3)',
  },
  listItemEven: {
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
  title: {
    fontWeight: 'bold',
  },
});

export default function HomeScreen({navigation}) {
  const {execute, pending, value, error} = useAsync(getLeagues, false);

  useEffect(() => {
    execute();
  }, [execute]);

  console.log(value);

  return (
    <ScrollView style={styles.container}>
      {value &&
        value.map((league, i) => (
          <ListItem
            containerStyle={
              i % 2 === 0 ? styles.listItemEven : styles.listItemOdd
            }
            key={i}
            leftAvatar={{source: {uri: league.logo}}}
            title={league.title}
            titleStyle={styles.title}
            onPress={() =>
              navigation.navigate(NAVIGATION_NAME.TEAMS, {
                league: league.code,
                title: league.title,
              })
            }
            underlayColor="#fff"
          />
        ))}
    </ScrollView>
  );
}
