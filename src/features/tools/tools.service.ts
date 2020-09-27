import { Injectable } from '@nestjs/common';

@Injectable()
export class ToolsService {

    getTools(): string {
        return 'Welcome Tools!';
    }
}
