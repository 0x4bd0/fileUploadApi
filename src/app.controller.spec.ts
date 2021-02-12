
import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { readFileSync } from 'fs';
import { join } from 'path';
import * as request from 'supertest';
import { AppModule } from './app.module';

describe('file upload test e2e', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    app = moduleRef.createNestApplication();
    await app.init();
  });

  it('should allow for file uploads', async () => {
    return request(app.getHttpServer())
      .post('/files/one')
      .attach('file', './test.txt')
      .field('name', 'test')
      .expect(201);
  });

  afterAll(async () => {
    await app.close();
  });
});