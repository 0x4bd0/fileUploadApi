import { Controller, Post, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';

@Controller('files')
export class FilesController {

    @Post("one")
    @UseInterceptors(FileInterceptor("file", { dest: "./uploads" }))
    uploadSingle(@UploadedFile() file) {
      console.log(file);
    }
  
    @Post("many")
    @UseInterceptors(FilesInterceptor("files[]", 10, { dest: "./uploads" }))
    uploadMultiple(@UploadedFiles() files) {
      console.log(files);
    }

}


