// src/Links/menus.services.ts

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LinkDocument, Link } from '@/infra/database/mongodb/schemas/links-schema'
import { CreateLinkDTO, LinkDTO, UpdateLinkDTO } from '../dto/link.dto';

@Injectable()
export class LinksService {
  constructor(
    @InjectModel(Link.name) private readonly linkModel: Model<LinkDocument> /*typeof LinkModel*/,
  ) {}

  async create(createLinkDto: CreateLinkDTO,
    userId: string
  ): Promise<LinkDocument> {
    const link = new this.linkModel(createLinkDto, userId);
    return link.save();
  }

  async findAll(): Promise<LinkDocument[]> {
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