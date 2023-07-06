//function name must be "match" under params folder

export function match(param){
    //this returns a boolean to check if the param is an integer
    return /^\d+$/.test(param);
}