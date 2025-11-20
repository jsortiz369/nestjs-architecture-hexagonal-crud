import { UuidRepository } from '../../domain/repositories';
import { REGEX } from '../constants/regex.constant';

export class UuidPersistence implements UuidRepository {
  /**
   * @description Generate uuid
   * @date 2025-11-19 10:09:28
   * @author Jogan Ortiz Muñoz
   *
   * @returns {string}
   */
  generateUuid(): string {
    return crypto.randomUUID();
  }

  /**
   * @description Validate uuid
   * @date 2025-11-19 10:09:36
   * @author Jogan Ortiz Muñoz
   *
   * @param {string} uuid
   * @returns {boolean}
   */
  validateUuid(uuid: string): boolean {
    if (!REGEX.UUID_V4.test(uuid)) return false;
    return true;
  }
}
