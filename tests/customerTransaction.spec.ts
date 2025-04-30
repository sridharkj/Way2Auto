import { test, expect, BrowserContext, Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { AccountHomePage } from '../pages/AccountHomePage';

let context: BrowserContext;
let page: Page;
let loginPage: LoginPage;
let accountHomePage: AccountHomePage;

const CUSTOMER_NAME = 'Hermoine Granger';

test.beforeAll(async ({ browser }) => {
  context = await browser.newContext();
  page = await context.newPage();
  loginPage = new LoginPage(page);
  accountHomePage = new AccountHomePage(page);

  await loginPage.navigateToLogin();
  await loginPage.loginAsCustomer(CUSTOMER_NAME);
});

test.afterAll(async () => {
  await context.close();
});

test.describe('Banking Transactions', () => {
  test('Deposit Money', async () => {
    const initialBalance = await accountHomePage.getAccountBalance();
    await accountHomePage.deposit(500);
    const newBalance = await accountHomePage.getAccountBalance();
    expect(newBalance).toBe(initialBalance + 500);
  });

  test('Withdraw Money', async () => {
    const initialBalance = await accountHomePage.getAccountBalance();
    await accountHomePage.withdraw(300);
    const newBalance = await accountHomePage.getAccountBalance();
    expect(newBalance).toBe(initialBalance - 300);
  });
});