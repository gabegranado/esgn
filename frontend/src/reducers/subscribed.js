export default (subscribed=[], action) => {
    switch (action.type) {
        case 'GET_ALL_SUBSCRIBED':
            console.log('GET_ALL_SUBSCRIBED');
            return action.payload;
        default:
            return subscribed;
    }
}