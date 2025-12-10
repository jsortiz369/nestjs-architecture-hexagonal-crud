import { DataFindAll } from 'src/shared/system/domain/system.interface';
import { UserExistProjection, UserFindOneByIdProjection } from '../projections';
import { UserFindAllQuery } from '../../application';

export abstract class UserQueryRepository {
  /**
   * @description Get all user by filters
   * @date 2025-12-10 07:56:10
   * @author Jogan Ortiz Muñoz
   *
   * @abstract
   * @returns {Promise<DataFindAll<UserFindOneByIdProjection[]>>}
   */
  abstract findAll(query: UserFindAllQuery): Promise<DataFindAll<UserFindOneByIdProjection[]>>;

  /**
   * @description Get User By Id
   * @date 2025-12-10 06:45:03
   * @author Jogan Ortiz Muñoz
   *
   * @abstract
   * @param {string} id
   * @returns {Promise<UserFindOneByIdProjection | null>}
   */
  abstract findOneById(id: string): Promise<UserFindOneByIdProjection | null>;

  /**
   * @description validate exist email
   * @date 2025-12-10 06:45:07
   * @author Jogan Ortiz Muñoz
   *
   * @abstract
   * @param {string} email
   * @param {string} [id]
   * @returns {Promise<boolean>}
   */
  abstract existByEmail(email: string, id?: string): Promise<UserExistProjection>;
}
