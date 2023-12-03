import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, StyleSheet, Button, Alert, Linking} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Callapi = () => {
    const jsonUrl = 'https://script.google.com/macros/s/AKfycbx02DDKu8vZyS8yUE93skxhSUd0_5Cn8j61r044NYYHw9YFMFrb-vGJjHw3mcF4vDHZHQ/exec';
    const [isLoading, setLoading] = useState(true);
    const [dataUser, setDataUser] = useState({});
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        fetch(jsonUrl)
            .then((response) => response.json())
            .then((json) => {
                console.log(json)
                setDataUser(json)
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }
        , []);

    function refreshPage() {
        fetch(jsonUrl)
            .then((response) => response.json())
            .then((json) => {
                console.log(json)
                setDataUser(json)
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }




    return (
        <SafeAreaView>
            {isLoading ? (
                <View>
                    <Text>Loading...</Text>
                </View>
            ) : (
                <View>
                    <FlatList
                        data={dataUser}
                        onRefresh={() => { refreshPage() }}
                        refreshing={refresh}
                        keyExtractor={({ id }, index) => id}
                        renderItem={({ item }) => (
                            <View>
                                <View style={styles.card}>
                                    <View style={styles.avatar}>
                                        <FontAwesome5 name={item.icon} size={50} color={item.color} />
                                    </View>
                                    <View>
                                        <Text style={styles.cardtitle}>{item.nama}</Text>
                                        <Text>{item.rating}</Text>
                                        <Text>{item.jumlahulasan}</Text>
                                        <Text>{item.jambuka}</Text>
                                        <Text>{item.jamtutup}</Text>
                                        <Text>{item.alamat}</Text>
                                    </View>
                                </View>
                                <View style={styles.lokasi} >
                                    <Button title="Lokasi"
                                        onPress={() => Linking.openURL('google.navigation:q=' + (item.latitude) + ',' + (item.longitude))}
                                        color={'green'}
                                    />
                                </View>


                            </View>
                        )}

                    />
                </View>

            )}
        </SafeAreaView>

    )
}

export default Callapi
const styles = StyleSheet.create({
    title: {
        paddingVertical: 12,
        backgroundColor: '#333',
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    avatar: {
        borderRadius: 100,
        width: 80,
    },
    cardtitle: {
        fontSize: 12,
        fontWeight: 'bold',
    },
    card: {
        flexDirection: 'row',
        padding: 20,
        borderRadius: 10,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
        marginHorizontal: 20,
        marginVertical: 7
    },
})

