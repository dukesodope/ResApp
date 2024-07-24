import React from 'react';
import { View, Text, Image, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Swiper from 'react-native-swiper';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={require("./assets/profile_pic.jpg")} style={styles.profileImage} />
        <View style={styles.locationContainer}>
          <Text style={styles.locationText}>Your Location</Text>
          <Text style={styles.locationDetail}>Savar, Dhaka</Text>
        </View>
        <Icon name="notifications-outline" size={30} color="black" style={styles.notificationIcon} />
      </View>

      <View style={styles.searchContainer}>
         <Icon name="search-outline" size={30} color="white" style={styles.searchIcon} />
        <TextInput style={styles.searchInput} color="white" placeholder="Search your food" />
        <Icon name="options-outline" size={30} color="white" style={styles.filterIcon} />
      </View>

      <View style={styles.categoriesContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity style={[styles.categoryItem, styles.activeCategory]}>
            <Icon name="pizza-outline" size={30}/>
            <Text style={styles.categoryText} >PIZZA</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryItem}>
            <Icon name="fast-food-outline" size={30} />
            <Text style={styles.categoryText}>BURGER</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryItem}>
            <Icon name="wine-outline" size={30} color="gray" />
            <Text style={styles.categoryText}>DRINK</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryItem}>
            <Icon name="restaurant-outline" size={30} color="gray" />
            <Text style={styles.categoryText}>RICE</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      <View style={styles.featuredContainer}>
        <Swiper autoplay height={200}>
            <Image source={require("./assets/burger.png")} />
        </Swiper>
        <Image source={require("./assets/Dot.png")} style={styles.featuredIcon}/>
      </View>
      <View style={styles.popularContainer}>
        <View style={styles.popularHeader}>
          <Text style={styles.popularTitle}>Popular Items</Text>
          <TouchableOpacity>
            <Text style={styles.viewAllText}>View All</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.popularItems}>
          <View style={styles.popularItem}>
            <Image source={require("./assets/burgers.jpg")} style={styles.popularImage} />
            <Text style={styles.popularItemText}>BURGER</Text>
          </View>
          <View style={styles.popularItem}>
            <Image source={require("./assets/pizza.jpg")} style={styles.popularImage} />
            <Text style={styles.popularItemText}>PIZZA</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    paddingHorizontal: 15,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  locationContainer: {
    flex: 1,
    marginLeft: 10,
  },
  locationText: {
    fontSize: 14,
    color: 'gray',
  },
  locationDetail: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  notificationIcon: {
    marginRight: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: '#6200ee',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  searchInput: {
    flex: 1,
    color: 'white',
    paddingHorizontal: 10,
  },
  filterIcon: {
    marginLeft: 10,
  },
  categoriesContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  categoryItem: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: '#f0f0f0',
    marginRight: 10,
  },
  activeCategory: {
    backgroundColor: 'green',
    borderColor: 'green',
    borderWidth: 1,
  },
  categoryText: {
    marginTop: 5,
    fontSize: 14,
    color: 'black',
  },
  featuredContainer: {
    marginVertical: 20,
  },
  popularContainer: {
    marginVertical: 20,
  },
  popularHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  popularTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  viewAllText: {
    fontSize: 14,
    color: 'purple',
  },
  popularItems: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  popularItem: {
    width: '48%',
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    paddingVertical: 10,
  },
  popularImage: {
    width: '100%',
    height: 100,
  },
  popularItemText: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: 'bold',
  },
  featuredIcon:{
    marginLeft:150,
  },
});

export default HomeScreen;
