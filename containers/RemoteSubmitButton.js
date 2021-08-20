import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { submit } from 'redux-form';
import { CONTACT_FORM } from '../FormNames';


const RemoteSubmitButton = ({ dispatch }) => {
    return (
        <TouchableOpacity onPress={
            () => dispatch(submit(CONTACT_FORM))
        }
            style={{ margin: 10, alignItems: 'center' }} >
            <Text style={{
                backgroundColor: 'steelblue', color: 'white', fontSize: 16,
                height: 37, width: 200, textAlign: 'center', padding: 10
            }}>Submit</Text>
        </TouchableOpacity>
    );
};

export default connect()(RemoteSubmitButton);