export class UserFindAllProjection {
  /**
   * Creates an instance of UserFindProjection.
   * @date 2025-12-10 07:52:22
   * @author Jogan Ortiz Muñoz
   *
   * @constructor
   * @param {string} id
   * @param {string} fullName
   * @param {string} email
   * @param {string} status
   */
  constructor(
    readonly id: string,
    readonly fullName: string,
    readonly email: string,
    readonly status: string,
  ) {}
}
