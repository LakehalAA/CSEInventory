import React from 'react';
import {
  ScrollView,
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {SearchBar, withTheme} from 'react-native-elements';
import Card from './Card';
import Icon from 'react-native-vector-icons/MaterialIcons';
import InputField from '../GoodsList/InputField';

const Items = [
  {
    id: '1',
    objectName: 'banniere',
    user: 'John Doe',
    item: 'Banniere',
    status: 'Prise',
    imageSrc: 'https://unsplash.com/photos/nqEJ548Hqjs',
  },
  {
    id: '2',
    objectName: 'banniere',
    user: 'John Doe',
    item: 'Banniere',
    status: 'Booked',

    imageSrc: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
  },
  {
    id: '3',
    objectName: 'banniere',
    user: 'John Doe',
    item: 'Banniere',
    status: 'Prise',
    imageSrc: 'https://unsplash.com/photos/nqEJ548Hqjs',
  },
  {
    id: '4',
    objectName: 'banniere',
    user: 'John Doe',
    item: 'Banniere',
    status: 'Prise',
    imageSrc: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
  },
  {
    id: '5',
    objectName: 'banniere',
    user: 'John Doe',
    item: 'Banniere',
    status: 'Booked',
    imageSrc: 'https://unsplash.com/photos/nqEJ548Hqjs',
  },
  {
    id: '6',
    objectName: 'banniere',
    user: 'John Doe',
    item: 'Banniere',
    status: 'Prise',
    imageSrc: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
  },
  {
    id: '7',
    objectName: 'banniere',
    user: 'John Doe',
    item: 'Banniere',
    status: 'Prise',
    imageSrc: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
  },
];

class HomeScreen extends React.Component {

constructor(props){
  super(props);
  this.state={};
}


  async   componentWillMount(){
    const response = await fetch('https://cse-inventory-api.herokuapp.com/reservations/all')
  const results = await response.json()
  console.log(results)
  this.setState({
    items: results.allReservations  ,
    search: ''
  })
  console.log( );
  }

  

  updateSearch = (search) => {
    this.setState({search});
  };
  _profile = () => {
    this.props.navigation.navigate('Profile');
  };
  _openDrawer = () => this.props.navigation.openDrawer();
  _detail = () => this.props.navigation.push('ActionDetail');

  render() {
    return (
      <View style={styles.MainView}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.appBar}>
            <TouchableOpacity
              onPress={this._openDrawer}
              style={{
                flexDirection: 'row',
              }}>
              <Text>
                <Icon name="menu" size={24} color="#3498DB" />
              </Text>
            </TouchableOpacity>
            <Text
              style={{
                flexDirection: 'row',
                fontWeight: 'bold',
                fontSize: 16,
                color: '#3498DB',
              }}>
              Home
            </Text>
          </View>
        </View>
        <InputField
          ph="Search..."
          changeHandler={this.updateSearch.bind(this)}
        />
        <FlatList
          style={styles.FlatList}
          data={this.state.items}
          renderItem={({item}) => (
            <TouchableOpacity onPress={this._detail}>
              <Card
                objectName={item.reservationTitle}
                user={`${item.reservationBy.userFirstName} ${item.reservationBy.userLastName}` }
                status={"Booked"}
                imageSrc={item.objectsNeeded[0].objectImage}></Card>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.reservationTitle}></FlatList>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  FlatList: {
    marginTop: 10,
  },
  MainView: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#E8F1F5',
  },
  Header: {
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'center',
    alignItems: 'center',
  },
  home: {
    fontSize: 20,
    fontWeight: 'bold',
    left: 120,
    color: '#3498DB',
  },
  hamburger: {
    alignSelf: 'flex-start',
    position: 'relative',
    left: 110,
  },
  appBar: {
    flexDirection: 'row',
    height: 40,
    marginTop: 15,
    marginHorizontal: 30,
    marginBottom: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default HomeScreen;
