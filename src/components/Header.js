//import libraries
import React from 'react';
import { Text, View } from 'react-native';

//make component
const Header = (props) => (
    <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>{props.headerText}</Text>
    </View>
);

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 18,
        height: 60,
        shadowColor: 'black',
        shadowOffset: { width: 0, Height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative',
    },
    textStyle: {
        fontSize: 20,
    }
};

//make component available for use
export default Header;