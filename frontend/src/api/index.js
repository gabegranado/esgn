import axios from 'axios';

export const getStreams = () => axios.get('http://localhost:3000/streams');
