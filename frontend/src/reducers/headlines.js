export default (headlines=[], action) => {
    switch (action.type) {
        case 'GET_ALL_HEADLINES':
            console.log('GET_ALL_HEADLINES');
            return action.payload;
        default:
            return headlines;
    }
}