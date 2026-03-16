import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategories = async(): Promise<Category[]> => {
    try {
        if (!process.env.NEXT_PUBLIC_API_URL) return [];

        const res = await fetch(URL);

        if (!res.ok) return [];

        return await res.json();
    } catch (error) {
        return [];
    }
}

export default getCategories;