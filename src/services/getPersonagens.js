import api from "../services/api";

const getPersons =async () => {
    const response = await api.get("character");
    return response;
}

export {getPersons};


