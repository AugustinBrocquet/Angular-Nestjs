export class CreateUserDto {
    readonly username: string;
    readonly email: string;
    readonly password: string;
    readonly role: number;
    // tslint:disable-next-line:variable-name
    readonly reset_password_token?: string;
    // tslint:disable-next-line:variable-name
    readonly reset_password_expires?: Date;
    // tslint:disable-next-line:variable-name
    readonly created_at: Date;
    // tslint:disable-next-line:variable-name
    readonly updated_at?: Date;
}
