import { NotFoundException } from '@nestjs/common';

export class UserNotFoundException extends NotFoundException {
  /**
   * Creates an instance of UserNotFoundException.
   * @date 2025-11-19 17:10:28
   * @author Jogan Ortiz Muñoz
   *
   * @constructor
   */
  constructor() {
    super('User not found');
  }
}
