import { CreateProjectDto } from './../DTOs/create-project.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Project } from '../interfaces/project.interface';
import { Model } from 'mongoose';

@Injectable()
export class ProjectsService {

    constructor(@InjectModel('Project') private projectModel: Model<Project>) { }

    async create(createMessageDto: CreateProjectDto) {

        const createdMessage = new this.projectModel(createMessageDto);
        return await createdMessage.save();

    }

    async getProjects() {
        return await this.projectModel.find().exec();
    }

    async getProject(projectId: string) {
        try {
            const project = await this.projectModel.findById(projectId);

            if (!project) {
                return 'Project not found';
            }
            return project;
        } catch (error) {
            return error;
        }
    }

    async updateProject(project: any) {
        try {
            const oldProject = await this.projectModel.findById(project._id);

            if (!oldProject) {
                return 'Message not found';
            }

            project.updated_at = Date.now();

            const updatedProject = await this.projectModel.findByIdAndUpdate(
                { _id: oldProject._id },
                project,
                { upsert: true, new: true },
            );

            return [updatedProject, true];
        } catch (error) {
            return error;
        }
    }

    async deleteMessage(projectId: string) {
        try {
            return await this.projectModel.findOneAndRemove(projectId);
        } catch (error) {
            return error;
        }
    }

}
