import { api } from "./api";

export default {
    ENDPOINT: '/mealCategory',

    async list(filters) {
        return await api.get(this.ENDPOINT, { params: filters });
    },
};
