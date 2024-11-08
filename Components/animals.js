import {View, Image, StyleSheet} from "react-native";


// const styles = StyleSheet.create({
//     question: {
//
//     }
//
// })
const AllAnimals = ({picture}) => {
    return (
        <View>
            <View style={{padding:15}}>
                <Image source={picture} style={{width: 300, height: 200, marginLeft: 10}}/>
            </View>
        </View>
    )
}

export default AllAnimals;
