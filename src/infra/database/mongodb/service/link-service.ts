// src/Links/menus.services.ts

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LinkDocument, Link } from '@/infra/database/mongodb/schemas/links-schema'
import { CreateLinkDTO, NewLinkDTO, UpdateLinkDTO } from '../dto/link.dto';
import { LinkModel } from '@/infra/database/mongodb/schemas/links-schema';

@Injectable()
export class LinksService {
  constructor(
    @InjectModel(Link.name) private readonly linkModel: Model<Link> /*typeof LinkModel*/,
  ) {}

  async create(createLinkDto: CreateLinkDTO,
    userId: string
  ): Promise<NewLinkDTO> {
    const Link = new this.linkModel(createLinkDto, userId);
    return Link.save();
  }

  async findAll(): Promise<Link[]> {
    return this.linkModel.find().exec();
  }

  async findOne(id: string) {
    return this.linkModel.findById(id);
  }

  async update(
    //id: string,
    updateLinkDto: UpdateLinkDTO,
  ): Promise<LinkDocument | null> {
    updateLinkDto.updatedAt = new Date
    return this.linkModel.findByIdAndUpdate(//id,
       updateLinkDto);
  }

  async remove(id: number) {
    return this.linkModel.findByIdAndDelete(id);
  }
}