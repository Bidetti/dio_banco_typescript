import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(peopleAccount)
peopleAccount.deposit(1500)
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(1000)
console.log(companyAccount)
const companyAccount2: CompanyAccount = new CompanyAccount('Santander', 20)
companyAccount2.deposit(4000)
console.log(companyAccount2)
companyAccount2.getLoan(1000)
console.log(companyAccount2)
peopleAccount.setBonus()
peopleAccount.deposit(1000)
console.log(peopleAccount)