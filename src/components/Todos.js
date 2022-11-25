import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, ScrollView, FlatList, Pressable, Modal } from 'react-native';
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
    };

    const removeTasks = (id) => {
        setShowTask(currentTask => currentTask.filter((task) => task.id !== id));
    };


    return (
        <View style={styles.container}>
            <Modal>
                <View style={styles.inputDev}>
                    <TextInput style={styles.textInput} placeholder='Write your today task 📝' onChangeText={inputHandler} value={tasks} />
                    <Button title='Add Task' style={styles.btn} onPress={addTaskHandler} />
                </View>
            </Modal>

            <View style={styles.allTasks}>
                <Text style={{ margin: 3 }}>{showTask.length < 1 ? "No task here  to show 😋" : "Today Task ..... 😅"}</Text>

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
            </View>
        </View>

    )
}

export default Todos;


const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        paddingHorizontal: 16,
        flex: 1,
    },
    inputDev: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#5e0acc",
        borderRadius: 6,
        width: '70%',
        marginRight: 8,
        padding: 6,
    },
    btn: {
        backgroundColor: "#5e0acc",
    },
    allTasks: {
        flex: 4,
    },
    taskItems: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: "#5e0acc",
        color: "#fff",
    }
});
