import React, { Component } from 'react';
import { Platform, View } from 'react-native';
import AddContainer from '../containers/AddContainer';
import TaskListContainer from '../containers/TaskListContainer';


export default class TaskManagerComponent extends Component {
    render() {
        return (
            <View style={{ flex: 1, marginTop: Platform.OS === 'ios' ? 64 : 0 }}>
                <AddContainer />
                <TaskListContainer />
            </View>
        );
    }
};