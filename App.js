import React, { useState } from 'react';
import {  StyleSheet, Text, View,  FlatList, Alert, TouchableWithoutFeedback, Keyboard} from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoitem';
import AddToDo from './components/addtodo';

export default function App() {
            const [todos, setTodos] = useState([
              { text: 'buy coffee', key: '1'},
              { text: 'buy coffee', key: '2'},
              { text: 'buy coffee', key: '3'},
              { text: 'buy coffee', key: '4'}
            ]);

      const pressHandler = (key ) => {
        setTodos((prevTodos) =>{
          return prevTodos.filter(todo => todo.key !=key);
        });
      }     
        const submitHandler = (text) => {

              if(text.length > 3) {
                setTodos((prevTodos) =>{
                  return [
                    {text: text, key: Math.random().toString() },
                    ...prevTodos
                  ];
             });
          } else {
            Alert.alert('OOPS!', 'Todos must be over 3 chars long',[ 
              {text:'Understood', onPress: ( )=> console.log('alert closed') }
            ])
          }
        }
    return (
      <TouchableWithoutFeedback onPress={() =>{
            Keyboard.dismiss( );
        }}>
                <View style ={styles.container }>
                  <Header />
                    <View style ={styles.content}>
                      <AddToDo submitHandler = {submitHandler}/>
                    <View style ={styles.list}>
                        <FlatList
                            data={todos}
                            renderItem={({  item  }) =>  (
                                <TodoItem item={item} pressHandler={pressHandler}/>
                            )}
                        />
                      </View>   
                    </View>
              </View>
      </TouchableWithoutFeedback>   
    );
 }

    const styles = StyleSheet.create({
      container: {
          flex: 1, 
          backgroundColor: '#ccc', 
      } ,
      content: {
        padding: 40,
        flex:1,
      },
      list: {
        marginTop:20,
        flex:1, 
         padding:10,
      }
   });