import { api } from "./api";

export default {
    ENDPOINT: '/contactMessage',

    async post(contactMessage) {
        const { name, email, message } = contactMessage;

        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('message', message);

        return await api.post(this.ENDPOINT, formData)
    },
};
