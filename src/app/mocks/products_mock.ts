import { CategoryViewComponent } from "../components/category-view/category-view.component";
import { Products } from "../models/products";

export const PRODUCTS: Products[] = [
//AURICULARES
    {

        id_product: 1,
        product_name: "Auriculares XIAOMI Redmi Buds 3 PRO",
        img_url: "https://i.postimg.cc/DzyzSkJM/bud3pro.jpg",
        price: 40000,
        code_bar: 1001,
        code_prov: "XIAOMI",
        stock: 10,
        description: "Anulación de ruido inteligente de 35 dB* | Conectividad con dos dispositivos | Carga inalámbrica | Duración de la batería de 28 horas",
        category: {id: 1, 
                   category_name: "AURICULARES"},
        tags: [
                    {
                        tag_id: 1, 
                        tag_name: "Bluethoot" 
                    },
                    {
                        tag_id: 2, 
                        tag_name: "7hs" 
                    }
                ],
        maker: {id: 1, 
                maker_name: "XIAOMI"},
        supplier_id: 1

    },
    {
        id_product: 2,
        product_name: "Auriculares XIAOMI Redmi Buds 4",
        img_url: "https://i.postimg.cc/vBC824PJ/buds4.png",
        price: 30000,
        code_bar: 1002,
        code_prov: "XIAOMI",
        stock: 10,
        description: "El diafragma dinámico de 12 mm es aún más grande que antes. Gracias al experto ajuste de Xiaomi Acoustic Lab, ofrece graves mejorados y una acústica optimizada, características clave para proporcionar una experiencia de escucha agradable a usuarios de todo el mundo",
        category: {id: 1, 
            category_name: "AURICULARES"},
        tags: [
             {
                 tag_id: 1, 
                 tag_name: "Bluethoot" 
             },
             {
                 tag_id: 2, 
                 tag_name: "7hs" 
             }
         ],
         maker: {id: 1, 
                maker_name: "XIAOMI"},
        supplier_id: 1
    },
    {
        id_product: 3,
        product_name: "Auriculares XIAOMI Redmi Buds 4 Lite",
        img_url: "https://i.postimg.cc/d0HVdHGt/buds4lite.png",
        price: 19000,
        code_bar: 1003,
        code_prov: "XIAOMI",
        stock: 10,
        description: "Con un solo toque, los Redmi Buds 4 Lite ofrecen un emparejamiento Bluetooth rápido y sin esfuerzo con tus dispositivos Android*. Incluso puedes comprobar dónde los dejaste por última vez",
        category: {id: 1, 
            category_name: "AURICULARES"},
        tags: [
             {
                 tag_id: 1, 
                 tag_name: "Bluethoot" 
             },
             {
                 tag_id: 2, 
                 tag_name: "7hs" 
             }
         ],
         maker: {id: 1, 
                maker_name: "XIAOMI"},
        supplier_id: 1
    },
    {
        id_product: 4,
        product_name: "Auriculares Lenovo XG01",
        img_url: "https://i.postimg.cc/qRNMGsGc/lenovoxg01.png",
        price: 20000,
        code_bar: 1004,
        code_prov: "LENOVO",
        stock: 10,
        description: "Audífonos Gaming E-Sports Lenovo XG01 con ultra-baja latencia, sonido HiFi, diseño innovador, protección al agua IPX5 y dos espectaculares colores acompañados de luces led",
        category: {id: 1, 
            category_name: "AURICULARES"},
        tags: [
             {
                 tag_id: 1, 
                 tag_name: "Bluethoot" 
             },
             {
                 tag_id: 2, 
                 tag_name: "7hs" 
             }
         ],
         maker: {id: 2, 
                maker_name: "LENOVO"},
        supplier_id: 1
    },
    {
        id_product: 5,
        product_name: "Auriculares Lenovo XT96",
        img_url: "https://i.postimg.cc/G3sm8jtd/lenovoxt96.png",
        price: 14000,
        code_bar: 1005,
        code_prov: "LENOVO",
        stock: 10,
        description: "Sonido estéreo HiFi, calidad decodificación acústica, transmisión inalámbrica estable para un mejor sonido continuo",
        category: {id: 1, 
            category_name: "AURICULARES"},
        tags: [
             {
                 tag_id: 1, 
                 tag_name: "Bluethoot" 
             },
             {
                 tag_id: 2, 
                 tag_name: "7hs" 
             }
         ],
        maker: {id: 2, 
                maker_name: "LENOVO"},
        supplier_id: 1
    },
    {
        id_product: 6,
        product_name: "Auriculares Lenovo LP40 PRO",
        img_url: "https://i.postimg.cc/vT9YJGkc/lenovolp40pro.png",
        price: 11000,
        code_bar: 1006,
        code_prov: "LENOVO",
        stock: 10,
        description: "A diferencia de otras conectividades, este dispositivo está fabricado con tecnología TWS (True Wireless Stereo)",
        category: {id: 1, 
            category_name: "AURICULARES"},
        tags: [
             {
                 tag_id: 1, 
                 tag_name: "Bluethoot" 
             },
             {
                 tag_id: 2, 
                 tag_name: "7hs" 
             }
         ],
        maker: {id: 2, 
                maker_name: "LENOVO"},
        supplier_id: 1
    },
    {
        id_product: 7,
        product_name: "Auriculares Bluethoot Pop It",
        img_url: "https://i.postimg.cc/zXZXnRHW/popit.png",
        price: 9000,
        code_bar: 1007,
        code_prov: "POP IT",
        stock: 10,
        description: "Sonido estéreo HiFi, calidad decodificación acústica, transmisión inalámbrica estable para un mejor sonido continuo",
        category: {id: 1, 
            category_name: "AURICULARES"},
        tags: [
             {
                 tag_id: 1, 
                 tag_name: "Bluethoot" 
             },
             {
                 tag_id: 2, 
                 tag_name: "7hs" 
             }
         ],
         maker: {id: 3, 
                maker_name: "POP IT"},
        supplier_id: 1
    }   ,
    {
        id_product: 8,
        product_name: "Samsung Galaxy A34 5G",
        img_url: "https://i.postimg.cc/G2zMQDqQ/galaxy-A345g.jpg",
        price: 200000,
        code_bar: 1008,
        code_prov: "SAMSUNG",
        stock: 10,
        description: "Descubrí infinitas posibilidades para tus fotos con las 3 cámaras principales de tu equipo. Poné a prueba tu creatividad y jugá con la iluminación, diferentes planos y efectos para obtener grandes resultados",
        category: {id: 2, 
            category_name: "CELULARES"},
        tags: [
             {
                 tag_id: 3, 
                 tag_name: "5G" 
             },
             {
                 tag_id: 4, 
                 tag_name: "32GB" 
             }
         ],
        maker: {id: 4, 
                maker_name: "SAMSUNG"},
        supplier_id: 1
    },
    {
        id_product: 9,
        product_name: "Samsung Galaxy A54 5G",
        img_url: "https://i.postimg.cc/zGW0Q6x3/galaxy-A545g.png",
        price: 300000,
        code_bar: 1009,
        code_prov: "SAMSUNG",
        stock: 10,
        description: "Con su potente procesador y memoria RAM de 8 GB tu equipo alcanzará un alto rendimiento con gran velocidad de transmisión de contenidos y ejecutará múltiples aplicaciones a la vez sin demoras",
        category: {id: 2, 
            category_name: "CELULARES"},
        tags: [
             {
                 tag_id: 3, 
                 tag_name: "5G" 
             },
             {
                 tag_id: 4, 
                 tag_name: "32GB" 
             }
         ],
        maker: {id: 4, 
                maker_name: "SAMSUNG"},
        supplier_id: 1
    },
    {
        id_product: 10,
        product_name: "Samsung Galaxy S21 FE 5G",
        img_url: "https://i.postimg.cc/vH4Prc9r/galaxy-S21fe5g.png",
        price: 380000,
        code_bar: 1010,
        code_prov: "SAMSUNG",
        stock: 10,
        description: "El Galaxy S21 FE 5G tiene todo lo que te gusta en 6,4 pulgadas, un tamaño diseñado para conectarte con amigos, explorar nuevas pasiones, realizar una transmisión en vivo y disfrutar durante horas de tus programas favoritos",
        category: {id: 2, 
            category_name: "CELULARES"},
        tags: [
             {
                 tag_id: 3, 
                 tag_name: "5G" 
             },
             {
                 tag_id: 4, 
                 tag_name: "32GB" 
             }
         ],
        maker: {id: 4, 
                maker_name: "SAMSUNG"},
        supplier_id: 1
    },
    {
        id_product: 11,
        product_name: "Iphone 14 PRO / PRO MAX",
        img_url: "https://i.postimg.cc/vTN0RsRx/iphone14pro-Ymax.png",
        price: 0,
        code_bar: 1011,
        code_prov: "APPLE",
        stock: 10,
        description: "Lo mejor de lo mejor en IPHONE",
        category: {id: 2, 
            category_name: "CELULARES"},
        tags: [
             {
                 tag_id: 3, 
                 tag_name: "5G" 
             },
             {
                 tag_id: 4, 
                 tag_name: "32GB" 
             }
         ],
         maker: {id: 5, 
                maker_name: "APPLE"},
        supplier_id: 1
    },
    {
        id_product: 12,
        product_name: "XIAOMI Redmi Note 11 PRO 5G",
        img_url: "https://i.postimg.cc/pdHqMCSC/redmi-Note11-Pro5-Gb.png",
        price: 350000,
        code_bar: 1012,
        code_prov: "XIAOMI",
        stock: 10,
        description: "Máxima seguridad para que solo vos puedas acceder al equipo",
        category: {id: 2, 
            category_name: "CELULARES"},
        tags: [
             {
                 tag_id: 3, 
                 tag_name: "5G" 
             },
             {
                 tag_id: 4, 
                 tag_name: "32GB" 
             }
         ],
         maker: {id: 1, 
                maker_name: "XIAOMI"},
        supplier_id: 1
    },
    {
        id_product: 13,
        product_name: "XIAOMI Redmi Note 12 PRO 5G",
        img_url: "https://i.postimg.cc/Zqxjb3tS/xiaomi-Redmi-Note12-Pro5g.jpg",
        price: 320000,
        code_bar: 1013,
        code_prov: "XIAOMI",
        stock: 10,
        description: "Mirá tus series y películas favoritas con la mejor definición a través de su pantalla AMOLED de 6.67",
        category: {id: 2, 
            category_name: "CELULARES"},
        tags: [
             {
                 tag_id: 3, 
                 tag_name: "5G" 
             },
             {
                 tag_id: 4, 
                 tag_name: "32GB" 
             }
         ],
         maker: {id: 1, 
                maker_name: "XIAOMI"},
        supplier_id: 1
    },
    {
        id_product: 14,
        product_name: "XIAOMI Mi 12 Lite 5G",
        img_url: "https://i.postimg.cc/fT18BDj6/xiaomi-Mi12-Lite5g.png",
        price: 420000,
        code_bar: 1014,
        code_prov: "XIAOMI",
        stock: 10,
        description: "¡Desenchufate! Con la súper batería de 4300 mAh tendrás energía por mucho más tiempo para jugar, ver series o trabajar sin necesidad de realizar recargas",
        category: {id: 2, 
            category_name: "CELULARES"},
        tags: [
             {
                 tag_id: 3, 
                 tag_name: "5G" 
             },
             {
                 tag_id: 4, 
                 tag_name: "32GB" 
             }
         ],
         maker: {id: 1, 
                maker_name: "XIAOMI"},
        supplier_id: 1
    },
    {
        id_product: 15,
        product_name: "XIAOMI Pocophone Poco M5s",
        img_url: "https://i.postimg.cc/7PssJgCP/xiaomi-Pocophone-Poco-M5s.png",
        price: 220000,
        code_bar: 1014,
        code_prov: "XIAOMI",
        stock: 10,
        description: "Una pantalla AMOLED DotDisplay líder en su clase que cuenta con una claridad excepcional, colores impresionantes y un brillo increíble que garantizan una mejor experiencia visual",
        category: {id: 2, 
            category_name: "CELULARES"},
        tags: [
             {
                 tag_id: 3, 
                 tag_name: "5G" 
             },
             {
                 tag_id: 4, 
                 tag_name: "32GB" 
             }
         ],
         maker: {id: 1, 
                maker_name: "XIAOMI"},
        supplier_id: 1
    },
    {
        id_product: 16,
        product_name: "Hidrogel",
        img_url: "https://i.postimg.cc/4ydWF30T/hidrogel.png",
        price: 3000,
        code_bar: 1015,
        code_prov: "HIDROGEL",
        stock: 10,
        description: "Protector de pantalla celular con hidrogel",
        category: {id: 2, 
            category_name: "CELULARES"},
        tags: [
             {
                 tag_id: 5, 
                 tag_name: "Vidrio templado" 
             }
         ],
         maker: {id: 0, 
                maker_name: "GENERICO"},
        supplier_id: 1
    }
    



] 