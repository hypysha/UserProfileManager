const generateUniqueId = () => {
  return Math.floor(Math.random() * Date.now());
};

class UserProfileManager {
  constructor() {
    this.users = [];
  }

  addUser(userInfo) {
    const id = generateUniqueId();
    const user = {
      id,
      name: userInfo.name,
      email: userInfo.email
    };
    this.users.push(user);
  }

  removeUser(userId) {
    this.users = this.users.filter(user => user.id !== userId);
  }

  updateUser(userId, newInfo) {
    this.users = this.users.map(user => {
      if (user.id === userId) {
        return {
          ...user,
          name: newInfo.name || user.name,
          email: newInfo.email || user.email
        };
      }
      return user;
    });
  }

  findUserByName(name) {
    return this.users.filter(user => user.name.toLowerCase().includes(name.toLowerCase()));
  }

  getAllUsers() {
    return this.users;
  }
}

const profileManager = new UserProfileManager();

profileManager.addUser({ name: "Alice", email: "alice@example.com" });
profileManager.addUser({ name: "Bob", email: "bob@example.com" });

console.log(profileManager.getAllUsers());

profileManager.updateUser(1, { name: "Alicia" }); 
profileManager.removeUser(2); 

console.log(profileManager.findUserByName("Ali")); 