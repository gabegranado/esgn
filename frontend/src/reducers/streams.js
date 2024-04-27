export default (streams=[], action) => {
    switch (action.type) {
        case 'GET_ALL_STREAMS':
            console.log('GET_ALL_STREAMS');
            return action.payload;
        default:
            return streams;
    }
}