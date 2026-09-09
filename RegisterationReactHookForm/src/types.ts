export interface RegistratioFormData {
    fullName:string,
    email:string,
    password:string,
    confirmPasseword:string,
    gender:'male'| 'female' | 'other' | '',
    terms: boolean;
}