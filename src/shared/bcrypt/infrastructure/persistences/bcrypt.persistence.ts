import bcrypt from 'bcrypt';

import { BcryptRepository } from '../../domain/bcrypt.repository';

export class BcryptPersistence implements BcryptRepository {
  /**
   * @description Encrypt password
   * @date 2025-12-13 07:33:48
   * @author Jogan Ortiz Muñoz
   *
   * @param {string} password
   * @param {?(string | number)} [saltOrRounds]
   * @returns {Promise<string>}
   */
  hash(password: string, saltOrRounds?: string | number): Promise<string> {
    saltOrRounds = !saltOrRounds ? bcrypt.genSaltSync(10) : saltOrRounds;
    return bcrypt.hash(password, saltOrRounds);
  }

  /**
   * @description Compare if equal password
   * @date 2025-12-13 07:34:03
   * @author Jogan Ortiz Muñoz
   *
   * @param {string} password
   * @param {string} hash
   * @returns {Promise<boolean>}
   */
  compare(password: string, hash: string): Promise<boolean> {
    return bcrypt.compare(password, hash);
  }

  /**
   * @description Generate salt by encrypt password
   * @date 2025-12-13 07:34:12
   * @author Jogan Ortiz Muñoz
   *
   * @returns {string}
   */
  generateSalt(): string {
    return bcrypt.genSaltSync(10);
  }
}
