import axios from 'axios';

export const flaskApi = ({ path, method, params }: any) =>
    axios({
        url: `http://localhost:5000${path}`,
        method,
        params
    })
        .then(response => response.data);

export const flaskApiGet = (path: string) =>
    flaskApi({ path, method: 'GET' });

export const flaskApiDelete = (path: string) =>
    flaskApi({ path, method: 'DELETE' });
