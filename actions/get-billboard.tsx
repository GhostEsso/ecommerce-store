import { Billboard } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboard = async(id: string): Promise<Billboard> => {
    if (!process.env.NEXT_PUBLIC_API_URL || !id) return {} as Billboard;

    const res = await fetch(`${URL}/${id}`);

    if (!res.ok) return {} as Billboard;

    return res.json();
}

export default getBillboard;