import z from 'zod';
import { schemaEnv } from '../schema';

export type Env = z.infer<typeof schemaEnv>;
