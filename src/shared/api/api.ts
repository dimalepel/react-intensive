import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {BASE_URL} from "./baseUrl.ts";

export const baseQuery = fetchBaseQuery({
    baseUrl: BASE_URL,
});