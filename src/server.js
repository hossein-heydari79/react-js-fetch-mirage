import { createServer, Model } from "miragejs";

export function makeServer({ environment = "test" } = {}) {
  let server = createServer({
    environment,

    models: {
      user: Model,
    },

    seeds(server) {
      server.create("user", {
        id: 1,
        first_name: "ali",
        lastName: "komijani",
        email: "akpa125@gmail.com",
        phone: "09396854785",
        role: "Teacher",
      });
      server.create("user", {
        id: 2,
        first_name: "alireza",
        lastName: "mosavi",
        email: "s.alireza.m8@gmail.com",
        phone: "09385479824",
        role: "Teacher assistant",
      });
    },

    routes() {
      this.namespace = "api";

      this.get("/users", (schema) => {
        return schema.users.all();
      });
      this.post("/users", (schema , request) => {
        let attrs = JSON.parse(request.requestBody)
        return schema.users.create(attrs)
      });
      this.get("/users/:id", (schema, request) => {
        let id = request.params.id;
        return schema.users.find(id);
      });
    },
  });

  return server;
}
