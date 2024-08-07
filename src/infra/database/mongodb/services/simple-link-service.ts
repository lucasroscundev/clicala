import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SimpleBanner, SimpleButton, SimpleCardLink, SimpleCarousel, SimpleCarouselImage, SimpleGroupCard, SimpleGroupCardsLink, SimpleLink, SimpleLinkDocument } from '../schemas/simple-links-schema';
import { CreateSimpleLinkDTO, UpdateSimpleLinkDTO } from '../dto/simple-link.dto';

@Injectable()
export class SimpleLinksService {
  constructor(
    @InjectModel(SimpleLink.name) private  linkModel: Model<SimpleLink>, 
    /*@InjectModel(SimpleBanner.name) private  bannerModel: Model<SimpleBanner>,
    @InjectModel(SimpleButton.name) private  buttonModel: Model<SimpleButton>,
    @InjectModel(SimpleCardLink.name) private  cardLinkModel: Model<SimpleCardLink>,
    @InjectModel(SimpleCarouselImage.name) private  carouselImageModel: Model<SimpleCarouselImage>,
    @InjectModel(SimpleCarousel.name) private  carouselModel: Model<SimpleCarousel>,
    @InjectModel(SimpleGroupCard.name) private  gropCardModel: Model<SimpleGroupCard>,
    @InjectModel(SimpleGroupCardsLink.name) private  groupCardsLinkModel: Model<SimpleGroupCardsLink>,*/
  ) {}

  async create(createLinkDto: CreateSimpleLinkDTO,
   ): Promise<SimpleLinkDocument> { //aqui podemos trocar por entidade ou DTO
    const link = await this.linkModel.create(createLinkDto);
    link.save();
    return link;
  }

  async findAll(): Promise<SimpleLinkDocument[]> {
    return this.linkModel.find().exec();
  }

  async findOne(id: string) {
    return this.linkModel.findById(id);
  }

  async update(
    id: string,
    updateLinkDto: UpdateSimpleLinkDTO,
  ): Promise<SimpleLinkDocument | null> {
    const updatedLink = this.linkModel.findByIdAndUpdate(
      id,
      updateLinkDto);

      return updatedLink
  }

  async remove(id: string) {
    const linkRemovedId = id
    await this.linkModel.findByIdAndDelete(id);
    return `The link with id ${linkRemovedId} was deleted.`
  }
}