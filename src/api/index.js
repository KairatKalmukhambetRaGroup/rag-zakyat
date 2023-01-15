import axios from "axios";

const API = axios.create({baseURL: process.env.REACT_APP_SERVER, validateStatus: function (status) { return true }});

export const addVisitor = (data) => API.post('/visitor', data);

export const updateRate = (id,data) => API.post(`/conversion/${id}`, data);