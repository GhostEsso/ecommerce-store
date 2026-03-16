import { Size } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;

const getSizes = async(): Promise<Size[]> => {
    if (!process.env.NEXT_PUBLIC_API_URL) return [];

    const res = await fetch(URL);

    if (!res.ok) return [];

    return res.json();
}

export default getSizes;