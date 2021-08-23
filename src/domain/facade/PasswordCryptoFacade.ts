import bcrypt from 'bcrypt';

export class PasswordCryptoFacade {
  public static async crypt(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
  }

  public static async check(cryptPassword: string, password: string): Promise<boolean> {
    return await bcrypt.compare(password, cryptPassword);
  }
}
