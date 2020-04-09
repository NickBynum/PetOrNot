export class NotFound extends Error {
  constructor(message = "Not Found") {
    super(message);
    this.status = 404;
  }
}
export class Forbidden extends Error {
  constructor(message = "Access Forbidden") {
    super(message);
    this.status = 403;
  }
}
export class UnAuthorized extends Error {
  constructor(message = "Unauthorized") {
    super(message);
    this.status = 401;
  }
}
export class BadRequest extends Error {
  constructor(message = "Bad Request") {
    super(message);
    this.status = 400;
  }
}
export class Unexpected extends Error {
  constructor(message = "Unexpected Error") {
    super(message);
    this.status = 500;
  }
}
