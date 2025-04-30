import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async navigateToLogin() {
    await this.page.goto('#/login');
  }

  async loginAsCustomer(customerName: string) {
    await this.page.locator('text=Customer Login').click();
    await this.page.locator('#userSelect').selectOption({ label: customerName });
    await this.page.locator('button[type="submit"]').click();
  }
}