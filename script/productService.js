let productService = {
    allProducts: [
        {
            "productId": 1,
            "productSku": "SHA-313",
            "name": "BGS Clarifying Shampoo",
            "description": "Get your curls and locs clean with the BGS shampoo!",
            "price": 12.99,
            "imageName": "https://via.placeholder.com/350x250.jpg"
        },
        {
            "productId": 2,
            "productSku": "CON-829",
            "name": "BGS Moisturizing Conditioner",
            "description": "Keep your curls and locs conditioned with the BGS conditioner!",
            "price": 15.99,
            "imageName": "https://via.placeholder.com/350x250.jpg"
        },
        {
            "productId": 3,
            "productSku": "LIN-264",
            "name": "BGS Leave-In Conditioner",
            "description": "Keep the moisture going after the wash with our leave-in conditoner!",
            "price": 10.99,
            "imageName": "https://via.placeholder.com/350x250.jpg"
        },
        {
            "productId": 4,
            "productSku": "GEL-018",
            "name": "BGS Hair and Loc Gel",
            "description": "Lock your curls and locs in place with the BGS hair and loc gel!",
            "price": 8.79,
            "imageName": "https://via.placeholder.com/350x250.jpg"
        },
        {
            "productId": 5,
            "productSku": "DCO-012",
            "name": "BGS Deep Conditioner",
            "description": "Get twice the moisture and twice the love with the BGS deep conditioner!",
            "price": 7.99,
            "imageName": "https://via.placeholder.com/350x250.jpg"
        },
        {
            "productId": 6,
            "productSku": "MES-823",
            "name": "BGS Hair Messager",
            "description": "Help to stimulate your scalp and promote hair growth with the BGS hair messager",
            "price": 9.99,
            "imageName": "https://via.placeholder.com/350x250.jpg"
        },
        {
            "productId": 7,
            "productSku": "PIC-595",
            "name": "BGS Hair Pick",
            "description": "Fluff out your hair and get that volume with the BGS hair pick",
            "price": 4.95,
            "imageName": "https://via.placeholder.com/350x250.jpg"
        },
        {
            "productId": 8,
            "productSku": "BON-026",
            "name": "BGS Hair Bonnet",
            "description": "Keep your hair protectd at night with the BGS hair bonnet",
            "price": 8.69,
            "imageName": "https://via.placeholder.com/350x250.jpg"
        },

    ],

    getProducts() {
        return this.allProducts;
    },
};