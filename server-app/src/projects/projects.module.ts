import { ProjectSchema } from './schemas/project.schema';
import { Module } from '@nestjs/common';
import { ProjectsController } from './projects.controller';
import { ProjectsService } from './services/projects.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';


@Module({
  imports: [
    MongooseModule.forFeature([{name: 'Project', schema: ProjectSchema}]),
    PassportModule.register({ defaultStrategy: 'jwt', session: false }),
  ],
  controllers: [ProjectsController],
  providers: [ProjectsService],
})
export class ProjectsModule { }
