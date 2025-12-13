export abstract class BcryptRepository {
  /**
   * @description Encrypt password
   * @date 2025-12-13 07:32:22
   * @author Jogan Ortiz Muñoz
   *
   * @abstract
   * @param {string} password
   * @param {?(string | number)} [saltOrRounds]
   * @returns {Promise<string>}
   */
  abstract hash(password: string, saltOrRounds?: string | number): Promise<string>;

  /**
   * @description Compare if equal password
   * @date 2025-12-13 07:32:54
   * @author Jogan Ortiz Muñoz
   *
   * @abstract
   * @param {string} password
   * @param {string} hash
   * @returns {Promise<boolean>}
   */
  abstract compare(password: string, hash: string): Promise<boolean>;

  /**
   * @description Generate salt by encrypt password
   * @date 2025-12-13 07:33:18
   * @author Jogan Ortiz Muñoz
   *
   * @abstract
   * @returns {string}
   */
  abstract generateSalt(): string;
}
