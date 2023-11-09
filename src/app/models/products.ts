import { Categories } from "./categories";
import { Makers } from "./makers";
import { Tags } from "./tags";

export interface Products {

    id_product: number;
    product_name: string;
    img_url: string;
    price: number;
    code_bar: number;
    code_prov: string;
    stock: number;
    description: string;
    category: Categories;
    tags: Tags[];
    maker: Makers;
    supplier_id: number;

}
