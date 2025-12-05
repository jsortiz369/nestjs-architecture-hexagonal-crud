export class UserListItemProjection {
  constructor(
    readonly id: string,
    readonly fullName: string,
    readonly email: string,
    readonly status: string,
  ) {}
}
