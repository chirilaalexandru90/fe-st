export class Product {
    id: number;
    name: string;
    description: string;
    defaultImage: string;
    images: string[];
    price: number;
    discount: number;

    constructor(
        id: number,
        name: string,
        description: string,
        defaultImage: string,
        images: string[],
        price: number,
        discount: number,
    ) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.defaultImage = defaultImage;
        this.images = images;
        this.price = price;
        this.discount = discount;
    }
};