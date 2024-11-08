import React, {useState} from 'react';
import {Text, View, TextInput, Button, Alert, ScrollView, StyleSheet} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

import Animals from "./Components/animals";
import {Colors} from "react-native/Libraries/NewAppScreen";


const styles = StyleSheet.create({
    headerView: {
        flexDirection: 'row',
        marginTop: 30,
        justifyContent: 'center',
    },

    headerText: {
        fontWeight: 'bold',
        marginTop:15,
        fontSize: 30,
    },

    username:{
        marginTop: 10,
        fontSize: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },

    inputBox:{
        borderWidth: 1,
        width:300,
        marginBottom:15,
    },

    welcomeText:{
        margin:15,
        width:300,
        justifyContent: 'center',
        alignItems: 'center',
        fontStyle: 'italic',
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: '#F28D8D'

    },

    question:{
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: 30,
        borderWidth: 2,
        borderColor: 'black',
        backgroundColor: '#F2E4C9',
    },
})

const InputBox = ({label, onChangeText})=> {
  return (
      <View style={styles.username}>
        <Text style={{fontStyle:'italic'}}>{label}</Text>
        <TextInput onChangeText={onChangeText} style={styles.inputBox}/>
      </View>
  );
};

const AllAnimals = () => {
    const [username, setUsername] = useState('');
    const [answer1, setAnswer1] = useState('');
    const [answer2, setAnswer2] = useState('');
    const [answer3, setAnswer3] = useState('');

    return (
        <ScrollView contentContainerStyle={{margin:10}}>
            {/*Header*/}
            <View style={styles.headerView}>
                <Text style={styles.headerText}> Animals Quiz!</Text>
            </View>

            {/*Username*/}
            <InputBox
                label="Enter a username: "
                onChangeText={(text) => setUsername(text)}
            />

            {/*Welcome Message*/}
            <Text style={styles.welcomeText}> Hello, {username}</Text>

            {/*Question 1*/}
            <View style={styles.question}>
                <Animals picture={require('./img/owl.jpg')}/>
                <Text style={{fontWeight:'bold', fontSize:18}}> Answer: </Text>
                <RNPickerSelect
                    onValueChange={(value1) => setAnswer1(value1)}
                    items = {[
                        {label: 'Owl', value: 'Owl'},
                        {label: 'Turtle', value: 'Turtle'},
                        {label: 'Crocodile', value: 'Crocodile'},
                    ]}
                />
            </View>


            {/*Question 2*/}
            <View style={styles.question}>
                <Animals picture={require('./img/crocodile.jpg')}/>
                <Text style={{fontWeight:'bold', fontSize:18}}> Answer: </Text>
                <RNPickerSelect
                    onValueChange={(value2) => setAnswer2(value2)}
                    items = {[
                        {label: 'Rabbit', value: 'Rabbit'},
                        {label: 'Crocodile', value: 'Crocodile'},
                        {label: 'Penguin', value: 'Penguin'},
                    ]}
                />
            </View>


            {/*Question 3*/}
            <View style={styles.question}>
                <Animals picture={require('./img/peacock.jpg')}/>
                <Text style={{fontWeight:'bold', fontSize:18}}> Answer: </Text>
                <RNPickerSelect
                    onValueChange={(value3) => setAnswer3(value3)}
                    items = {[
                        {label: 'Peacock', value: 'Peacock'},
                        {label: 'Giraffe', value: 'Giraffe'},
                        {label: 'Kingfisher', value: 'Kingfisher'},
                    ]}
                />
            </View>

            <View style={{padding:10}}/>

            <Button
                onPress={() => {
                    const correctAnswer1 = "Owl";
                    const correctAnswer2 = "Crocodile";
                    const correctAnswer3 = "Peacock";
                    let message = "Incorrect! Try again.";

                    if (answer1 === correctAnswer1 && answer2 === correctAnswer2 && answer3 === correctAnswer3) {
                        message = "Congrats!! You got all 3 right.";

                        Alert.alert(message);
                    }
                }
            }
                title= "Submit Answers"
            />

        </ScrollView>
    )
}

export default AllAnimals;














