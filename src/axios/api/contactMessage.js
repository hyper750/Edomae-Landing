import { api } from "./api";

export default {
    ENDPOINT: '/contactMessage',

    async post(contactMessage) {
        const { name, email, message, googleToken } = contactMessage;

        const formData = new FormData();
        formData.append('g-recaptcha-response', googleToken);
        formData.append('name', name);
        formData.append('email', email);
        formData.append('message', message);

        return await api.post(this.ENDPOINT, formData)
    },
};
