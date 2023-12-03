import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Image, Text, View, StyleSheet, ScrollView } from 'react-native';
import Fontawesome5 from 'react-native-vector-icons/FontAwesome5';
import Portofolio from '../App';
import { WebView } from 'react-native-webview';
import Callapi from '../Callapi';


const Tab = createBottomTabNavigator();


const forminput = 'https://maudyazzahra15.github.io/RESPONSI-A12/';
const webmap = 'https://maudyazzahra15.github.io/RESPONSI-A12/map.html';

function HomeScreen() {
    return (
        <ScrollView>
            <View>
                <Text style={styles.title}>APLIKASI PETA LOKASI RUMAH MAKAN PADANG</Text>
                <View style={styles.container}>

                    <Text style={styles.text}>

                        Nasi Padang: Nasi adalah bagian utama dari hidangan Padang. Pada umumnya, nasi disajikan bersama sejumlah hidangan lauk pauk yang ditempatkan di atas meja. Pelanggan dapat memilih lauk pauk mana yang ingin mereka santap.

                        Lauk Pauk: Lauk pauk dalam hidangan Padang sangat beragam, mulai dari rendang daging sapi yang terkenal, ayam goreng, ayam bakar, sambal balado, gulai ikan, gulai otak, dan berbagai hidangan lain yang kaya rasa dan rempah.

                        Sambal: Sambal Padang juga terkenal karena kepedasannya. Setiap rumah makan Padang biasanya memiliki resep sambal khas mereka yang dapat membuat hidangan semakin lezat.

                        Sistem Pembayaran: Salah satu ciri khas rumah makan Padang adalah sistem pembayaran yang unik. Pelanggan biasanya hanya membayar untuk hidangan yang mereka makan atau sentuh. Piring-piring yang tidak disentuh tetap dianggap tidak digunakan dan tidak dihitung dalam tagihan.

                        Rumah makan Padang telah menyebar ke berbagai daerah di Indonesia dan bahkan ke mancanegara, menjadi salah satu representasi kaya akan keanekaragaman kuliner Indonesia. Kelezatan masakan Padang telah membuatnya populer di berbagai kalangan, dan warung-warung makan Padang dapat ditemui di berbagai kota di Indonesia.</Text>

                </View>
                <View style={styles.container}>

                    <Text style={styles.stack}>Stack</Text>
                    <Text style={styles.stack}>1. React Native</Text>
                    <Text style={styles.stack}>2. HTML</Text>
                    <Text style={styles.stack}>3. LeafletJS</Text>
                    <Text style={styles.stack}>4. Google Sheets</Text>
                    <Text style={styles.stack}>5. Apps Script</Text>
                    <Text style={styles.stack}>6. FontAwesome5</Text>
                    <Text style={styles.stack}>7. GitHub</Text>
                </View>
            </View>

           
        </ScrollView>
    );
}
function MapsScreen() {
    return (
        <WebView source={{ uri: webmap }} />

    );
}

function ProfilScreen() {
    return (
        <View>
            <Portofolio />
        </View>
    );
}
function AddDataScreen() {
    return (

        <WebView source={{ uri: forminput }} />
    );
}
function GetDataScreen() {
    return (

        <View>
            <Callapi />
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
                <Tab.Screen name="Add Data" component={AddDataScreen} options={{
                    tabBarLabel: 'Add Data',
                    tabBarIcon: ({ color, size }) => (
                        <Fontawesome5 name="plus-circle" color={color} size={size} />
                    ),
                }} />
                <Tab.Screen name="List Data" component={GetDataScreen} options={{
                    tabBarLabel: 'List Data',
                    tabBarIcon: ({ color, size }) => (
                        <Fontawesome5 name="th-list" color={color} size={size} />
                    ),
                }} />

                <Tab.Screen name="Profil" component={ProfilScreen} options={{
                    tabBarLabel: 'Profil',
                    tabBarIcon: ({ color, size }) => (
                        <Fontawesome5 name="user-circle" color={color} size={size} />
                    ),
                }} />



            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default MyTabs;

const styles = StyleSheet.create({
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
    },
    text: {
        fontSize: 15,
        textAlign: 'justify',

    },
    stack: {
        fontSize: 15,
        textAlign: 'center',

    },
    container: {
        marginHorizontal: 20,
        backgroundColor: '#fff'
    }
});