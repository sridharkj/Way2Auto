import { Page, expect } from '@playwright/test';

export class AccountHomePage {
  constructor(private page: Page) {}

  async getAccountNumber() {
    return await this.page.locator('div[ng-hide="noAccount"] > strong').nth(0).textContent();
  }

  async getAccountBalance(): Promise<number> {
    const balanceText = await this.page.locator('div[ng-hide="noAccount"] > strong').nth(1).textContent();
    return parseFloat(balanceText || '0');
  }

  async deposit(amount: number) {
    await this.page.locator('button[ng-click="deposit()"]').click();
    await this.page.locator('input[ng-model="amount"]').fill(amount.toString());
    await this.page.locator('button[type="submit"]').click();
    const message = await this.page.locator('span[ng-show="message"]').textContent();
    expect(message).toContain('Deposit Successful');
  }

  async withdraw(amount: number) {
    await this.page.locator('button[ng-click="withdrawl()"]').click();
    await this.page.locator('input[ng-model="amount"]').fill(amount.toString());
    await this.page.locator('button[type="submit"]').click();
    const message = await this.page.locator('span[ng-show="message"]').textContent();
    expect(message).toContain('Transaction successful');
  }
}