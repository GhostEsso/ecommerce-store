import { Billboard } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboard = async(id: string): Promise<Billboard | null> => {
    try {
        if (!process.env.NEXT_PUBLIC_API_URL || !id) return null;

        const res = await fetch(`${URL}/${id}`);

        if (!res.ok) return null;

        return await res.json();
    } catch (error) {
        return null;
    }
}

export default getBillboard;