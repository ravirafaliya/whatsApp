import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import Feather from 'react-native-vector-icons/Feather';

const callData = [
  {
    id: '1',
    name: 'Ravi',
    image: { uri: 'https://picsum.photos/seed/1/100' },
    type: 'outgoing',
    time: 'Today, 10:30 AM',
    isVideo: false,
  },
  {
    id: '2',
    name: 'Aisha',
    image: { uri: 'https://picsum.photos/seed/2/100' },
    type: 'incoming',
    time: 'Yesterday, 8:15 PM',
    isVideo: true,
  },
  {
    id: '3',
    name: 'John',
    image: { uri: 'https://picsum.photos/seed/3/100' },
    type: 'missed',
    time: 'Today, 1:45 PM',
    isVideo: false,
  },
  {
    id: '4',
    name: 'Sophia',
    image: { uri: 'https://picsum.photos/seed/4/100' },
    type: 'incoming',
    time: 'Today, 9:00 AM',
    isVideo: true,
  },
  {
    id: '5',
    name: 'Liam',
    image: { uri: 'https://picsum.photos/seed/5/100' },
    type: 'outgoing',
    time: 'Yesterday, 6:30 PM',
    isVideo: false,
  },
  {
    id: '6',
    name: 'Emma',
    image: { uri: 'https://picsum.photos/seed/6/100' },
    type: 'missed',
    time: 'Today, 11:15 AM',
    isVideo: true,
  },
  {
    id: '7',
    name: 'Noah',
    image: { uri: 'https://picsum.photos/seed/7/100' },
    type: 'outgoing',
    time: 'Yesterday, 3:45 PM',
    isVideo: false,
  },
  {
    id: '8',
    name: 'Olivia',
    image: { uri: 'https://picsum.photos/seed/8/100' },
    type: 'incoming',
    time: 'Today, 7:30 AM',
    isVideo: true,
  },
  {
    id: '9',
    name: 'William',
    image: { uri: 'https://picsum.photos/seed/9/100' },
    type: 'missed',
    time: 'Yesterday, 10:00 PM',
    isVideo: false,
  },
  {
    id: '10',
    name: 'Ava',
    image: { uri: 'https://picsum.photos/seed/10/100' },
    type: 'outgoing',
    time: 'Today, 2:00 PM',
    isVideo: true,
  },
  {
    id: '11',
    name: 'James',
    image: { uri: 'https://picsum.photos/seed/11/100' },
    type: 'incoming',
    time: 'Yesterday, 5:20 PM',
    isVideo: false,
  },
  {
    id: '12',
    name: 'Isabella',
    image: { uri: 'https://picsum.photos/seed/12/100' },
    type: 'missed',
    time: 'Today, 4:10 PM',
    isVideo: true,
  },
  {
    id: '13',
    name: 'Lucas',
    image: { uri: 'https://picsum.photos/seed/13/100' },
    type: 'outgoing',
    time: 'Yesterday, 12:00 PM',
    isVideo: false,
  },
];

const CallCard = ({ item }) => {
  let iconName = '';
  let iconColor = '#04D000';

  switch (item.type) {
    case 'incoming':
      iconName = 'arrow-down-left';
      break;
    case 'outgoing':
      iconName = 'arrow-up-right';
      break;
    case 'missed':
      iconName = 'arrow-down-left';
      iconColor = 'red';
      break;
  }

  return (
    <TouchableOpacity style={styles.card}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <View style={styles.row}>
          <Feather
            name={iconName}
            size={16}
            color={iconColor}
            style={{ marginRight: 5 }}
          />
          <Text style={styles.time}>{item.time}</Text>
        </View>
      </View>
      <TouchableOpacity>
        <Feather
          name={item.isVideo ? 'video' : 'phone'}
          size={22}
          color="#04D000"
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const Calls = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={callData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CallCard item={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Calls;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: scale(15),
    paddingTop: verticalScale(10),
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: verticalScale(12),
    borderBottomWidth: 0.3,
    borderColor: '#ccc',
  },
  image: {
    height: moderateScale(48),
    width: moderateScale(48),
    borderRadius: moderateScale(48),
  },
  info: {
    flex: 1,
    marginLeft: scale(12),
  },
  name: {
    fontSize: moderateScale(14),
    fontWeight: 'bold',
    color: '#000',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: verticalScale(2),
  },
  time: {
    fontSize: moderateScale(12),
    color: '#888',
  },
});
