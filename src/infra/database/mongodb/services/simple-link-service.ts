import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SimpleBanner, SimpleButton, SimpleCardLink, SimpleCarousel, SimpleCarouselImage, SimpleGroupCard, SimpleGroupCardsLink, SimpleLink, SimpleLinkDocument } from '../schemas/simple-links-schema';
import { CreateSimpleLinkDTO, UpdateSimpleLinkDTO } from '../dto/simple-link.dto';
import { ResourceNotFoundError } from '@/core/errors/errors/resource-not-found-error';

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
     updateLinkDto: UpdateSimpleLinkDTO,
  ): Promise<SimpleLinkDocument | null> {
    const modifyLink = await this.linkModel.findOneAndUpdate(
      updateLinkDto);

    if (!modifyLink) {
      throw new ResourceNotFoundError
    }

    const updatedLink = await this.linkModel.findById(modifyLink)

      return updatedLink
  }

  async remove(userId: string) {
    //const linkRemovedId = userId
    await this.linkModel.deleteMany({userId: userId}) //.findByIdAndDelete(id);
    //return `The links with userId ${linkRemovedId} was deleted.`
  }
}