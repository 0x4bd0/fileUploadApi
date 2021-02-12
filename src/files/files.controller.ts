import { Controller, Post, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { PATH_METADATA } from '@nestjs/common/constants';

@Controller('files')
export class FilesController {

    @Post("one")
    @UseInterceptors(FileInterceptor("file", { dest: "./public" }))
    uploadSingle(@UploadedFile() file) {
      return file
    }
  
    @Post("many")
    @UseInterceptors(FilesInterceptor("files[]", 10, { dest: "./public" }))
    uploadMultiple(@UploadedFiles() files) {
      console.log(files);
    }

}


