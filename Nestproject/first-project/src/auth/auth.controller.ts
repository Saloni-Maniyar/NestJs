import { Controller,Get,Post} from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    authService:AuthService;
    constructor(authService:AuthService){
        this.authService=authService;
    }
    @Post('register')
    register(){
        const result =this.authService.registerUser();
        return result;
    }

    @Get('dashboard')
    getUsers(){
        const result=this.authService.getUsers();
        return result;
    }


}
