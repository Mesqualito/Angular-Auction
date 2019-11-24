import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public description: string,
    public categories: Array<string>) {}
}

export class ProductService {
  getProducts(): Array<Product> {
    return products.map(p => new Product(p.id, p.title, p.price, p.rating, p.description, p.categories));
  }

  getProductById(productId: number): Product {
    return products.find(p => p.id === productId);
  }
}

var products = [
  {
    'id': 0,
    'title': 'First Product',
    'price': 24.99,
    'rating': 4.3,
    'description': 'This is a short description of product one. It is one of the productest products ever produced. ' +
      'There will never be another product like this except of all other products, which are evenly productest products. ' +
      'It\'s really outstanding, how productest this product is!',
    'categories': ['electronics', 'hardware']
  },
  {
    'id': 1,
    'title': 'Second Product',
    'price': 64.99,
    'rating': 3.5,
    'description': 'This is a short description of product two. The second will always be first, if the first fail.',
    'categories': ['books']
  },
  {
    'id': 2,
    'title': 'Third Product',
    'price': 74.99,
    'rating': 4.2,
    'description': 'This is a short description of product three. Buy it here, cheap and original.',
    'categories': ['electronics']
  },
  {
    'id': 3,
    'title': 'Fourth Product',
    'price': 84.99,
    'rating': 3.9,
    'description': 'This is a short description of product four. As always, you\'re absolutely right to buy this one -' +
      'you\'ll never regret.',
    'categories': ['hardware']
  },
  {
    'id': 4,
    'title': 'Fifth Product',
    'price': 94.99,
    'rating': 5.0,
    'description': 'This is a short description of product five. Smart, colorful, useful and the one and only thing ' +
      'which is named \'Fifth Product\'!',
    'categories': ['electronics','hardware']
  },
  {
    'id': 5,
    'title': 'Sixth Product',
    'price': 54.99,
    'rating': 4.6,
    'description': 'This is a short description of product six. Maybe the last to display, the last in the array ' +
      'but nevertheless: buy or die!',
    'categories': ['books']
  }
];
