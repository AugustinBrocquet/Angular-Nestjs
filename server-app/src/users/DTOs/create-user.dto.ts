export class CreateUserDto {
    readonly username: string;
    readonly email: string;
    readonly password: string;
    readonly role: number;
    readonly reset_password_token?: string;
    readonly reset_password_expires?: Date;
    readonly created_at: Date;
    readonly updated_at?: Date;
}
