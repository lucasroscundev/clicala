export type ButtonLinkType = {
    id: string;
    label: string;
    url: string;
    color: string;
    size: string;
};

export type BannerLinkType = {
    id: string;
    imageUrl: string;
    urlToRedirect: string;
    size: string;
};

export type CarouselImageType = {
    id: string;
    imageUrl: string;
    urlToRedirect: string;
};

export type CarouselLinkType = {
    id: string;
    images: CarouselImageType[];
};

export type CardLinkType = {
    id: string;
    imageUrl: string;
    buttonLabel: string;
    buttonColor: string;
    buttonSize: string;
    buttonUrl: string;
};

export type GroupCardType = {
    id: string;
    imageUrl: string;
    buttonLabel: string;
    buttonColor: string;
    buttonSize: string;
    buttonUrl: string;
};

export type GroupCardsLinkType = {
    id: string;
    cards: GroupCardType[];
};

export type LinksType = {
    orderInpageById: string[];
    buttons: ButtonLinkType[];
    banners: BannerLinkType[];
    carousels: CarouselLinkType[];
    cards: CardLinkType[];
    groupCards: GroupCardsLinkType[];
};
