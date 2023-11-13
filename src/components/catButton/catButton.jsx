import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import { useState } from 'react'
import React from 'react'

const CatButton = () => {
    const [activeTab, setActiveTab] = useState(1)
    const placeholder = {1: "Enter hotel's name ...", 2: "Enter restaurant's name ...", 3: "Enter the thing you wish to do ..."}
    return (
        <View style={styles.GeneralView}>
            <View style={styles.ExploreView}>
                <Text style={styles.ExploreText}>EXPLORE</Text>
            </View>
            <View style={styles.ButtonView}>
                <TouchableOpacity style={styles.ButtonStyle} onPress={()=>setActiveTab(1)}><Text style={styles.TextButton}>Hotels</Text></TouchableOpacity>
                <TouchableOpacity style={styles.ButtonStyle} onPress={()=>setActiveTab(2)}><Text style={styles.TextButton}>Restaurants</Text></TouchableOpacity>
                <TouchableOpacity style={styles.ButtonStyle} onPress={()=>setActiveTab(3)}><Text style={styles.TextButton}>Things To Do</Text></TouchableOpacity>
            </View>
            <View>
                <TextInput
                    style={styles.SearchInput}
                    placeholder={placeholder[activeTab]}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    GeneralView:{
        backgroundColor: '#00af87',
    },
    ExploreView:{
        padding: 10,
        margin: 10,
    },
    ExploreText:{
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 45,
        fontWeight: 'bold'
    },
    ButtonView:{
        justifyContent: 'center',
        display: 'flex',
        flexDirection:'row',
        margin: 20,
    },
    ButtonStyle:{
        backgroundColor: '#000',
        borderRadius: 14,
        margin: 10,
        padding: 0,
        width: '30%',
        height: 30,
    },
    TextButton:{
        color:'#fff',
        margin: 0,
        padding: 5,
        textAlign: 'center'
    },
    SearchInput:{
        alignSelf: 'center',
        textAlign: 'center',
        width: '80%',
        borderWidth: 5,
        padding: 10,
        margin: 5,
        height: 40,
        marginTop: 0,
        borderColor: '#000',
        borderRadius:20,
        fontSize: 20,
        color: '#333',
    },
})

export default CatButton