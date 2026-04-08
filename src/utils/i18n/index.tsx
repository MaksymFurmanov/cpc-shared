import en_articles from "./en/articles.json";
import en_common from "./en/common.json";
import en_footer from "./en/footer.json";
import en_nav from "./en/nav.json";

import sk_articles from "./sk/articles.json";
import sk_common from "./sk/common.json";
import sk_footer from "./sk/footer.json";
import sk_nav from "./sk/nav.json";

import uk_articles from "./uk/articles.json";
import uk_common from "./uk/common.json";
import uk_footer from "./uk/footer.json";
import uk_nav from "./uk/nav.json";

export const i18n = {
    en: {
        articles: en_articles,
        common: en_common,
        footer: en_footer,
        nav: en_nav,
    },
    sk: {
        articles: sk_articles,
        common: sk_common,
        footer: sk_footer,
        nav: sk_nav,
    },
    uk: {
        articles: uk_articles,
        common: uk_common,
        footer: uk_footer,
        nav: uk_nav,
    },
}