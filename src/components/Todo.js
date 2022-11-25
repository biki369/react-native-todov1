import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const Todo = (props) => {
  /* 
    bind() method in react native
    on the function which we get thought that
    all function like removeTask() .props

    blind() basically allows us
    pre-configure a function fro future execution 
  
    // Pressable component for style 
    //for android == android_ripple={{ color: "#fff"}}
    //for iso == style={({pressed})=>pressed && style.className}
    
    //The Modal component is a basic way to present content above an enclosing view.
  
  */
  return (
    <View>
      <Pressable onPress={props.onDelete.bind(this, props.id)}
        android_ripple={styles.pressBtn}
        style={({pressed})=>pressed && styles.pressBtn}
      >
        <Text style={{ color: "#fff", padding: 13, }}>{props.todoText}</Text>
      </Pressable>
    </View>

  )
}

export default Todo

const styles = StyleSheet.create({
  pressBtn: {
    color: '#210644',
    opacity: 0.6,
  }
})