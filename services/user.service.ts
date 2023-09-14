import UserDto from '../dtos/user.dto';
import InMemoryData from '../utils/InMemoryData';

class UserService {
  
  static create(email: string, name: string): UserDto | undefined {
    const countUsers = InMemoryData.users.length;
    const user = {id: countUsers + 1, name, email};
    InMemoryData.users.push(user);
    return user;

  }

  static getMe(userId: number): UserDto | undefined {
    return InMemoryData.users.find((u) => u.id === userId);

  }

 

}

export default UserService;