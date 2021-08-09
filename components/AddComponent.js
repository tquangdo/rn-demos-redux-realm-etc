import { AntDesign } from "@expo/vector-icons";
import React, { Component } from 'react';
import { TextInput, TouchableHighlight, View } from 'react-native';

export default class AddComponent extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            staNewTaskName: ''
        });
    }
    render() {
        const { staNewTaskName } = this.state
        const { propsOnClickAdd } = this.props
        return (
            <View style={{
                backgroundColor: 'tomato',
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center',
                height: 64
            }}>
                <TextInput style={{
                    height: 40,
                    width: 200,
                    margin: 10,
                    padding: 10,
                    borderColor: 'white',
                    borderWidth: 1,
                    color: 'white'
                }}
                    keyboardType='default'
                    placeholderTextColor='white'
                    placeholder='Enter task name'
                    autoCapitalize='none'
                    onChangeText={
                        (arg_text) => {
                            this.setState({ staNewTaskName: arg_text });
                        }
                    }
                />
                <TouchableHighlight
                    style={{ marginRight: 10 }}
                    underlayColor='blue'
                    onPress={() => {
                        if (!staNewTaskName.trim()) {
                            return;
                        }
                        //Call click event => use "Container"
                        propsOnClickAdd(staNewTaskName)
                    }}
                >
                    <AntDesign name="pluscircleo" size={30} color="white" />
                </TouchableHighlight>

            </View>);
    }
}