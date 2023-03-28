export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true
  private bonus: boolean = false

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  // new type of account with 10% bonus in deposit
  public readonly setBonus = (): void => {
    this.bonus = true
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }

  deposit = (valor: number): void => {
    if(this.validateStatus()){
      let valorFinal;
      if (this.bonus) {
        valorFinal = valor * 1.1
      } else {
        valorFinal = valor
      }
      this.balance += valorFinal
      console.log('Voce depositou: ' + valorFinal)
    }
  }

  withdraw = (valor: number): void => {
    if (this.validateStatus() && valor <= this.balance) {
      this.balance -= valor
      console.log('Voce sacou: ' + valor)
    }
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  public readonly validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
