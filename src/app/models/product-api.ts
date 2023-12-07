import { Categories } from "./categories";
import { Makers } from "./makers";
import { Tags } from "./tags";

export interface ProductsApi {

    id: number;
    product_name: string;
    img_url: string;
    price: number;
    stock: number;
    description: string;
    category: Categories;
    tags: Tags[];
    color1_name: string;
    color1_hex: string;
    color2_name: string;
    color2_hex: string;
    color3_name: string;
    color3_hex: string;
    color4_name: string;
    color4_hex: string;
    color5_name: string;
    color5_hex: string;
    maker: Makers;

}
