import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SimpleBanner, SimpleButton, SimpleCardLink, SimpleCarousel, SimpleCarouselImage, SimpleGroupCard, SimpleGroupCardDocument, SimpleGroupCardsLink, SimpleGroupCardsLinkDocument, SimpleLink, SimpleLinkDocument } from '../schemas/simple-links-schema';
import { CreateSimpleLinkDTO, UpdateSimpleLinkDTO } from '../dto/simple-link.dto';
import { CreateSimpleGroupCardDTO, UpdateSimpleGroupCardDTO } from '../dto/group-card-dto';
import { ResourceNotFoundError } from '@/core/errors/errors/resource-not-found-error';

@Injectable()
export class SimpleLinksService {
  constructor(
    @InjectModel(SimpleLink.name) private  linkModel: Model<SimpleLink>, 
    @InjectModel(SimpleGroupCard.name) private  groupCardModel: Model<SimpleGroupCard>,
    @InjectModel(SimpleGroupCardsLink.name) private  groupCardsLinkModel: Model<SimpleGroupCardsLink>,
  ) {}

  async add(linkId: string, groupCardDto: CreateSimpleGroupCardDTO,
   ): Promise<SimpleLinkDocument> { //aqui podemos trocar por entidade ou DTO
    const link = await this.linkModel.findById(linkId);
    
    if (!link) {
        throw new ResourceNotFoundError
    }
    const newgroupCard = this.groupCardModel.create(groupCardDto)

    link.groupCards.push(newgroupCard)

    link.save();
    return link;
  }

  /*
  async findAll(linkId: string): Promise<SimpleGroupCardsLinkDocument> {
    const link = await this.linkModel.findById(linkId);

    if (!link) {
      throw new ResourceNotFoundError
    }
    
    const groupCards = [link.groupCards]

    if (!groupCards) {
        throw new ResourceNotFoundError
    }

    return groupCards;
  }
*/

  async update(
    linkId: string,
    updateLinkDto: UpdateSimpleGroupCardDTO,
  ): Promise<SimpleLinkDocument | null> {
        const link = await this.linkModel.findById(linkId);
    
    if (!link) {
        throw new ResourceNotFoundError
    }

    link.groupCards.splice(0, link.groupCards.length)
    link.groupCards.push(updateLinkDto)

    link.save();
    return link;   
  }
/*
  async remove(linkId:string, groupCardId: string) {
    const link = await this.linkModel.findById(linkId);
    
    if (!link) {
        throw new ResourceNotFoundError
    }

    link.groupCards.find(groupCardId)
    push(newgroupCard)

    link.save();
    return link;

    const linkRemovedId = id
    await this.linkModel.findByIdAndDelete(id);
    return `The link with id ${linkRemovedId} was deleted.`
  } 
    */
}
