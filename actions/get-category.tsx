import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategory = async(id: string): Promise<Category | null> => {
    try {
        if (!process.env.NEXT_PUBLIC_API_URL || !id) return null;

        const res = await fetch(`${URL}/${id}`);

        if (!res.ok) return null;

        return await res.json();
    } catch (error) {
        return null;
    }
}

export default getCategory;