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

products.push(new Product('Термопринтер Котик Жовтий', false, 1099, 699, 100, 1, 'Термопринтер Жовтий', 'https://content.rozetka.com.ua/goods/images/big/412348772.jpg'))
products.push(new Product('Термопринтер Котик Блакитний', false, 1099, 799, 100, 1, 'Термопринтер Блакитний', 'https://content.rozetka.com.ua/goods/images/big/414277845.jpg'))
products.push(new Product('Термопринтер Котик Рожевий', true, 1099, 799, 100, 1, 'Термопринтер Рожевий', 'https://content2.rozetka.com.ua/goods/images/big/414277383.jpg'))
products.push(new Product('Термопапір звичайний 1шт', true, 120, 59, 100, 1, 'Термопапір звичайний', 'https://content.rozetka.com.ua/goods/images/big/414357309.jpg'))
products.push(new Product('Термопапір клейкий 1шт', true, 139, 69, 100, 1, 'Термопапір клейкий', 'https://content.rozetka.com.ua/goods/images/big/414357309.jpg'))
products.push(new Product('Термопапір колір 1 уп.', true, 210, 159, 100, 1, 'Термопапір кольоровий', 'https://content.rozetka.com.ua/goods/images/big/413967367.jpg'))



export default products;