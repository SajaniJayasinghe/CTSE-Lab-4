import {View, StyleSheet, Text, TextInput, TouchableOpacity, Alert} from "react-native";

export default function TodoListScreen(){
    return(
        <View style={styles.container}>
            <Text>Todo List</Text>
        </View>
    )
}
const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
})