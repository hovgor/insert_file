import { INestApplication } from '@nestjs/common';
import { json, urlencoded } from 'express';

export function setConfig(app: INestApplication): void {
  const GLOBAL_PREFIX = 'api';

  app.setGlobalPrefix(GLOBAL_PREFIX);
  app.use(json({ limit: '50mb' }));
  app.use(urlencoded({ limit: '50mb', extended: true }));

  app.enableCors({
    origin: 'http://localhost:3030' || process.env.ALLOWED_ORIGINS,
  });
}
