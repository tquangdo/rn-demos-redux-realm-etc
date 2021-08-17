const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const asyncValidate = async values => {
    await sleep(1000);
    if (!['hoang', 'hoangnd', 'ndhoang'].includes(values.username)) {
        throw { username: 'User does not exist' };
    }
    if (values.email !== 'sunlight4d@gmail.com') {
        throw { email: 'Wrong email' };
    }
};
export default asyncValidate;