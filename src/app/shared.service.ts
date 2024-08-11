import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private name: string = '';
  private accountType: string = '';
  private displayName: string ='';
  private userName: string ='';
  private userID: string ='';

  setName(input: string) {
    this.name = input;
  }

  getName() {
    return this.name;
  }

  setAccountType(input: string) {
    this.accountType = input;
  }

  getAccountType(){
    return this.accountType
  }

  setDisplayName(input: string) {
    this.displayName = input;
  }

  getDisplayName() {
    return this.displayName;
  }

  setUserID(input: string){
    this.userID = input;
  }

  getUserID(){
    return this.userID;
  }

  setUserName(input: string){
    this.userName = input;
  }

  getUserName(){
    return this.userName;
  }

  confirmPasswordRequirements(username: string, password: string): boolean {
    // Confirms passwords length
    if (password.length < 8 || password.length > 64) {
      return false;
    }

    // Check if password contains the word "stocktopus" or the username
    const lowerCasePassword = password.toLowerCase();
    const lowerCaseUsername = username.toLowerCase();
    if (lowerCasePassword.includes('stocktopus') || lowerCasePassword.includes(lowerCaseUsername)) {
      return false;
    }

    // Checks if password contains sequential characters
    for (let i = 0; i < password.length - 2; i++) {
      const charCode1 = password.charCodeAt(i);
      const charCode2 = password.charCodeAt(i + 1);
      const charCode3 = password.charCodeAt(i + 2);

      if (charCode1 + 1 === charCode2 && charCode2 + 1 === charCode3) {
        return false;
      }
    }

    // Check is password contains repeated characters
    const repeatedCharRegex = /(.)\1{3,}/;
    if (repeatedCharRegex.test(password)) {
      return false;
    }

    // If all checks pass, the password is valid
    return true;
  }
}
