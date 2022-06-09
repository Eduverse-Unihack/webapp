export class User {
  id: string;
  name: string;

  constructor(user: any) {
    this.id = user.id;
    this.name = user.name;
  }
}

export interface SignUpInfo extends LoginInfo {
  name: string;
}

export interface LoginInfo {
  email: string;
  password: string;
}
