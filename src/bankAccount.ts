class BankAccount {
    private balance: number;

    constructor(initialBalance: number = 0) {
        this.balance = initialBalance;
    }

    getBalance(): number {
        return this.balance;
    }

    depositMoney(amount: number): boolean {
        if (amount <= 0) return false;
        this.balance += amount;
        return true;
    }
}

export default BankAccount;