import { User } from './user.js';
import { showMessage } from './utils.js';


const user1 = new User("Wasay", "wasay@example.com");

showMessage(`Hello! ${user1.name}`);



user1.login();
