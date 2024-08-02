export type ButtonLink = {
    id: string;
    label: string;
    url: string;
    color: string;
    size: string;
};

export type BannerLink = {
    id: string;
    imageUrl: string;
    urlToRedirect: string;
    size: string;
};

export type CarouselImage = {
    id: string;
    imageUrl: string;
    urlToRedirect: string;
};

export type CarouselLink = {
    id: string;
    images: CarouselImage[];
};

export type CardLink = {
    id: string;
    imageUrl: string;
    buttonLabel: string;
    buttonColor: string;
    buttonSize: string;
    buttonUrl: string;
};

export type GroupCard = {
    id: string;
    imageUrl: string;
    buttonLabel: string;
    buttonColor: string;
    buttonSize: string;
    buttonUrl: string;
};

export type GroupCardsLink = {
    id: string;
    cards: GroupCard[];
};

export type Links = {
    orderInpageById: string[];
    buttons: ButtonLink[];
    banners: BannerLink[];
    carousels: CarouselLink[];
    cards: CardLink[];
    groupCards: GroupCardsLink[];
};
