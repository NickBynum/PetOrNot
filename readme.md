# Node Server Setup

This template is designed to help kickstart a node project. The bulk of the structure has been setup but requires a few pieces of configuration.

The first thing you will need to provide is in the `.env` file. You will need to supply the port, and mongoDb connectionstring. These environment variables are used throughout the template, so be sure to add them in when moving into production as well.

**_.env_**

```
PORT=
CONNECTION_STRING=
```

### MVC - Controllers

This template will automatically register all of the controllers found in the controllers folder of the server. This opinionated workflow should help provide a structure on how to build your api. Generally speaking every controller method should start with a `try catch block` and utilize the default error handler setup in Startup.js This means if a request ever fails the controller should call the next function with the error provided.

### MVC - Services

Services are responsible for implementing and enforcing your business rules. Be sure to use them wisely and do not put your business logic in controllers. Services should be usable by both controllers and sockets and potentally other services. Never directly access the `DbContext` outside of a service.

### MVC - (Models, Collections & DbContext)

Models are defined as mongoose schemas and then imported into a central location called the DbContext. All access to the database should be limited to the DbContext. `Collections.js` is a file purely designed to avoid the common problem of magic strings. This means when you register your models and have dependencies or relationships between one or more models you should import from Collections so you know the naming is always the same.
