import React, {useState} from "react";
import { StatusBar } from 'expo-status-bar';
import {FlatList, StyleSheet, View} from 'react-native';
import {Navbar} from "./src/Navbar";
import {AddTodo} from "./src/AddTodo";
import {Todo} from "./src/Todo";

export default function App() {
    const [todos, setTodos] = useState([])

    const addTodo = (title) => {
        setTodos(prev => [
            {
            id: Date.now().toString(),
            title
            },
            ...prev
        ])
    }

    const removeTodo = id => {
        setTodos(prev => prev.filter(todo => todo.id !== id))
    }

  return (
    <View>
      <StatusBar style="auto" />
      <Navbar title='Todo App' />
        <View style={styles.container}>
            <AddTodo onSubmit={addTodo} />

            <FlatList
                keyExtractor={item => item.id.toString()}
                data={todos}
                renderItem={({item}) => (
                    <Todo todo={item} onRemove={removeTodo} />
                )}
            />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
      paddingVertical: 20,
  }
});
