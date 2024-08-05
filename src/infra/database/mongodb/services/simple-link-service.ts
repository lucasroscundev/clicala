import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SimpleBanner, SimpleBannerDocument, SimpleButton, SimpleButtonDocument, SimpleCardLink, SimpleCardLinkDocument, SimpleCarousel, SimpleCarouselDocument, SimpleCarouselImage, SimpleCarouselImageDocument, SimpleGroupCard, SimpleGroupCardDocument, SimpleGroupCardsLink, SimpleGroupCardsLinkDocument, SimpleLink, SimpleLinkDocument } from '../schemas/simple-links-schema';
import { CreateSimpleLinkDTO, UpdateSimpleLinkDTO } from '../dto/simple-link.dto';

@Injectable()
export class SimpleLinksService {
  constructor(
    @InjectModel(SimpleLink.name) private readonly linkModel: Model<SimpleLink>, /*typeof LinkModel*/
    @InjectModel(SimpleBanner.name) private readonly bannerModel: Model<SimpleBannerDocument>,
    @InjectModel(SimpleButton.name) private readonly buttonModel: Model<SimpleButtonDocument>,
    @InjectModel(SimpleCardLink.name) private readonly cardLinkModel: Model<SimpleCardLinkDocument>,
    @InjectModel(SimpleCarouselImage.name) private readonly carouselImageModel: Model<SimpleCarouselImageDocument>,
    @InjectModel(SimpleCarousel.name) private readonly carouselModel: Model<SimpleCarouselDocument>,
    @InjectModel(SimpleGroupCard.name) private readonly gropCardModel: Model<SimpleGroupCardDocument>,
    @InjectModel(SimpleGroupCardsLink.name) private readonly groupCardsLinkModel: Model<SimpleGroupCardsLinkDocument>,
  ) {}

  async create(createLinkDto: CreateSimpleLinkDTO,
   ): Promise<SimpleLinkDocument> {
    const link = new this.linkModel(createLinkDto);
    return link.save();
  }

  async findAll(): Promise<SimpleLinkDocument[]> {
    return this.linkModel.find().exec();
  }

  async findOne(id: string) {
    return this.linkModel.findById(id);
  }

  async update(
    //id: string,
    updateLinkDto: UpdateSimpleLinkDTO,
  ): Promise<SimpleLinkDocument | null> {
    return this.linkModel.findByIdAndUpdate(
       updateLinkDto);
  }

  async remove(id: string) {
    return this.linkModel.findByIdAndDelete(id);
  }
}