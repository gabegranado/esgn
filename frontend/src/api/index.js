import axios from 'axios';

export const getStreams = () => axios.get('http://localhost:4000/streams');
