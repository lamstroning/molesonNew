export class StockModel {
  name: string;
  price: number;
  _id: string;
  constructor(item: any = clearStock) {
   this.name = item.name;
   this.price = item.price;
   this._id = item._id;
  }
}

const clearStock = {
  name: '',
  price: 0,
  _id: '',
};
