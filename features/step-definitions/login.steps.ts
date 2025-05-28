import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { login } from '../../src/api/login.api';

let response: any;

Given('I have valid login credentials', function () {
  // dummy step – bisa setup env/variable di sini
});

When('I send a POST request to the login endpoint', async function () {
  response = await login('user@example.com', 'password123');
});

Then('I should receive a 200 status code', function () {
  expect(response.status()).toBe(200);
});

Then('the response should contain a token', async function () {
  const body = await response.json();
  expect(body.token).toBeDefined();
});
