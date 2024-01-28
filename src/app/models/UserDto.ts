
export interface User{
    id : number;
    firstName : string;
    lastName : string;
    username : string
    managerId? : number;
    role : UserRole 
}
enum UserRole
{
    Manager,
    Employee
}
