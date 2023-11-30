import { Categories } from "./categories";
import { Makers } from "./makers";
import { Tags } from "./tags";

export interface Products {

    id_product: number;
    product_name: string;
    img_url: string;
    price: number;
    stock: number;
    description: string;
    category: Categories;
    tags: Tags[];
    maker: Makers;

}
