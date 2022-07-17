export interface Course{
    id:number;
    name:string;
    author: string;
    image_ref: string;
    description:string;
    price:string;
    user:number;
}
export interface Teacher{
    id:number;
    name:string;
    image_ref:string;
    university:University;
    degree:number;
    course:Course;

}
export interface Review{
    id:number;
    author:string;
    description:string;
    liked:boolean;
    teacher: Teacher;
}

export interface University{
    name: string;
    image_ref: string;
    description: string;
    year: string;
} 
 export interface Token{
    token: string;
  }
export interface User{
    id:number;
    email:string;
    username:string;
    is_superuser:boolean;
}
  