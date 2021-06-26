class EndpointError extends Error {
  readonly name: string;
  readonly statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);

    Object.setPrototypeOf(this, EndpointError.prototype);

    this.name = "Endpoint Error";
    this.statusCode = statusCode;
  }
}

export { EndpointError };
