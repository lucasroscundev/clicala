enum LinkTypes {
    BUTTON = 'button',
    BANNER = 'banner',
    CAROUSEL = 'carousel',
    CARD = 'card',
    GROUP_CARDS = 'group_cards',
}

export type LinkType = Record<LinkTypes, string>