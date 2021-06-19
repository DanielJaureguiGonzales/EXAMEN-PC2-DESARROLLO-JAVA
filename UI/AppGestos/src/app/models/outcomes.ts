export class Outcomes {

  amount: number;
  createdAt: Date;
  detail: String;
  outcomeId: String;
  updatedAt: Date;

  constructor(){

    this.amount = 0
    this.createdAt = new Date()
    this.detail = ""
    this.outcomeId = ""
    this.updatedAt = new Date()
  }

}
