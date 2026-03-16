import { Product } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const getProduct = async(id: string): Promise<Product> => {
    if (!process.env.NEXT_PUBLIC_API_URL || !id) return {} as Product;

    const res = await fetch(`${URL}/${id}`);

    if (!res.ok) return {} as Product;

    return res.json();
}

export default getProduct;