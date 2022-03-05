export class User {
  static id: number = 0;
  private name!: string;
  private email!: string;
  private userId!: number;

  constructor(name: string, email: string) {
    this.email = email;
    this.name = name;
    this.userId = User.id;
    User.id++;
  }
  getUser() {
    return {
      id: this.userId,
      email: this.email,
      name: this.name,
    };
  }
}
