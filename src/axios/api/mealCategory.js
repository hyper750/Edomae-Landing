import { api } from "./api";

export default {
    ENDPOINT: '/mealCategory',

    async get(filters) {
        return await api.get(this.ENDPOINT, { params: filters });
    },
};
