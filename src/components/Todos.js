import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, ScrollView, FlatList, Pressable, Modal, Image } from 'react-native';
import Todo from './Todo';

const Todos = (props) => {

    const [tasks, setTasks] = useState('');
    const [showTask, setShowTask] = useState([]);

    const [modalOn, setModalOn] = useState(false);

    const inputHandler = (task) => {
        setTasks(task);
    };

    const addTaskHandler = () => {
        setShowTask((currentTask) => [
            ...currentTask,
            // tasks,
            { text: tasks, id: Math.random().toString() },
        ])
        setTasks('');
        setModalOn(false)
    };

    const removeTasks = (id) => {
        setShowTask(currentTask => currentTask.filter((task) => task.id !== id));
    };


    return (
        <>
            <Button title='add new task' color="#5e0acc" onPress={() => setModalOn(true)} />
            <View style={styles.allTasks}>
                <Text style={{ margin: 3,color: 'white'}}>{showTask.length < 1 ? "No task here  to show 😋" : "Today Task ..... 😅"}</Text>

                    {
                        showTask.length <1? <Image source={require('../../assets/img/task0.png')}
                    style={styles.taskImg} />:
                    <FlatList
                    data={showTask}
                    renderItem={(itemData) => {
                        return (
                            <View style={styles.taskItems}>
                                {/* <Text style={{ color: "#fff" }}>{itemData.item.text}</Text> */}
                                <Todo todoText={itemData.item.text} onDelete={removeTasks} id={itemData.item.id} />
                            </View>
                        );
                    }}
                    keyExtractor={(item, index) => {
                        return item.id;
                    }}
                />
                    }
                  
            </View>
            <View style={styles.container}>
                <Modal visible={modalOn} animationType='slide'>
                    {
                        modalOn && (
                            <View style={styles.inputDev}>
                                <Image source={require('../../assets/img/target0.png')}
                                    style={styles.targetImg} />
                                <TextInput style={styles.textInput} placeholder='Write your today task 📝' onChangeText={inputHandler} value={tasks} />
                                <View style={styles.btnDiv}>
                                    <View style={styles.btn}><Button color="#150638" title='Add Task' onPress={addTaskHandler} /></View>
                                    <View style={styles.btn}><Button title='Cancel' color="#38061b" style={styles.btn} onPress={() => (setModalOn(false))} /></View>

                                </View>
                            </View>
                        )
                    }
                </Modal>
            </View>
        </>
    )
}
export default Todos;

// Style sheet
const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        paddingHorizontal: 3,
        flex: 1,
    },
    inputDev: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: "#311b6b"
    },
    taskImg: {
        width: 363, height: 363, 
        marginTop: 13,
        alignItems: 'center',
        marginLeft: 26,
    },
    targetImg: {
        width: 163, height: 163, 
        marginBottom: 13,
        borderWidth: 1,
        padding: 1,
        boderColor: "#ccc",
    },
    textInput: {
        // borderWidth: 1,
        // borderColor: "#5e0acc",
        backgroundColor: "#fff",
        borderRadius: 3,
        width: '100%',
        marginRight: 8,
        // padding: 6,
        paddingHorizontal:6,
        paddingVertical: 16,
        outline:'none'
    },
    btnDiv: {
        flexDirection: 'row',
        marginTop: 16,
    },
    btn: {
        //btn can't change so view own btn
        width: '30%',
        color: "#5e0acc",
        marginHorizontal: 8,
    },
    allTasks: {
        flex: 4,
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    taskItems: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: "#5e0acc",
        color: "#fff",
    }
});
