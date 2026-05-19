import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1e1e2e', // Приятный темный фон
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#cdd6f4',
        marginBottom: 5,
    },
    subtitle: {
        fontSize: 16,
        color: '#a6adc8',
        marginBottom: 30,
    },
    statsCard: {
        width: '100%',
        backgroundColor: '#313244',
        borderRadius: 12,
        padding: 20,
        marginBottom: 40,
    },
    cardText: {
        fontSize: 16,
        color: '#cdd6f4',
        marginVertical: 5,
    },
    button: {
        backgroundColor: '#a6e3a1',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 25,
        width: '100%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#11111b',
        fontSize: 18,
        fontWeight: 'bold',
    },
});