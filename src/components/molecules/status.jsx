import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { ActivityIndicator } from 'react-native';


const StatusCard = ({ item, onPress }) => {
  const borderColor = item.viewed ? '#ccc' : '#04D000';

  return (
    <TouchableOpacity onPress={() => onPress(item)}>
      <View style={styles.statusCard}>
        <Image
          source={item.image}
          style={[styles.image, { borderColor }]}
        />
        <View style={styles.textContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.time}>{item.time}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const StatusPage = () => {
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [myStatusImage, setMyStatusImage] = useState({
    uri: 'https://picsum.photos/seed/my/200',
  });
  const [imageLoading, setImageLoading] = useState(false);


  const statusData = [
    {
      image: { uri: 'https://picsum.photos/seed/11/200' },
      name: 'Ravi',
      time: 'Today, 10:00 AM',
      viewed: false,
    },
    {
      image: { uri: 'https://picsum.photos/seed/12/200' },
      name: 'Aisha',
      time: 'Today, 11:45 AM',
      viewed: false,
    },
    {
      image: { uri: 'https://picsum.photos/seed/13/200' },
      name: 'John',
      time: 'Yesterday, 9:00 PM',
      viewed: true,
    },
  ];
  statusData.push(
    {
      image: { uri: 'https://picsum.photos/seed/14/200' },
      name: 'Sophia',
      time: 'Today, 12:30 PM',
      viewed: false,
    },
    {
      image: { uri: 'https://picsum.photos/seed/15/200' },
      name: 'Liam',
      time: 'Today, 1:15 PM',
      viewed: true,
    },
    {
      image: { uri: 'https://picsum.photos/seed/16/200' },
      name: 'Emma',
      time: 'Yesterday, 8:00 PM',
      viewed: true,
    }
  );

  const onStatusPress = (item) => {
    setSelectedStatus(item);
  };

  const closeModal = () => {
    setSelectedStatus(null);
  };

  const pickImage = () => {
    launchImageLibrary({ mediaType: 'photo' }, (response) => {
      if (!response.didCancel && response.assets?.length) {
        setMyStatusImage({ uri: response.assets[0].uri });
      }
    });
  };

  return (
    <View style={styles.container}>
      {/* My Status */}
      <TouchableOpacity onPress={pickImage}>
        <View style={styles.statusCard}>
          <Image
            source={myStatusImage}
            style={[styles.image, styles.myStatusBorder]}
          />
          <View style={styles.textContainer}>
            <Text style={styles.name}>My Status</Text>
            <Text style={styles.time}>Tap to add status update</Text>
          </View>
        </View>
      </TouchableOpacity>

      {/* Recent */}
      <Text style={styles.sectionTitle}>Recent updates</Text>
      <FlatList
        data={statusData.filter((item) => !item.viewed)}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <StatusCard item={item} onPress={onStatusPress} />
        )}
      />

      {/* Viewed */}
      <Text style={styles.sectionTitle}>Viewed updates</Text>
      <FlatList
        data={statusData.filter((item) => item.viewed)}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <StatusCard item={item} onPress={onStatusPress} />
        )}
      />

      {/* Modal for full-screen story */}
      {selectedStatus && (
  <Modal visible transparent animationType="fade">
    <View style={styles.modalContainer}>
      {selectedStatus?.image?.uri ? (
        <Image
          source={selectedStatus.image}
          style={styles.fullImage}
          onLoadStart={() => setImageLoading(true)}
          onLoadEnd={() => setImageLoading(false)}
        />
      ) : null}

      {imageLoading && (
        <View style={styles.loaderOverlay}>
          <ActivityIndicator size="large" color="#fff" />
        </View>
      )}

      <TouchableOpacity style={styles.closeArea} onPress={closeModal} />
    </View>
  </Modal>
)}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: scale(15),
  },
  statusCard: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: verticalScale(10),
  },
  image: {
    height: moderateScale(53),
    width: moderateScale(53),
    borderRadius: moderateScale(53),
    borderWidth: 2,
    borderColor: '#04D000',
  },
  myStatusBorder: {
    borderColor: '#ccc',
  },
  textContainer: {
    marginLeft: scale(12),
  },
  name: {
    fontSize: moderateScale(14),
    fontWeight: 'bold',
    color: '#000',
  },
  time: {
    fontSize: moderateScale(12),
    color: '#889095',
  },
  sectionTitle: {
    marginTop: verticalScale(10),
    marginBottom: verticalScale(5),
    fontSize: moderateScale(13),
    color: '#888',
    fontWeight: '600',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  loaderOverlay: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 1,
  },
  closeArea: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  
});

export default StatusPage;
