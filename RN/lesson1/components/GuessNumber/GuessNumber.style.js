import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
        paddingRight: '5%',
        paddingLeft: '5%',
        paddingTop: '20%',
        display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        height: '100%',
        gap: 20,
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
    },
    endText: {
        color: 'blue',
		fontWeight: 'bold',
		textAlign: 'center',
    },
});

export default styles;
