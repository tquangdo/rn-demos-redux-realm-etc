import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export default class TaskItemComponent extends Component {
    render() {
        const { taskId, completed, taskName, propsOnToggle } = this.props // taskId, completed, taskName la 1 key nen KO can "containers/TaskItemContainer.js > mapStateToProps > propsXXX"
        return (
            <View style={{ flex: 1 }}>
                <TouchableOpacity onPress={() => {
                    propsOnToggle(taskId)
                }}>
                    <Text
                        style={{ margin: 20, fontSize: 18, backgroundColor: (completed === true) ? 'white' : 'yellow' }}
                        numberOfLines={3}>
                        {taskName}
                    </Text>
                </TouchableOpacity>
            </View>);
    }
};