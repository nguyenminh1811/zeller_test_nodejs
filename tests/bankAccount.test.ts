import BankAccount from "../src/bankAccount";

describe('BankAccount', () => {
  let account: BankAccount;

  beforeEach(() => {
    account = new BankAccount(0);
  });

  test('depositMoney should return false and not update balance for zero amount', () => {
    const result = account.depositMoney(0);
    expect(result).toBe(false);
    expect(account.getBalance()).toBe(0);
  });

  test('depositMoney should return false and not update balance for negative amount', () => {
    const result = account.depositMoney(-50);
    expect(result).toBe(false);
    expect(account.getBalance()).toBe(0);
  });

  test('depositMoney should return true and update balance for positive amount', () => {
    const result = account.depositMoney(100);
    expect(result).toBe(true);
    expect(account.getBalance()).toBe(100);
  });
});