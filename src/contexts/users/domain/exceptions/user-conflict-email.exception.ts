import { BadRequestException } from '@nestjs/common';

export class UserConflictEmailException extends BadRequestException {
  /**
   * Creates an instance of UserConflictEmailException.
   * @date 2025-11-19 17:13:16
   * @author Jogan Ortiz Muñoz
   *
   * @constructor
   */
  constructor() {
    super('User exist by email');
  }
}
