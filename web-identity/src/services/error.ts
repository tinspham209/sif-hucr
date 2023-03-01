import { Toastify } from '.';

const MESSAGES = {
  invalidEmail: 'Email is invalid',
  invalidPhone: 'Phone number is invalid',
  invalidSSN: 'SSN number is invalid format',
  unknown: 'An error has occurred',
  required: 'This field is required',
  accountNotExist: 'Username does not exist',
  accountExist: 'An account with this email already exists.',
  userExistError: 'User is already existed.',
  incorrectAccount: 'Incorrect username or password',
  incorrectCredentials: 'Incorrect login credentials. Please try again.',
  incorrectPassword: 'Incorrect password.', // pragma: allowlist secret
  onlyLetter: 'Only English alphabets are allowed for this field.',
  SSNMessage: 'SSN already exists, please enter again.',
  alphanumeric: 'Alphanumeric characters',
  businessIdLength: '3-25 characters',
  noSpaces: 'No spaces',
  noSpecialCharacters: 'No special characters',
  invalidRoutingNumber: 'Invalid routing number',
  onlyLetterAndNumber: 'Only alphabets or numeric are allowed for this field.',
  invalidInformation: 'The provided information is invalid. Please try again.',
  notTrimmable: 'Space character is not allowed at the beginning and end.',
  pleaseUseEnglishAlphabetForInput: 'Please use English alphabet for input.',
  inValidUsername: 'Please use only letters, numbers (0-9), underscore (_), dot (.), hyphen (-).',
};

const handler = (error: AuthError | Error) => {
  console.error(error);
  if (error?.message.includes('Attempt limit exceeded, please try after some time.')) {
    return Toastify.error(
      'The code you entered is incorrect more than 5 times. Please try after few minutes or resend email to receive the new code.'
    );
  }
  if (error?.message.includes('Username/client id combination not found.')) {
    return Toastify.error('Username does not exist');
  } else {
    Toastify.error(error?.message || MESSAGES.unknown);
  }
};
export const TYPES = {
  NotAuthorizedException: 'NotAuthorizedException',
  UserNotFoundException: 'UserNotFoundException',
  UserNotConfirmedException: 'UserNotConfirmedException',
  CodeMismatchException: 'CodeMismatchException',
  ExpiredCodeException: 'ExpiredCodeException',
  LimitExceededException: 'LimitExceededException',
  InvalidPasswordException: 'InvalidPasswordException', // pragma: allowlist secret
  UsernameExistsException: 'UsernameExistsException',
  UserLambdaValidationException: 'UserLambdaValidationException',
  badRequest: 'BAD_REQUEST',
};

export default {
  handler,
  MESSAGES,
  TYPES,
};
