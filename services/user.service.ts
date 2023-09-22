import UserDto from '../dtos/user.dto';
import { UserRequest } from '../request/user.request';
import InMemoryData from '../utils/InMemoryData';

class UserService {
  
  static create(email: string, name: string, password: string): UserDto | undefined | null {
    const countUsers = InMemoryData.users.length;
    const user = {id: countUsers + 1, name, email, password};
    InMemoryData.users.push(user);
    return user;

  }

  static getMe(userId: number): UserDto | undefined {
    return InMemoryData.users.find((u) => u.id === userId);

  }

  static getUserByEmailAndPassword(email: string, password: string): UserRequest | undefined {
    return InMemoryData.users.find((u) => u.email === email && u.password === password) as UserRequest;
  }

  static getUserByEmail(email: string): UserRequest | undefined {
    return InMemoryData.users.find((u) => u.email === email) as UserRequest;
  }

 

}

export default UserService;