import { isValidUsername } from "6pp";
export const userNameValidators = (userName)=>{
    if(!isValidUsername(userName))
    return {isValid:false, errorMessage:"UserName is invalid"};

}