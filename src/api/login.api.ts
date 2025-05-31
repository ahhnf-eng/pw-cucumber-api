import { APIRequestContext, request, APIResponse } from '@playwright/test';
import dotenv from 'dotenv';
import { get } from 'http';

dotenv.config();
export const login = async (account: any): Promise<APIResponse> => {
  const endpoint = `${process.env.BASE_URL}/api/login`;
  const context: APIRequestContext = await request.newContext();

  return context.post(endpoint, {
    data: account,
  });
};