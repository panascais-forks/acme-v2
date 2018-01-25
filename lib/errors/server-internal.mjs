import StandardError from './standard';

export default class ServerInternalError extends StandardError {
  // static type = 'urn:ietf:params:acme:error:serverInternal';
  // static description = 'The server experienced an internal error';
}

ServerInternalError.type = 'urn:ietf:params:acme:error:serverInternal';
ServerInternalError.description = 'The server experienced an internal error';
