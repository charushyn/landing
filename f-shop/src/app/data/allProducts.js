class Product {
    constructor(name, isDiscount, previousPrice, currentPrice, amount, count, id, urlPhoto){
        this.name = name;
        this.isDiscount = isDiscount;
        this.previousPrice = previousPrice;
        this.currentPrice = currentPrice;
        this.amount = amount;
        this.count = count;
        this.id = id;
        this.urlPhoto = urlPhoto;

    }
}

const products = []

products.push(new Product('Принтер Жовтий', false, 1099, 699, 100, 1, 1, 'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?q=80&w=2739&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'))
products.push(new Product('Принтер Blue', false, 1099, 799, 100, 1, 2, 'https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'))
products.push(new Product('Paper 3x default', true, 1099, 799, 100, 1, 3, 'https://images.unsplash.com/photo-1485550409059-9afb054cada4?q=80&w=2598&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'))



export default products;