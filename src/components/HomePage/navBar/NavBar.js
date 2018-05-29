import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const menu = () => (
    <View style={styles.navBar}>
        <View style={styles.navButton}>
            <Text style={styles.navItem}>Home</Text>
            <Text style={styles.navItem}>Breweries</Text>
            <Text style={styles.navItem}>Favorites</Text>
            <Text style={styles.navItem}>Crawl</Text>
        </View>
    </View>
);

const styles = StyleSheet.create({
    navBar: {
        flex: 1,
        flexDirection: "column-reverse",
        width: "100%",
        backgroundColor: "#683805"
    },
    navButton: {
        flex: 1,
        flexDirection: "row",
        // justifyContent: "center",
        // alignItems: "center",
    },
    navItem: {
        flex: 1,
        backgroundColor: "#683805",
        fontSize: 20,
        borderStyle: "solid",
        borderWidth: 1,
        alignItems: "center",
        textAlign: "center",
        justifyContent: "center"
    }
})

export default menu;