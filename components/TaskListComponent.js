import React, { Component } from 'react';
import { FlatList } from 'react-native';
import TaskItemContainer from '../containers/TaskItemContainer';

export default class TaskListComponent extends Component {
    render() {
        return (<FlatList
            data={this.props.propsTasks} // la 1 array nen phai can "containers/TaskListContainer.js > mapStateToProps > propsTasks"
            renderItem={({ item }) => {
                return (
                    <TaskItemContainer {...item}></TaskItemContainer>
                );
            }}
            keyExtractor={(item, index) => index.toString()}
        >
        </FlatList>);
    }
};