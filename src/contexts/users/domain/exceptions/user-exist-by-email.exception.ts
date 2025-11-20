import { BadRequestException } from '@nestjs/common';

export class UserExistByEmailException extends BadRequestException {
  /**
   * Creates an instance of UserExistByEmailException.
   * @date 2025-11-19 17:13:16
   * @author Jogan Ortiz Muñoz
   *
   * @constructor
   */
  constructor() {
    super('User exist by email');
  }
}
