import axios from "axios";
import { BASE_URL } from "@/settings";

export const api = axios.create({
    baseURL: BASE_URL
})
