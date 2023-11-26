import http from "node:http";
import { AllUsersService } from "./src/services/allUsers.service";
import { CreateUserService } from "./src/services/createUser.service";
import { GetOneUserService } from "./src/services/getOneUser.service";

const server = http.createServer(async (request, response) => {
  if (request.url === "/") {
    return response.end(
      JSON.stringify({
        message: "Você não precisa de === FRAMEWORK === para criar uma API",
      })
    );
  }
  // USERS routes
  if (request.url === "/users") {
    if (request.method === "GET") {
      const allUsersService = new AllUsersService();
      return (
        response.end(JSON.stringify(await allUsersService.execute())) ??
        response.end("Nenhum usuário encontrado")
      );
    }

    if (request.method === "POST") {
      request.on("data", async (data) => {
        const { name, email, password } = JSON.parse(data.toString());
        const createUserService = new CreateUserService();
        return response.end(
          JSON.stringify(
            await createUserService.execute({ name, email, password })
          )
        );
      });
    }
  }

  if (request.url?.startsWith("/users/") && request.method === "GET") {
        const [, , id] = request.url.split("/");
        const getOneUser = new GetOneUserService();
        return (
          response.end(JSON.stringify(await getOneUser.execute(id))) ??
          response.end("Nenhum usuário encontrado")
        );
  }
});

server.listen(8888, () => {
  console.log("Server is running on port 4000");
});
