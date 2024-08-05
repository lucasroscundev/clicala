import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, HydratedDocument, Types } from 'mongoose';
//import { Entity } from '@/core/entities/entity';
import { UniqueEntityID } from '@/core/entities/unique-entity-id';
import { BannerLinkType, ButtonLinkType, CardLinkType, CarouselImageType, CarouselLinkType, GroupCardsLinkType, GroupCardType, LinksType } from './types';

export type SimpleBannerDocument  = HydratedDocument<SimpleBanner>; //{ type: Banner }

@Schema()
export class SimpleBanner implements BannerLinkType{
  @Prop({ required: true })
  id: string;

  @Prop({ required: true })
  imageUrl: string

  @Prop({required: true})
  urlToRedirect: string

  @Prop({required: true})
  size: string

  constructor(id: string, imageUrl: string, urlToRedirect: string, size: string ) {
    this.id = id
    this.imageUrl = imageUrl
    this.urlToRedirect = urlToRedirect
    this.size = size
  }
}

export const SimpleBannerSchema = SchemaFactory.createForClass(SimpleBanner);


export type SimpleButtonDocument  = HydratedDocument<SimpleButton>; // { type: SimpleButton }

@Schema()
export class SimpleButton implements ButtonLinkType{
  @Prop({ required: true })
  id: string;
  
  @Prop({ required: true })
  label: string;
  
  @Prop({ required: true })
  url: string;

  @Prop({ required: true })
  color: string;

  @Prop({ required: true })
  size: string;

   constructor(id: string, label: string, color: string,
    size: string, url: string
  ){
    this.id = id
    this.label = label
    this.url = url
    this.color = color
    this.size = size
  }
}

export const SimpleButtonSchema = SchemaFactory.createForClass(SimpleButton);


export type SimpleCardLinkDocument = HydratedDocument<SimpleCardLink>; // { type: SimpleCardLink }

@Schema()
export class SimpleCardLink implements CardLinkType{
  @Prop({ required: true })
  id: string;
  
  @Prop({ required: true })
  imageUrl: string;

  @Prop({ required: true })
  buttonLabel: string;

  @Prop({ required: true })
  buttonColor: string;
  
  @Prop({ required: true })
  buttonSize: string;

  @Prop({ required: true })
  buttonUrl: string;

  constructor(id: string, imageUrl: string, buttonLabel: string, 
    buttonColor: string, buttonSize: string, buttonUrl: string) {
    this.id = id
    this.imageUrl = imageUrl
    this.buttonLabel = buttonLabel
    this.buttonColor = buttonColor
    this.buttonSize = buttonSize
    this.buttonUrl = buttonUrl
  }
}

export const SimpleCardLinkSchema = SchemaFactory.createForClass(SimpleCardLink);


export type SimpleCarouselImageDocument = HydratedDocument<SimpleCarouselImage>; // { type: SimpleCarouselImage }

@Schema()
export class SimpleCarouselImage implements CarouselImageType{
  @Prop({ required: true })
  id: string;

  @Prop({ required: true })
  imageUrl: string;

  @Prop({ required: true })
  urlToRedirect: string;

  constructor(id:string, imageUrl: string, urlToRedirect: string) {
    this.id = id
    this.imageUrl = imageUrl
    this.urlToRedirect = urlToRedirect
  }
}

export const SimpleCarouselImageSchema = SchemaFactory.createForClass(SimpleCarouselImage);


export type SimpleCarouselDocument = HydratedDocument<SimpleCarousel>; // { type: SimpleCarousel }

@Schema()
export class SimpleCarousel implements CarouselLinkType{
  @Prop({ required: true })
  id: string;
  
  @Prop({ type: [SimpleCarouselImage],required: false })
  images: Types.DocumentArray<SimpleCarouselImage>// CarouselImageType[];

  constructor(id: string, images: Types.DocumentArray<SimpleCarouselImage>) {
    this.id = id
    this.images = images
  }
}

export const SimpleCarouselSchema = SchemaFactory.createForClass(SimpleCarousel);


export type SimpleGroupCardDocument  = HydratedDocument<SimpleGroupCard>; // { type: SimpleGroupCard }

@Schema()
export class SimpleGroupCard implements GroupCardType{
  @Prop({ required: true })
  id: string;
  
  @Prop({ required: true })
  imageUrl: string;

  @Prop({ required: true })
  buttonLabel: string;

  @Prop({ required: true })
  buttonColor: string;
  
  @Prop({ required: true })
  buttonSize: string;
  
  @Prop({ required: true })
  buttonUrl: string;
  
