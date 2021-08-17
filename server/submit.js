import { SubmissionError } from 'redux-form';
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const _onSubmit = async values => {
    await sleep(1000);
    if (!['hoang', 'hoangnd', 'ndhoang'].includes(values.username)) {
        throw new SubmissionError({
            username: 'User does not exist',
            _error: 'Login failed!',
        });
    } else if (values.email !== 'sunlight4d@gmail.com') {
        throw new SubmissionError({
            email: 'Wrong email',
            _error: 'Login failed!',
        });
    } else {
        alert(`Validation success. Values = ${JSON.stringify(values)}`);
    }
};
export default _onSubmit;