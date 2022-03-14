import { api } from "./api";

export default {
    ENDPOINT: '/meal',

    async list(filters) {
        return await api.get(this.ENDPOINT, { params: filters });
    },
};
