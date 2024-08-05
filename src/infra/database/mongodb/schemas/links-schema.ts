import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, HydratedDocument, Types } from 'mongoose';
import { Entity } from '@/core/entities/entity';
import { UniqueEntityID } from '@/core/entities/unique-entity-id';
import { Injectable, Module } from '@nestjs/common';

enum LinkType {
  BUTTON = 'button',
  BANNER = 'banner',
  CAROUSEL = 'carousel',
  CARD = 'card',
  GROUP_CARDS = 'groupCards'
}

interface BaseLink {
  type: LinkType;
}

export type BannerDocument = { type: BannerSchema }

@Schema()
class BannerSchema {
  @Prop({ required: true })
  imageUrl: string

  @Prop({required: true})
  urlToRedirect: string

  @Prop({required: true})
  size: string

  constructor( imageUrl: string, urlToRedirect: string, size: string ) {
    this.imageUrl = imageUrl
    this.urlToRedirect = urlToRedirect
    this.size = size
  }
}


export type ButtonDocument = { type: ButtonSchema }

@Schema()
class ButtonSchema {
  @Prop({ required: true })
  logo: string
  
  @Prop({ required: true })
  label: string;

  @Prop({ required: true })
  color: string;

  @Prop({ required: true })
  size: string;

  @Prop({ required: true })
  urlToRedirect: string;

  constructor(logo: string, label: string, color: string,
    size: string, urlToRedirect: string
  ){
    this.logo = logo
    this.label = label
    this.color = color
    this.size = size
    this.urlToRedirect = urlToRedirect
  }
}

export type CardLinkDocument = { type: CardLinkSchema}

@Schema()
class CardLinkSchema {
  @Prop({ required: true })
  imageUrl: string;

  @Prop({ type: ButtonSchema, required: true })
  button: ButtonSchema;

  constructor(imageUrl: string, button: ButtonSchema) {
    this.imageUrl = imageUrl
    this.button = button
  }
}

export type CarouselImageDocument = { type: CarouselImageSchema }

@Schema()
class CarouselImageSchema {
  @Prop({ required: true })
  imageUrl: string;

  @Prop({ required: true })
  urlToRedirect: string;

  constructor(imageUrl: string, urlToRedirect: string) {
    this.imageUrl = imageUrl
    this.urlToRedirect = urlToRedirect
  }
}

export type CarouselDocument = { type: CarouselSchema }

@Schema()
class CarouselSchema {
@Prop({ required: true })
color: string;

@Prop({ type: [CarouselImageSchema], required: false })
images?: Types.DocumentArray<CarouselImageSchema>;

constructor(color: string, images: Types.DocumentArray<CarouselImageSchema>) {
  this.color = color
  this.images = images
}
}

export type GroupCards  = { type: GroupCardsSchema }

@Schema()
class GroupCardsSchema {
@Prop({ required: true })
color: string;

@Prop({ type: [CardLinkSchema], required: false })
cards?: Types.DocumentArray<CardLinkSchema>;

constructor(color: string, cards: Types.DocumentArray<CardLinkSchema>) {
  this.color = color
  this.cards = cards
}
}

export type LinkDocument = HydratedDocument<Link>  // { type: Link }

@Schema({
  timestamps: { createdAt: 'created', updatedAt: 'updated' },
})
export class Link extends Document implements BaseLink {
  @Prop({ required: true })
  _id: string

  @Prop({ required: true, enum: LinkType })
  type: LinkType;

  @Prop({ required: true })
  userId: string;

  @Prop()
  logo?: string;

  @Prop()
  label?: string;

  @Prop()
  color?: string;

  @Prop()
  size?: string;

  @Prop()
  urlToRedirect?: string;

  @Prop()
  imageUrl?: string;

  @Prop({ type: BannerSchema, required: false })
  banner?: BannerDocument;

  @Prop({ type: ButtonSchema, required: false })
  button?: ButtonDocument;
  
  @Prop({ type: [CardLinkSchema], required: false })
  cards?: Types.DocumentArray<CardLinkDocument>;

  @Prop({ type: [CarouselImageSchema], required: false })
  images?: Types.DocumentArray<CarouselImageDocument>;
// Optional - could be used as placeholders
  @Prop({ type: GroupCardsSchema, required: false })
  groupCards?: GroupCards; 

  @Prop({ type: CarouselSchema, required: false })
  carousel?: CarouselDocument; 

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt?: Date;
  
  constructor(_id: string, type: LinkType, userId: string, logo: string,
    label: string, color: string, size: string, urlToRedirect: string, 
    imageUrl: string, banner: BannerDocument, button: ButtonDocument,
    cards: Types.DocumentArray<CardLinkDocument>, 
    images: Types.DocumentArray<CarouselImageDocument>, 
    groupCards: GroupCards, carousel: CarouselDocument,
  ) {
    super()    
    this._id = _id ?? new UniqueEntityID()
    this.type = type
    this.userId = userId
    this.logo = logo
    this.label = label
    this.color = color
    this.size = size
    this.urlToRedirect = urlToRedirect
    this.imageUrl = imageUrl
    this.banner = banner
    this.button = button
    this.cards = cards
    this.images = images
    this.groupCards = groupCards
    this.carousel = carousel
    this.createdAt = new Date()
  };

} 

export const LinkSchema = SchemaFactory.createForClass(Link);

@Schema({ collection: 'users', timestamps: true })
class UserSchema extends Document {
  @Prop({ required: true, unique: true })
  id: string;

  @Prop({ type: [Link], required: true })
  links: Types.DocumentArray<Link>;

  constructor(id: string, links: Types.DocumentArray<Link>) {
    super()
    this.id = (new UniqueEntityID).toString()
    this.links = links
  }
}

const UserSchemaFactory = SchemaFactory.createForClass(UserSchema);

// Export schemas and types
export { LinkType, UserSchemaFactory as UserSchema };

export const LinkModel =  mongoose.model('Link', LinkSchema)