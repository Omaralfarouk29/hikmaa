import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8080/api/subject';

export const subjectList = () => axios.get(REST_API_BASE_URL);

export const createSubject = (subject) => axios.post(REST_API_BASE_URL, subject);

export const getSubject = (subjectId) => axios.get(REST_API_BASE_URL+'/'+subjectId);

export const updateSubject = (subjectId, subject) => axios.put(REST_API_BASE_URL+'/'+subjectId, subject);

export const deleteSubject = (subjectId) => axios.delete(REST_API_BASE_URL+'/'+subjectId);