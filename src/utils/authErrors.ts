export function getFriendlyAuthError(code: string): string {
  switch (code) {
    case "auth/invalid-email":
      return "Invalid email address";
    case "auth/email-already-in-use":
      return "This email is already in use";
    case "auth/user-disabled":
      return "This account has been disabled";
    case "auth/user-not-found":
      return "No account found with this email";
    case "auth/wrong-password":
      return "Incorrect password";
    case "auth/weak-password":
      return "Password should be at least 6 characters";
    default:
      return "Something went wrong. Please try again.";
  }
}
