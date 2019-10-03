import { ProjectsService } from './services/projects.service';
import { Controller, Post, Body, Param, Get, UseGuards, Delete } from '@nestjs/common';
import { CreateProjectDto } from './DTOs/create-project.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('projects')
export class ProjectsController {

    constructor(private projectsService: ProjectsService) {

    }

    @Post()
    async create(@Body() createVideoDto: CreateProjectDto) {
        return await this.projectsService.create(createVideoDto);
    }

    @Get()
    @UseGuards(AuthGuard())
    async getUsers() {
        return await this.projectsService.getProjects();
    }


    @Get('/:project_id')
    async getProjectsById(@Param('project_id') projectId: string) {
        return await this.projectsService.getProject(projectId);
    }


    @Post('/update')
    @UseGuards(AuthGuard())
    async updateProject(@Body() updateProjectDto: any) {
        return await this.projectsService.updateProject(updateProjectDto);
    }

    @Delete('/delete/:project_id')
    @UseGuards(AuthGuard())
    async deleteProject(@Param('project_id') projectId: string) {
        return await this.projectsService.deleteMessage(projectId);
    }

}
