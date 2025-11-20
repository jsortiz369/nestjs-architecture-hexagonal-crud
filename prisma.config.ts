import { defineConfig } from 'prisma/config';
import { EnvPersistence } from './src/shared/infrastructure/persistences/env.persistence';

const _env = new EnvPersistence();
const typedb = _env.get('DB_TYPE');
const typeConect = _env.getUrlDataSource();
process.env.DATABASE_URL = typeConect;

export default defineConfig({
  schema: `prisma/${typedb}/schema.prisma`,
  migrations: {
    path: `prisma/${typedb}/migrations`,
  },
  engine: 'classic',
  datasource: {
    url: typeConect,
  },
});
