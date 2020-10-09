export type ImageType = {
    attachment_url_large: string;
    attachment_url_medium: string;
    attachment_url_mini: string;
    attachment_url_original: string;
    attachment_url_small: string;
};
export type PriceType = {
    amount: number;
    currency: string;
}
export type ProductType = {
    id: number;
    name: string;
    accurate_name: string;
    variant_images: Array<ImageType>;
    price: PriceType
};

export type Products = Array<ProductType>;

export type Category = {
    id: number;
    name: string;
    products: Products;
};
