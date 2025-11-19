import { config } from 'dotenv';
import { ZodSafeParseResult } from 'zod';

import { Env } from 'src/shared/domain/interfaces';
import { EnvRepository } from 'src/shared/domain/repositories';
import { schemaEnv } from '../schemas';

export class EnvPersistence implements EnvRepository {
  private readonly _env: Env;
  readonly _urlDataSource: string;

  /**
   * Creates an instance of EnvPersistence.
   * @date 2025-11-17 21:13:55
   * @author Jogan Ortiz Muñoz
   *
   * @constructor
   */
  constructor() {
    const resultEnv = config({ path: `.env` });
    if (resultEnv?.error instanceof Error) throw new Error(`Could not find .env file`);
    const parsedConfig: ZodSafeParseResult<Env> = schemaEnv.safeParse(resultEnv.parsed);
    if (parsedConfig.error && !parsedConfig.data) throw new Error(`${parsedConfig.error._zod.def.map((e) => e.message).join(', ')}`);
    this._env = parsedConfig.data;
    this._urlDataSource = this.dataUrlDB();
  }

  /**
   * @description Get environment variable by key
   * @date 2025-11-17 21:14:00
   * @author Jogan Ortiz Muñoz
   *
   * @template {keyof Env} T
   * @param {T} key
   * @returns {Env[T]}
   */
  get<T extends keyof Env>(key: T): Env[T] {
    this.validateKey(key);
    const value = this._env[key];
    return value;
  }

  /**
   * @description Get system variable by key
   * @date 2025-11-17 21:14:08
   * @author Jogan Ortiz Muñoz
   *
   * @template {string} T
   * @param {string} key
   * @returns {T}
   */
  getSystem<T extends string>(key: string): T {
    this.validateKey(key);
    return process.env[key] as T;
  }

  /**
   * @description Get url data source
   * @date 2025-11-18 16:17:13
   * @author Jogan Ortiz Muñoz
   *
   * @returns {string}
   */
  getUrlDataSource(): string {
    return this._urlDataSource;
  }

  private validateKey<T extends string>(value: T): boolean {
    if (value === undefined || value === null) throw new Error(`Environment variable ${JSON.stringify(value)} is not defined`);
    return true;
  }

  private dataUrlDB(): string {
    const dbType = this._env['DB_TYPE'];
    const host = this._env['DB_HOST'];
    const port = this._env['DB_PORT'];
    const name = this._env['DB_NAME'];
    const username = this._env['DB_USERNAME'];
    const password = this._env['DB_PASSWORD'];

    let typeConect: string = `${dbType}://${username}:${password}@${host}:${port}/${name}`;
    if (dbType === 'sqlserver') {
      typeConect = `${dbType}://${host}:${port};database=${name};user=${username};password=${password};encrypt=true;trustServerCertificate=true`;
    }

    process.env.DATABASE_URL = typeConect;
    return typeConect;
  }
}
