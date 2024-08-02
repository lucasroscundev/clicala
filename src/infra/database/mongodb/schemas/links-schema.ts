import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, Types } from 'mongoose';
import { Entity } from '@/core/entities/entity';

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
}

export type CardLinkDocument = { type: CardLinkSchema}

@Schema()
class CardLinkSchema {
  @Prop({ required: true })
  imageUrl: string;

  @Prop({ type: ButtonSchema, required: true })
  button: ButtonSchema;
}

export type CarouselImageDocument = { type: CarouselImageSchema }

@Schema()
class CarouselImageSchema {
  @Prop({ required: true })
  imageUrl: string;

  @Prop({ required: true })
  urlToRedirect: string;
}

export type CarouselDocument = { type: CarouselSchema }

@Schema()
class CarouselSchema {
@Prop({ required: true })
color: string;

@Prop({ type: [CarouselImageSchema], required: false })
images?: Types.DocumentArray<CarouselImageSchema>;    
}

export type GroupCards  = { type: GroupCardsSchema }

@Schema()
class GroupCardsSchema {
@Prop({ required: true })
color: string;

@Prop({ type: [CardLinkSchema], required: false })
cards?: Types.DocumentArray<CardLinkSchema>;
}

export type LinkDocument = { type: LinkSchema }

@Schema({
  timestamps: { createdAt: 'created', updatedAt: 'updated' },
})
class LinkSchema extends Document implements BaseLink {
  @Prop()
  _id: string

  @Prop({ required: true, enum: LinkType })
  type: LinkType;

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

}

const LinkSchemaFactory = SchemaFactory.createForClass(LinkSchema);

@Schema({ collection: 'users', timestamps: true })
class UserSchema extends Document {
  @Prop({ required: true, unique: true })
  id: string;

  @Prop({ type: [LinkSchema], required: true })
  links: Types.DocumentArray<LinkSchema>;
}

const UserSchemaFactory = SchemaFactory.createForClass(UserSchema);

// Export schemas and types
export { LinkType, LinkSchemaFactory as LinkSchema, UserSchemaFactory as UserSchema };
export const LinkModel =  mongoose.model('Link', LinkSchemaFactory)