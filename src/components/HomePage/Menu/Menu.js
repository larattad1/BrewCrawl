import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Menu = () => (
    <View style={styles.menu}>
        <View style={styles.menuRow}>
            <Text style={styles.menuItem}>Breweries</Text>
            <Text style={styles.menuItem}>Crawl</Text>
        </View>
        <View style={styles.menuRow}>
            <Text style={styles.menuItem}>Favorites</Text>
            <Text style={styles.menuItem}>Events</Text>
            <Text style={styles.menuItem}>Specials</Text>
        </View>
        <View style={styles.menuRow}>
            <Text style={styles.menuItem}>Suggested Crawls</Text>
        </View>
    </View>
);

const styles = StyleSheet.create({
    menu: {
        // flex: 1,
        width: "100%",
        height: "45%",
        // alignItems: "stretch"
    },
    menuRow: {
        flex: 1,
        flexDirection: "row",
        // justifyContent: "center",
        // alignItems: "center",
    },
    menuItem: {
        flex: 1,
        backgroundColor: "#683805",
        fontSize: 25,
        borderStyle: "solid",
        borderWidth: 1,
        alignItems: "center",
        textAlign: "center",
        justifyContent: "center"
    }
})

export default Menu;
