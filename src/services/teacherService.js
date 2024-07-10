import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8080/api/teacher';

export const teacherList = () => axios.get(REST_API_BASE_URL);

export const createTeacher = (teacher) => axios.post(REST_API_BASE_URL, teacher);

export const getTeacher = (teacherId) => axios.get(REST_API_BASE_URL+'/'+teacherId);

export const updateTeacher = (teacherId, teacher) => axios.put(REST_API_BASE_URL+'/'+teacherId, teacher);

export const deleteTeacher = (teacherId) => axios.delete(REST_API_BASE_URL+'/'+teacherId);