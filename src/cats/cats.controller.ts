import { Controller, Get } from '@nestjs/common';

@Controller('cats')
export class CatsController {

    @Get('breed')
    getCats() {
        return { 'name': 'cats' }
    }
}
