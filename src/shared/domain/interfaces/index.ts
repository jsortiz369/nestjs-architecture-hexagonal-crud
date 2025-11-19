import z from 'zod';
import { schemaEnv } from 'src/shared/infrastructure/schemes';

export type Env = z.infer<typeof schemaEnv>;
