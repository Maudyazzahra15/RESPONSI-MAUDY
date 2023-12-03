import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Image, Text, View, StyleSheet, ScrollView } from 'react-native';
import Fontawesome5 from 'react-native-vector-icons/FontAwesome5';
import Portofolio from '../App';
import WebView from 'react-native-webview';
import Getjsonfile from '../Getjsonfile';


const Tab = createBottomTabNavigator();
const webmap= require('../peta/map.html');

function HomeScreen() {
    return (
        <ScrollView>
            <Text style={styles.title}>My Maps</Text>
            <View style={styles.listitems}>
                <Image source={require('../peta/idw.png')} style={styles.image}/>
                <Text style={styles.caption}>Peta Hujan Wilayah Metode IDW</Text>
            </View>
            <View style={styles.listitems}>
                <Image source={require('../peta/ccs.png')} style={styles.image}/>
                <Text style={styles.caption}>Peta Hujan Wilayah Metode CCS</Text>
            </View>
            <View style={styles.listitems}>
                <Image source={require('../peta/GEE.png')} style={styles.image}/>
                <Text style={styles.caption}>Peta Hujan Wilayah dengan GEE</Text>
            </View>
            <View style={styles.listitems}>
                <Image source={require('../peta/cdr.png')} style={styles.image}/>
                <Text style={styles.caption}>Peta Hujan Wilayah Metode CDR</Text>
            </View>
            <View style={styles.listitems}>
                <Image source={require('../peta/kriging.png')} style={styles.image}/>
                <Text style={styles.caption}>Peta Hujan Wilayah Metode Kriging</Text>
            </View>
            <View style={styles.listitems}>
                <Image source={require('../peta/polygon.png')} style={styles.image}/>
                <Text style={styles.caption}>Peta Hujan Wilayah Metode Polygon Thiesse</Text>
            </View>
        </ScrollView>
    );
}
function MapsScreen() {
    return (
        <WebView source={webmap}/>
       
    );
}

function ProfilScreen() {
    return (
        <View>
            <Portofolio/>
        </View>
    );
}
function MahasiswaScreen() {
    return (
        <View>
            <Getjsonfile/>
        </View>
    );
}



function MyTabs() {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{ headerShown: false }} >
                <Tab.Screen name="Home" component={HomeScreen} options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <Fontawesome5 name="home" color={color} size={size} />
                    ),
                }}
                />

                <Tab.Screen name="Map" component={MapsScreen} options={{
                    tabBarLabel: 'Map',
                    tabBarIcon: ({ color, size }) => (
                        <Fontawesome5 name="map-marked-alt" color={color} size={size} />
                    ),
                }} />

                <Tab.Screen name="Profil" component={ProfilScreen} options={{
                    tabBarLabel: 'Profil',
                    tabBarIcon: ({ color, size }) => (
                        <Fontawesome5 name="user-circle" color={color} size={size} />
                    ),
                }} />
                <Tab.Screen name="Mahasiswa" component={MahasiswaScreen} options={{
                    tabBarLabel: 'Mahasiswa',
                    tabBarIcon: ({ color, size }) => (
                        <Fontawesome5 name="users" color={color} size={size} />
                    ),
                }} />

            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default MyTabs;

const styles = StyleSheet.create ({
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'stretch'
    },
    listitems: {
        padding: 15,
        alignItems: 'center',

    },
    caption: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10,
    }
});