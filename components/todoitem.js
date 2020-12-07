import React from 'react';
import {  StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function TodoItem( { item, pressHandler }) {
   return (
      <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <View style = {styles.item}>
        <MaterialIcons name= 'delete' size={20} color ='#333'  />
        <Text style={styles.itemText}>{item.text}</Text>
        </View>
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create ({
item: {
  padding: 14,
  marginTop: 16,
  borderColor: '#000',
  borderWidth: 1,
  borderStyle:'solid', 
  borderRadius: 10, 
    backgroundColor:'#fff',
    flexDirection: 'row',
   },
  itemText: {
    color:'#000',
    fontSize: 18,
    marginLeft:10,
    paddingTop: -4,
    paddingLeft:10,
  }
  
});