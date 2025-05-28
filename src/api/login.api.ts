import { request } from '@playwright/test';

export async function login(email: string, password: string) {
  const context = await request.newContext();
  return context.post('https://example.com/api/login', {
    data: { email, password }
  });
}
