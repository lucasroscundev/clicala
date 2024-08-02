// src/Links/menus.services.ts

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LinkDocument, Link, LinkSchema } from '@/infra/database/mongodb/schemas/links-schema'
import { CreateLinkDTO, NewLinkDTO, UpdateLinkDTO } from '../dto/link.dto';

@Injectable()
export class LinksService {
  constructor(
    @InjectModel(LinkSchema.) private readonly LinkModel: Model<LinkDocument>,
  ) {}

  async create(createLinkDto: CreateLinkDTO): Promise<NewLinkDTO> {
    const Link = new this.LinkModel(createLinkDto);
    return Link.save();
  }

  async findAll(): Promise<LinkDocument[]> {
    return this.LinkModel.find();
  }

  findOne(id: string) {
    return this.LinkModel.findById(id);
  }

  async update(
    id: string,
    updateLinkDto: UpdateLinkDTO,
  ): Promise<LinkDocument | null> {
    return this.LinkModel.findByIdAndUpdate(id, updateLinkDto);
  }

  async remove(id: number) {
    return this.LinkModel.findByIdAndRemove(id);
  }
}