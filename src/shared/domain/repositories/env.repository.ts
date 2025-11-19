import { Env } from '../interfaces';

export abstract class EnvRepository {
  /**
   * @description Get environment variable by key
   * @date 2025-11-17 20:21:21
   * @author Jogan Ortiz Muñoz
   *
   * @abstract
   * @template {keyof Env} T
   * @param {T} key
   * @returns {Env[T]}
   */
  abstract get<T extends keyof Env>(key: T): Env[T];

  /**
   * @description Get system variable by key
   * @date 2025-11-17 20:21:30
   * @author Jogan Ortiz Muñoz
   *
   * @abstract
   * @template {string} T
   * @param {string} key
   * @returns {T}
   */
  abstract getSystem<T extends string>(key: string): T;

  /**
   * @description Get url data source
   * @date 2025-11-18 16:17:24
   * @author Jogan Ortiz Muñoz
   *
   * @abstract
   * @returns {string}
   */
  abstract getUrlDataSource(): string;
}
