import { Size } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;

const getSizes = async(): Promise<Size[]> => {
    try {
        if (!process.env.NEXT_PUBLIC_API_URL) return [];

        const res = await fetch(URL);

        if (!res.ok) return [];

        return await res.json();
    } catch (error) {
        return [];
    }
}

export default getSizes;