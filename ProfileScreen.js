import React from 'react';
import { View, Text, Image, StyleSheet, Switch, TouchableOpacity, SafeAreaView } from 'react-native';

const ProfileScreen = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const toggleSwitch = () => setIsDarkMode(previousState => !previousState);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image source={require('./assets/back.png')} style={styles.backIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.profileContainer}>
        <View style={styles.imageWrapper}>
          <Image source={require("./assets/profile_pic.jpg")} style={styles.profileImage} />
        </View>
        <Text style={styles.nameText}>Trần Trung Đức</Text>
        <Text style={styles.emailText}>ductrantrung10@gmail.com</Text>
      </View>
      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuItem}>
          <Image source={require('./assets/home.png')} style={styles.menuIcon} />
          <Text style={styles.menuText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Image source={require('./assets/card.png')} style={styles.menuIcon} />
          <Text style={styles.menuText}>My Card</Text>
        </TouchableOpacity>
        <View style={styles.menuItem}>
          <Image source={require('./assets/moon.png')} style={styles.menuIcon} />
          <Text style={styles.menuText}>Dark Mode</Text>
          <Switch
            trackColor={{ false: "white", true: "#021526" }}
            thumbColor={isDarkMode ? "#021526" : "white"}
            ios_backgroundColor="#57A6A1"
            onValueChange={toggleSwitch}
            value={isDarkMode}
          />
        </View>
        <TouchableOpacity style={styles.menuItem}>
          <Image source={require('./assets/truck.png')} style={styles.menuIcon} />
          <Text style={styles.menuText}>Track Your Order</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Image source={require('./assets/setting.png')} style={styles.menuIcon} />
          <Text style={styles.menuText}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Image source={require('./assets/help.png')} style={styles.menuIcon} />
          <Text style={styles.menuText}>Help Center</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  backIcon: {
    width: 24,
    height: 24,
    
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 110,
  },
  profileContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  imageWrapper: {
    position: 'relative',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  editIconWrapper: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  editIcon: {
    width: 16,
    height: 16,
  },
  nameText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  emailText: {
    fontSize: 14,
    color: 'gray',
  },
  menuContainer: {
    marginHorizontal: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  menuIcon: {
    width: 24,
    height: 24,
    marginRight: 20,
  },
  menuText: {
    fontSize: 16,
    flex: 1,
  },
  logoutButton: {
    backgroundColor: '#6200ee',
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 10,
  },
  logoutText: {
    color: 'white',
    fontSize: 16,
  },
});

export default ProfileScreen;
