import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Field, reduxForm } from 'redux-form';
// ~~~ BE ~~~
// import _onSubmit from '../server/submit';
import validate from '../server/validate';
import asyncValidate from '../server/asyncValidate';
import { CONTACT_FORM } from '../FormNames';
import RemoteSubmitButton from '../containers/RemoteSubmitButton';
import normalizePhoneNumber from '../normalizePhoneNumber';

// ~~~ FE: C1 ~~~
// const validate = arg_values => {
//     const errors = {};
//     if (!arg_values.username) {
//         errors.username = 'Required'
//     } else if (arg_values.username.length > 20) {
//         errors.username = 'username must be less than or equal 20 characters'
//     }
//     if (!arg_values.email) {
//         errors.email = 'Required'
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(arg_values.email)) {
//         errors.email = 'Invalid email address'
//     }
//     if (!arg_values.age) {
//         errors.age = 'Required'
//     } else if (isNaN(Number(arg_values.age))) {
//         errors.age = 'Age must be a number'
//     } else if (Number(arg_values.age) < 18) {
//         errors.age = 'You must be at least 18 years old'
//     }
//     return errors
// }
// const warn = arg_values => {
//     const warnings = {};
//     if (arg_values.age < 19) {
//         warnings.age = 'You seem a bit young...'
//     }
//     return warnings
// }

// ~~~ FE: C2 ~~~
// //Validation
// const required = value => value ? undefined : 'Required';
// const maxLength15 = value => value && value.length > 15 ? `Must be 15 characters or less` : undefined;
// const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined;
// const minValue = min => value =>
//     value && value < min ? `Must be at least ${min}` : undefined;
// const minValue18 = minValue(18);
// const isValidEmail = value =>
//     value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email address' : undefined;
// //Warning
// const over70YearsOld = value =>
//     value && value > 70 ? 'You might be too old for using this' : undefined;
// const isYahooMail = value =>
//     value && /.+@yahoo\.com/.test(value) ? 'Really? You still use yahoo mail ?' : undefined;

const normalizeUpper = value => value && value.toUpperCase();
const normalizeLower = value => value && value.toLowerCase();
// ~~~ FE ~~~
const _onSubmit = arg_values => {
    alert(`Validation success. Values = ${JSON.stringify(arg_values)}`);
}
const renderField = ({ label, keyboardType, meta: { touched, error, warning, asyncValidating }, input: { onChange, ...restInput } }) => {
    return (<View style={{ flexDirection: 'column', height: 70, alignItems: 'flex-start' }}>
        <View style={{ flexDirection: 'row', height: 50, alignItems: 'center' }}>
            <Text style={{ fontSize: 12, fontWeight: 'bold', width: 80 }}>{label}</Text>
            <TextInput style={{ borderColor: 'steelblue', borderWidth: 1, height: 37, width: 220, padding: 5 }}
                keyboardType={keyboardType} onChangeText={onChange} {...restInput}
                autoCapitalize='none'
            >
            </TextInput>
        </View>
        {touched && ((error && <Text style={{ color: 'red' }}>{error}</Text>) ||
            (warning && <Text style={{ color: 'orange' }}>{warning}</Text>) ||
            (asyncValidating && <Text style={{ color: 'orange' }}>Validating...</Text>))}
    </View>);
};
const ContactComponent = props => {
    const { handleSubmit, submitting, reset } = props; // variable name phai la "handleSubmit"
    console.log(`submitting = ${submitting}`)
    return (
        <View style={{ flex: 1, flexDirection: 'column', margin: 40, justifyContent: 'flex-start', }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', width: 200, textAlign: 'center', margin: 10 }}>Redux-form example</Text>
            <Text>username: must be hoang, hoangnd, or ndhoang</Text>
            <Text>email: must be sunlight4d@gmail.com</Text>
            <Field name="username" keyboardType="default" label="Username(lower): " component={renderField}
                // ~~~ FE: C2 ~~~
                // validate={[required, maxLength15]}
                normalize={normalizeLower}
            />
            <Field name="fullname" keyboardType="default" label="Fullname(upper): " component={renderField}
                normalize={normalizeUpper}
            />
            <Field name="phoneNumber" keyboardType="numeric" label="Phone(999-999-9999): " component={renderField}
                normalize={normalizePhoneNumber}
            />
            <Field name="email" keyboardType="email-address" label="Email: " component={renderField}
            // ~~~ FE: C2 ~~~
            // validate={isValidEmail}
            // warn={isYahooMail}
            />
            <Field name="age" keyboardType="numeric" label="Age: " component={renderField}
            // ~~~ FE: C2 ~~~
            // validate={[required, number, minValue18]}
            // warn={over70YearsOld}
            />
            {/* <TouchableOpacity onPress={handleSubmit(_onSubmit)} style={{ margin: 10, alignItems: 'center' }} disabled={submitting}>
                <Text style={{
                    backgroundColor: 'steelblue', color: 'white', fontSize: 16,
                    height: 37, width: 200, textAlign: 'center', padding: 10
                }}>Submit</Text>
            </TouchableOpacity> */}
            <RemoteSubmitButton />
            <TouchableOpacity onPress={reset} style={{ margin: 10, alignItems: 'center' }} disabled={submitting}>
                <Text style={{
                    backgroundColor: 'powderblue', color: 'black', fontSize: 16,
                    height: 37, width: 200, textAlign: 'center', padding: 10
                }}>Clear</Text>
            </TouchableOpacity>
        </View>
    );
}
const ContactForm = reduxForm({
    form: CONTACT_FORM, // variable name phai la "form"
    // ~~~ FE: C1 ~~~
    // validate, // variable name phai la "validate"
    // warn, // variable name phai la "warn"
    validate,
    asyncValidate,
    asyncBlurFields: ['username', 'email'],
    onSubmit: _onSubmit // variable name phai la "onSubmit": must either pass handleSubmit() or onSubmit as a prop
})(ContactComponent);
export default ContactForm