  constructor(id: string, imageUrl: string, buttonLabel: string, buttonColor: string, 
   buttonSize: string, buttonUrl: string
  ) {
    this.id = id
    this.imageUrl = imageUrl
    this.buttonLabel = buttonLabel
    this.buttonColor = buttonColor
    this.buttonSize = buttonSize
    this.buttonUrl = buttonUrl
  }
}
export const SimpleGroupCardSchema = SchemaFactory.createForClass(SimpleGroupCard);


export type SimpleGroupCardsLinkDocument  = HydratedDocument<SimpleGroupCardsLink>; //{ type: SimpleGroupCardsLink }

@Schema()
export class SimpleGroupCardsLink implements GroupCardsLinkType{
  @Prop({ required: true })
  id: string;
  
  @Prop({ type: [SimpleGroupCard], required: false })
  cards: Types.DocumentArray<SimpleGroupCard>;//GroupCardType[] OR [SimpleGroupCard]

  constructor(id: string, cards: Types.DocumentArray<SimpleGroupCard>) {
    this.id = id
    this.cards = cards
  }
}
export const SimpleGroupCardsLinkSchema = SchemaFactory.createForClass(SimpleGroupCardsLink);


export type SimpleLinkDocument = HydratedDocument<SimpleLink>; //{ type: Link }

@Schema(/*{
  /*timestamps: { createdAt: 'created', updatedAt: 'updated' },
}*/)
export class SimpleLink implements LinksType {
  @Prop({ required: true })
  orderInpageById: string[];

  @Prop({ type: [SimpleButton], required: false })
  buttons: Types.DocumentArray<SimpleButton>; //ButtonLinkType[] OR[SimpleButton]

  @Prop({ type: [SimpleBanner], required: false })
  banners: Types.DocumentArray<SimpleBanner>;//BannerLinkType[] OR [SimpleBanner]

  @Prop({ type: [SimpleCarousel], required: false })
  carousels: Types.DocumentArray<SimpleCarousel>; //CarouselLinkType[] OR [SimpleCarousel]

  @Prop({ type: [SimpleCardLink], required: false })
  cards: Types.DocumentArray<SimpleCardLink>;//CardLinkType[] OR [SimpleCardLink]

  @Prop({ type: [SimpleGroupCardsLink], required: false })
  groupCards: Types.DocumentArray<SimpleGroupCardsLink>;  //GroupCardsLinkType[] OR [SimpleGroupCardsLink]

  
/*
  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt?: Date;
 */ 
  constructor(orderInpageById: string[], buttons: Types.DocumentArray<SimpleButton>,
    banners: Types.DocumentArray<SimpleBanner>, carousels: Types.DocumentArray<SimpleCarousel>,
    cards: Types.DocumentArray<SimpleCardLink>, groupCards: Types.DocumentArray<SimpleGroupCardsLink>,
  ) {
    this.orderInpageById = orderInpageById 
    this.buttons = buttons 
    this.banners = banners 
    this.carousels = carousels 
    this.cards = cards 
    this.groupCards = groupCards
    //this.createdAt = new Date 
  };

} 

export const SimpleLinkSchema = SchemaFactory.createForClass(SimpleLink);

@Schema({ collection: 'users', timestamps: true })
class UserSchema extends Document {
  @Prop({ required: true, unique: true })
  id: string;

  @Prop({ type: [SimpleLink], required: true })
  links: Types.DocumentArray<SimpleLink>;

  constructor(id: string, links: Types.DocumentArray<SimpleLink>) {
    super()
    this.id = (new UniqueEntityID).toString()
    this.links = links
  }
}

export const UserSchemaFactory = SchemaFactory.createForClass(UserSchema);

// Export schemas and types

export const SimpleLinkModel =  mongoose.model('SimpleLink', SimpleLinkSchema)
export const SimpleBannerModel = mongoose.model('SimpleBanner', SimpleBannerSchema)
export const SimpleButtonModel = mongoose.model('SimpleButton', SimpleButtonSchema)
export const SimpleCardLinkModel = mongoose.model('SimpleCardLink', SimpleCardLinkSchema)
export const SimpleCarouselImageModel = mongoose.model('SimpleCarouselImage', SimpleCarouselImageSchema)
export const SimpleCarouselModel = mongoose.model('SimpleCarousel', SimpleCarouselSchema)
export const SimpleGroupCardModel = mongoose.model('SimpleGroupCard', SimpleGroupCardSchema)
export const SimpleGroupCardsLinkModel = mongoose.model('SimpleGroupCardsLink', SimpleGroupCardsLinkSchema)

module.exports = { SimpleLinkModel, SimpleBannerModel, SimpleButtonModel, SimpleCardLinkModel,
SimpleCarouselImageModel, SimpleCarouselModel, SimpleGroupCardModel, SimpleGroupCardsLinkModel}