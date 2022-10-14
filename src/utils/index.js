export const validatePassword=(value)=>{
    if((value.length<8)||(!value.includes('@')&&!value.includes('_')&&!value.includes('#'))){
        return "password should have altest 8 character and @ or # or _";
    }
   
    return "";
}