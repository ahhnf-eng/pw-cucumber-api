import { Given, When, Then } from '@cucumber/cucumber';
import { APIResponse, expect } from '@playwright/test';
import { login } from '../../src/api/login.api';
import { account } from '../../src/data/accounts';

let response: APIResponse;
let selectedAccount: any;


Given('I have {string} account', function (accountType: string) {
  selectedAccount = (account as any)[accountType];
  if (!selectedAccount) throw new Error(`Account type ${accountType} not found`);
});

When('I send a login request', async function () {
  response = await login(selectedAccount);
});

Then('the response status should be {int}', function (statusCode: number) { 
  expect(response.status()).toEqual(statusCode);
})

Then('the response should contain a token', async function () {
  const body = await response.json();
  expect(body).toHaveProperty('token');
});