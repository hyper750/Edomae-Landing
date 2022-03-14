import { api } from "./api";

export default {
    ENDPOINT: '/meal',

    async get(filters) {
        return await api.get(this.ENDPOINT, { params: filters });
    },
};
