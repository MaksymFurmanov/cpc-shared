import * as react_jsx_runtime from 'react/jsx-runtime';

declare enum ArticleType {
    NEWS = "News",
    EVENT = "Event"
}
type MultilingualArticle = {
    id: string;
    titleEN: string;
    titleSK: string;
    titleUA: string;
    descriptionSK: string;
    descriptionUA: string;
    descriptionEN: string;
    date: string;
    showDate: boolean;
    images: string[];
    type: ArticleType;
};

declare function Article({ articleData, type, lang, t, onBack, page, }: {
    articleData: MultilingualArticle;
    type: ArticleType;
    lang: string;
    t: (key: string) => string;
    onBack?: (type: ArticleType, page: number) => void;
    page?: number;
}): react_jsx_runtime.JSX.Element;

declare function Gallery({ images, preloaded }: {
    images: string[];
    preloaded?: boolean;
}): react_jsx_runtime.JSX.Element;

declare function ArticleLoading(): react_jsx_runtime.JSX.Element;

declare function Header({ sidebarToggle, toggleSidebar, handleToHomepage, appNavigate, isHomepage, scrolled, t, lang, onLangChange }: {
    sidebarToggle: boolean;
    toggleSidebar: (toggle: boolean) => void;
    handleToHomepage: () => void;
    appNavigate: (link: string) => void;
    isHomepage: boolean;
    scrolled: boolean;
    t: (key: string) => string;
    lang: string;
    onLangChange: (lang: string) => void;
}): react_jsx_runtime.JSX.Element;

declare function Footer({ isHomePage, t }: {
    isHomePage?: boolean;
    t: (key: string) => string;
}): react_jsx_runtime.JSX.Element;

declare const localizeArticle: (event: MultilingualArticle, lang: string) => {
    title: string;
    text: string;
    date: string;
};

declare const i18n: {
    en: {
        articles: {
            newsPageTitle: string;
            eventsPageTitle: string;
            readMoreBtn: string;
            backBtn: string;
        };
        common: {
            hoursShort: string;
        };
        footer: {
            leftSide: {
                name: string;
            };
            phone: string;
            openingHours: string;
            week: {
                monday: string;
                tuesday: string;
                wednesday: string;
                thursday: string;
                friday: string;
            };
            lunchBreak: string;
            rightSide: {
                name: string;
            };
        };
        nav: {
            homeLink: string;
            aboutUsLink: string;
            contacts: string;
            news: string;
            immigrantsMap: string;
            events: string;
        };
    };
    sk: {
        articles: {
            newsPageTitle: string;
            eventsPageTitle: string;
            readMoreBtn: string;
            backBtn: string;
        };
        common: {
            hoursShort: string;
        };
        footer: {
            leftSide: {
                name: string;
            };
            phone: string;
            openingHours: string;
            week: {
                monday: string;
                tuesday: string;
                wednesday: string;
                thursday: string;
                friday: string;
            };
            lunchBreak: string;
            rightSide: {
                name: string;
            };
        };
        nav: {
            homeLink: string;
            aboutUsLink: string;
            contacts: string;
            news: string;
            immigrantsMap: string;
            events: string;
        };
    };
    uk: {
        articles: {
            newsPageTitle: string;
            eventsPageTitle: string;
            readMoreBtn: string;
            backBtn: string;
        };
        common: {
            hoursShort: string;
        };
        footer: {
            leftSide: {
                name: string;
            };
            phone: string;
            openingHours: string;
            week: {
                monday: string;
                tuesday: string;
                wednesday: string;
                thursday: string;
                friday: string;
            };
            lunchBreak: string;
            rightSide: {
                name: string;
            };
        };
        nav: {
            homeLink: string;
            aboutUsLink: string;
            contacts: string;
            news: string;
            immigrantsMap: string;
            events: string;
        };
    };
};

export { Article, ArticleLoading, ArticleType, Footer, Gallery, Header, type MultilingualArticle, i18n, localizeArticle };
