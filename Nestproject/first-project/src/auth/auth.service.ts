import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    registerUser(){
        return {message:'User registered successfully!!'}
    }
    getUsers(){
        return {
            user:{
                username:'Saloni',
                role:'backend dev',
            }
        }
    }
}

