import React from 'react';
import {
    View, 
    Text,
    StyleSheet
} from 'react-native';
import color from '../constantes/colors';


function Header(props) {
    const { title } = props;
    return (
        <View style={styles.headerContainer}>
            <Text styles={styles.headerText}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        width: '100%',
        height: '10%',
        backgroundColor: color.light,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold'
    }
});

export default Header;