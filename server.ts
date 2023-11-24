import http from 'node:http';
import { AllUsersService } from './src/services/allUsers.service';
import { CreateUserService } from './src/services/createUser.service';

const server = http.createServer((request, response) => {
  if (request.url === '/') {
    return response.end(JSON.stringify({ message: 'Você não precisa de === FRAMEWORK === para criar uma API' }));
  }
  // USERS routes
  if (request.url === '/users') {
    if (request.method === 'GET') {
      const allUsersService = new AllUsersService();
      return response.end(JSON.stringify(allUsersService.execute())) ?? response.end('Nenhum usuário encontrado');
    }

    if (request.method === 'POST') {
      request.on('data', (data) => {
        const { name, email, password } = JSON.parse(data.toString());
        const createUserService = new CreateUserService();
        return response.end(JSON.stringify(createUserService.execute({ name, email, password })));
    });
    }
  }
});

server.listen(8888, () => { console.log('Server is running on port 4000')})