export class HomeModel {
  id: number;
  heading: string;
  message: string;
  constructor(id: number, heading: string, message: string) {
    this.id = id;
    this.heading = heading;
    this.message = message;
  }
}
export class donationOption {
  id: number;
  amount: number;
  constructor(id: number, amount: number) {
    this.id = id;
    this.amount = amount;
  }
}
