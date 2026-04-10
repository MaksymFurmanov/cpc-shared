// src/ui/articles/articles.module.css
var articles_default = {};

// src/ui/articles/Gallery.tsx
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import useEmblaCarousel from "embla-carousel-react";
import clsx2 from "clsx";

// src/ui/articles/skeletons/articles-skeletons.module.css
var articles_skeletons_default = {};

// src/ui/articles/skeletons/GalleryLoading.tsx
import clsx from "clsx";
import { jsx } from "react/jsx-runtime";
function GalleryLoading() {
  return /* @__PURE__ */ jsx("div", { className: clsx(articles_skeletons_default.gallerySkeleton, articles_skeletons_default.skeleton) });
}

// src/ui/articles/Gallery.tsx
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
function Gallery({ images, preloaded }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    dragFree: true,
    loop: true,
    containScroll: "trimSnaps"
  });
  if (!preloaded) return /* @__PURE__ */ jsx2(GalleryLoading, {});
  const isOneImg = images.length === 1;
  return /* @__PURE__ */ jsxs("div", { className: clsx2(articles_default.gallery, "not-selectable"), children: [
    !isOneImg && emblaApi?.canScrollPrev() && /* @__PURE__ */ jsx2(IoIosArrowBack, { onClick: () => emblaApi.scrollPrev() }),
    /* @__PURE__ */ jsx2("div", { className: articles_default.carousel, ref: emblaRef, children: /* @__PURE__ */ jsx2("div", { className: articles_default.wrapper, children: images.map((img, index) => /* @__PURE__ */ jsx2(
      "img",
      {
        src: img,
        alt: "",
        className: articles_default.image
      },
      index
    )) }) }),
    !isOneImg && emblaApi?.canScrollNext() && /* @__PURE__ */ jsx2(IoIosArrowForward, { onClick: () => emblaApi.scrollNext() })
  ] });
}

// src/ui/articles/Article.tsx
import { useMemo } from "react";
import ReactMarkdown from "react-markdown";

// src/utils/localizeArticle.ts
var localizeArticle = (event, lang) => {
  let title, text;
  switch (lang) {
    case "en":
      title = event.titleEN;
      text = event.descriptionEN;
      break;
    case "uk":
      title = event.titleUA;
      text = event.descriptionUA;
      break;
    default:
      title = event.titleSK;
      text = event.descriptionSK;
  }
  const date = new Date(event.date).toLocaleDateString(lang);
  return { title, text, date };
};

// src/utils/i18n/en/articles.json
var articles_default2 = {
  newsPageTitle: "News",
  eventsPageTitle: "Events",
  readMoreBtn: "Read more",
  backBtn: "Back"
};

// src/utils/i18n/en/common.json
var common_default = {
  hoursShort: "h."
};

// src/utils/i18n/en/footer.json
var footer_default = {
  leftSide: {
    name: "CONTACT SOCIAL-INFORMATION CENTER"
  },
  phone: "Tel.",
  openingHours: "OPENING HOURS",
  week: {
    monday: "Monday",
    tuesday: "Tuesday",
    wednesday: "Wednesday",
    thursday: "Thursday",
    friday: "Friday"
  },
  lunchBreak: "Lunch Break",
  rightSide: {
    name: "FIRST CONTACT OFFICE FOR FOREIGNERS"
  }
};

// src/utils/i18n/en/nav.json
var nav_default = {
  homeLink: "Home",
  aboutUsLink: "About Us",
  contacts: "Contacts",
  news: "News",
  immigrantsMap: "Immigrants' Map",
  events: "Events"
};

// src/utils/i18n/sk/articles.json
var articles_default3 = {
  newsPageTitle: "Aktuality",
  eventsPageTitle: "Podujatia",
  readMoreBtn: "Viac",
  backBtn: "Sp\xE4\u0165"
};

// src/utils/i18n/sk/common.json
var common_default2 = {
  hoursShort: "h."
};

// src/utils/i18n/sk/footer.json
var footer_default2 = {
  leftSide: {
    name: "KONTAKTN\xC9 SPOLO\u010CENSKO-INFORMA\u010CN\xC9 CENTRUM"
  },
  phone: "Tel. \u010D.",
  openingHours: "OTV\xC1RACIE HODINY",
  week: {
    monday: "Pondelok",
    tuesday: "Utorok",
    wednesday: "Streda",
    thursday: "\u0160tvrtok",
    friday: "Piatok"
  },
  lunchBreak: "Obed\u0148aj\u0161ia prest\xE1vka",
  rightSide: {
    name: "KANCEL\xC1RIA PRV\xC9HO KONTAKTU PRE CUDZINCOV"
  }
};

// src/utils/i18n/sk/nav.json
var nav_default2 = {
  homeLink: "Domov",
  aboutUsLink: "O N\xE1s",
  contacts: "Kontakty",
  news: "Aktuality",
  immigrantsMap: "Mapa Cudzincov",
  events: "Podujatia"
};

// src/utils/i18n/uk/articles.json
var articles_default4 = {
  newsPageTitle: "\u041D\u043E\u0432\u0438\u043D\u0438",
  eventsPageTitle: "\u0417\u0430\u0445\u043E\u0434\u0438",
  readMoreBtn: "\u0427\u0438\u0442\u0430\u0442\u0438 \u0434\u0430\u043B\u0456",
  backBtn: "\u041D\u0430\u0437\u0430\u0434"
};

// src/utils/i18n/uk/common.json
var common_default3 = {
  hoursShort: "\u0433\u043E\u0434."
};

// src/utils/i18n/uk/footer.json
var footer_default3 = {
  leftSide: {
    name: "\u041A\u041E\u041D\u0422\u0410\u041A\u0422\u041D\u0418\u0419 \u0421\u041E\u0426\u0406\u0410\u041B\u042C\u041D\u041E-\u0406\u041D\u0424\u041E\u0420\u041C\u0410\u0426\u0406\u0419\u041D\u0418\u0419 \u0426\u0415\u041D\u0422\u0420"
  },
  phone: "\u0422\u0435\u043B.",
  openingHours: "\u0413\u041E\u0414\u0418\u041D\u0418 \u0420\u041E\u0411\u041E\u0422\u0418",
  week: {
    monday: "\u041F\u043E\u043D\u0435\u0434\u0456\u043B\u043E\u043A",
    tuesday: "\u0412\u0456\u0432\u0442\u043E\u0440\u043E\u043A",
    wednesday: "\u0421\u0435\u0440\u0435\u0434\u0430",
    thursday: "\u0427\u0435\u0442\u0432\u0435\u0440",
    friday: "\u041F\u2019\u044F\u0442\u043D\u0438\u0446\u044F"
  },
  lunchBreak: "\u041E\u0431\u0456\u0434\u043D\u044F \u043F\u0435\u0440\u0435\u0440\u0432\u0430",
  rightSide: {
    name: "\u041E\u0424\u0406\u0421 \u041F\u0415\u0420\u0428\u041E\u0413\u041E \u041A\u041E\u041D\u0422\u0410\u041A\u0422\u0423 \u0414\u041B\u042F \u0406\u041D\u041E\u0417\u0415\u041C\u0426\u0406\u0412"
  }
};

// src/utils/i18n/uk/nav.json
var nav_default3 = {
  homeLink: "\u0413\u043E\u043B\u043E\u0432\u043D\u0430",
  aboutUsLink: "\u041F\u0440\u043E \u041D\u0430\u0441",
  contacts: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0438",
  news: "\u041D\u043E\u0432\u0438\u043D\u0438",
  immigrantsMap: "\u041C\u0430\u043F\u0430 \u0406\u043D\u043E\u0437\u0435\u043C\u0446\u0456\u0432",
  events: "\u0417\u0430\u0445\u043E\u0434\u0438"
};

// src/utils/i18n/index.tsx
var i18n = {
  en: {
    articles: articles_default2,
    common: common_default,
    footer: footer_default,
    nav: nav_default
  },
  sk: {
    articles: articles_default3,
    common: common_default2,
    footer: footer_default2,
    nav: nav_default2
  },
  uk: {
    articles: articles_default4,
    common: common_default3,
    footer: footer_default3,
    nav: nav_default3
  }
};

// src/ui/articles/Article.tsx
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
function Article({
  articleData,
  lang,
  t,
  onBack
}) {
  const { title, text, date } = useMemo(
    () => localizeArticle(articleData, lang),
    [articleData, lang]
  );
  const backHandler = () => {
    onBack(articleData.type);
  };
  return /* @__PURE__ */ jsxs2("article", { className: articles_default.article, children: [
    /* @__PURE__ */ jsxs2("button", { className: articles_default.backBtn, onClick: backHandler, children: [
      "\u2190 \xA0",
      t("articles:backBtn")
    ] }),
    /* @__PURE__ */ jsx3("div", { children: /* @__PURE__ */ jsx3(Gallery, { images: articleData.images }) }),
    /* @__PURE__ */ jsxs2("div", { className: articles_default.textContent, children: [
      /* @__PURE__ */ jsx3("h2", { className: articles_default.articleTitle, children: title }),
      /* @__PURE__ */ jsx3("b", { className: articles_default.date, children: date }),
      /* @__PURE__ */ jsx3("p", { className: articles_default.articleText, children: /* @__PURE__ */ jsx3(ReactMarkdown, { children: text }) })
    ] })
  ] });
}

// src/ui/articles/skeletons/ArticleLoading.tsx
import { jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
function ArticleLoading() {
  return /* @__PURE__ */ jsxs3("div", { className: articles_skeletons_default.card, children: [
    /* @__PURE__ */ jsx4(GalleryLoading, {}),
    /* @__PURE__ */ jsxs3("div", { className: articles_skeletons_default.textContent, children: [
      /* @__PURE__ */ jsx4("div", { className: `${articles_skeletons_default.titleSkeleton} ${articles_skeletons_default.skeleton}` }),
      /* @__PURE__ */ jsx4("div", { className: `${articles_skeletons_default.dateSkeleton} ${articles_skeletons_default.skeleton}` }),
      /* @__PURE__ */ jsxs3("div", { className: articles_skeletons_default.textSkeleton, children: [
        /* @__PURE__ */ jsx4("span", { className: articles_skeletons_default.skeleton }),
        /* @__PURE__ */ jsx4("span", { className: articles_skeletons_default.skeleton }),
        /* @__PURE__ */ jsx4("span", { className: articles_skeletons_default.skeleton }),
        /* @__PURE__ */ jsx4("span", { className: articles_skeletons_default.skeleton })
      ] })
    ] })
  ] });
}

// src/ui/header/header.module.css
var header_default = {};

// src/ui/header/nav-links.ts
var navLinks = [
  {
    label: "aboutUsLink",
    url: `/`
  },
  {
    label: "events",
    url: "/events?page=1"
  },
  {
    label: "news",
    url: "/news?page=1"
  },
  {
    label: "immigrantsMap",
    url: "/immigrants-map"
  }
];
var nav_links_default = navLinks;

// src/ui/header/NavBar.tsx
import { jsx as jsx5 } from "react/jsx-runtime";
function NavBar({ t, appNavigate }) {
  return /* @__PURE__ */ jsx5("nav", { className: header_default.links, children: nav_links_default.map((link, index) => {
    return /* @__PURE__ */ jsx5(
      "p",
      {
        onClick: () => appNavigate(link.url),
        className: "not-selectable",
        children: t(link.label)
      },
      index
    );
  }) });
}

// src/ui/header/SidebarButton.tsx
import { IoMdClose } from "react-icons/io";
import { RiMenu2Line } from "react-icons/ri";
import { jsx as jsx6 } from "react/jsx-runtime";
function SidebarButton({ sidebarToggle, toggleSidebar }) {
  const openSidebar = () => {
    toggleSidebar(true);
  };
  const closeSidebar = () => {
    toggleSidebar(false);
  };
  return /* @__PURE__ */ jsx6("div", { className: header_default.burgerIconContainer, children: sidebarToggle ? /* @__PURE__ */ jsx6(IoMdClose, { onClick: () => {
    closeSidebar();
  } }) : /* @__PURE__ */ jsx6(RiMenu2Line, { onClick: () => {
    openSidebar();
  } }) });
}

// src/ui/header/languages.ts
var languages = [
  {
    label: "SK",
    flagImg: "/img/langFlags/sk.webp",
    systemName: "sk"
  },
  {
    label: "EN",
    flagImg: "/img/langFlags/en.webp",
    systemName: "en"
  },
  {
    label: "UA",
    flagImg: "/img/langFlags/ua.webp",
    systemName: "uk"
  }
];
var languages_default = languages;

// src/ui/header/LanguageSwitcher.tsx
import clsx3 from "clsx";
import { jsx as jsx7, jsxs as jsxs4 } from "react/jsx-runtime";
function LanguageSwitcher({ lang, onLangChange }) {
  const sortedLanguages = [
    ...languages_default.filter((l) => l.systemName === lang),
    ...languages_default.filter((l) => l.systemName !== lang)
  ];
  const selectedIndex = sortedLanguages.findIndex(
    (l) => l.systemName === lang
  );
  return /* @__PURE__ */ jsx7("div", { className: clsx3(header_default.languageSwitcher, "not-selectable"), children: /* @__PURE__ */ jsxs4("div", { className: header_default.languagesContainer, children: [
    /* @__PURE__ */ jsx7(
      "div",
      {
        className: header_default.selectedContainer,
        style: {
          transform: `translateY(${selectedIndex * 2.5}em)`
        }
      }
    ),
    sortedLanguages.map((language, index) => {
      return /* @__PURE__ */ jsxs4(
        "div",
        {
          className: header_default.languageVariant,
          onClick: () => {
            if (language.systemName !== lang) onLangChange(language.systemName);
          },
          children: [
            /* @__PURE__ */ jsx7("p", { children: language.label }),
            /* @__PURE__ */ jsx7("img", { src: language.flagImg, alt: "" })
          ]
        },
        index
      );
    })
  ] }) });
}

// src/ui/header/Socials.tsx
import { FaFacebookF, FaViber, FaTelegramPlane } from "react-icons/fa";
import { jsx as jsx8, jsxs as jsxs5 } from "react/jsx-runtime";
function Socials() {
  return /* @__PURE__ */ jsxs5("div", { className: header_default.socials, children: [
    /* @__PURE__ */ jsx8("a", { className: header_default.socialsBtn, href: "https://www.facebook.com/CentrumPodporyCudzincovKosice", "aria-label": "Facebook", children: /* @__PURE__ */ jsx8(FaFacebookF, {}) }),
    /* @__PURE__ */ jsx8("a", { className: header_default.socialsBtn, href: "https://t.me/+LjEG_D7cxxA0OTg8", "aria-label": "Telegram", children: /* @__PURE__ */ jsx8(FaTelegramPlane, {}) }),
    /* @__PURE__ */ jsx8("a", { className: header_default.socialsBtn, href: "tel:+421908365995", "aria-label": "Viber", children: /* @__PURE__ */ jsx8(FaViber, {}) })
  ] });
}

// src/ui/header/Header.tsx
import clsx4 from "clsx";
import { jsx as jsx9, jsxs as jsxs6 } from "react/jsx-runtime";
function Header({
  sidebarToggle,
  toggleSidebar,
  handleToHomepage,
  appNavigate,
  isHomepage,
  scrolled,
  t,
  lang,
  onLangChange
}) {
  return /* @__PURE__ */ jsxs6(
    "header",
    {
      style: { backgroundColor: isHomepage ? "transparent" : void 0 },
      className: `${header_default.header} ${scrolled ? header_default.scrolled : ""}`,
      children: [
        /* @__PURE__ */ jsxs6(
          "div",
          {
            className: clsx4(header_default.logo, "not-selectable"),
            onClick: handleToHomepage,
            children: [
              /* @__PURE__ */ jsx9(
                "img",
                {
                  src: "/logo.png",
                  alt: "",
                  className: header_default.cpcLogo
                }
              ),
              /* @__PURE__ */ jsx9(
                "img",
                {
                  src: "/logo-white.svg",
                  alt: "Logo",
                  className: header_default.kosiceLogo
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsx9(NavBar, { t, appNavigate }),
        /* @__PURE__ */ jsxs6("div", { className: header_default.buttonsRight, children: [
          /* @__PURE__ */ jsx9(
            LanguageSwitcher,
            {
              lang,
              onLangChange
            }
          ),
          /* @__PURE__ */ jsx9(Socials, {}),
          /* @__PURE__ */ jsx9(
            SidebarButton,
            {
              sidebarToggle,
              toggleSidebar
            }
          )
        ] })
      ]
    }
  );
}

// src/ui/footer/footer.module.css
var footer_default4 = {};

// src/ui/footer/FirstOfficeBlock.tsx
import { FaFacebookF as FaFacebookF2, FaViber as FaViber2, FaTelegramPlane as FaTelegramPlane2 } from "react-icons/fa";
import { jsx as jsx10, jsxs as jsxs7 } from "react/jsx-runtime";
function FirstOfficeBlock({ t }) {
  return /* @__PURE__ */ jsxs7("div", { className: footer_default4.block, children: [
    /* @__PURE__ */ jsx10("h3", { className: footer_default4.title, children: t("footer:leftSide.name") }),
    /* @__PURE__ */ jsxs7("address", { className: footer_default4.address, children: [
      "Hlavn\xE1 68, Ko\u0161ice, B 214, 2. posch.",
      /* @__PURE__ */ jsx10("br", {}),
      "040 01, Star\xE9 Mesto"
    ] }),
    /* @__PURE__ */ jsxs7("p", { className: footer_default4.line, children: [
      t("footer:phone"),
      ":",
      " ",
      /* @__PURE__ */ jsx10("a", { href: "tel:+421908365995", className: footer_default4.link, children: "+421 908 365 995" })
    ] }),
    /* @__PURE__ */ jsxs7("p", { className: footer_default4.line, children: [
      "Email:",
      " ",
      /* @__PURE__ */ jsx10("a", { href: "mailto:centrumH68@kosice.sk", className: footer_default4.link, children: "centrumH68@kosice.sk" })
    ] }),
    /* @__PURE__ */ jsxs7("div", { className: footer_default4.icons, children: [
      /* @__PURE__ */ jsx10("a", { className: footer_default4.iconBtn, href: "https://www.facebook.com/CentrumPodporyCudzincovKosice", "aria-label": "Facebook", children: /* @__PURE__ */ jsx10(FaFacebookF2, {}) }),
      /* @__PURE__ */ jsx10("a", { className: footer_default4.iconBtn, href: "https://t.me/+LjEG_D7cxxA0OTg8", "aria-label": "Telegram", children: /* @__PURE__ */ jsx10(FaTelegramPlane2, {}) }),
      /* @__PURE__ */ jsx10("a", { className: footer_default4.iconBtn, href: "tel:+421908365995", "aria-label": "Viber", children: /* @__PURE__ */ jsx10(FaViber2, {}) })
    ] })
  ] });
}

// src/ui/footer/WorkHours.tsx
import { jsx as jsx11, jsxs as jsxs8 } from "react/jsx-runtime";
function WorkHours({ t }) {
  return /* @__PURE__ */ jsxs8("div", { className: footer_default4.block, children: [
    /* @__PURE__ */ jsx11("h3", { className: footer_default4.title, children: t("footer:openingHours") }),
    /* @__PURE__ */ jsxs8("ul", { className: footer_default4.hours, children: [
      /* @__PURE__ */ jsxs8("li", { children: [
        /* @__PURE__ */ jsx11("span", { children: t("footer:week.monday") }),
        /* @__PURE__ */ jsxs8("span", { children: [
          "8:00 \u2013 15:00 ",
          t("common:hoursShort")
        ] })
      ] }),
      /* @__PURE__ */ jsxs8("li", { children: [
        /* @__PURE__ */ jsx11("span", { children: t("footer:week.tuesday") }),
        /* @__PURE__ */ jsxs8("span", { children: [
          "8:00 \u2013 15:00 ",
          t("common:hoursShort")
        ] })
      ] }),
      /* @__PURE__ */ jsxs8("li", { children: [
        /* @__PURE__ */ jsx11("span", { children: t("footer:week.wednesday") }),
        /* @__PURE__ */ jsxs8("span", { children: [
          "8:00 \u2013 16:00 ",
          t("common:hoursShort")
        ] })
      ] }),
      /* @__PURE__ */ jsxs8("li", { children: [
        /* @__PURE__ */ jsx11("span", { children: t("footer:week.thursday") }),
        /* @__PURE__ */ jsxs8("span", { children: [
          "8:00 \u2013 15:00 ",
          t("common:hoursShort")
        ] })
      ] }),
      /* @__PURE__ */ jsxs8("li", { children: [
        /* @__PURE__ */ jsx11("span", { children: t("footer:week.friday") }),
        /* @__PURE__ */ jsxs8("span", { children: [
          "8:00 \u2013 14:00 ",
          t("common:hoursShort")
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs8("p", { className: footer_default4.note, children: [
      t("footer:lunchBreak"),
      ": 12:00 \u2013 12:30 h."
    ] })
  ] });
}

// src/ui/footer/SecondOfficeBlock.tsx
import { jsx as jsx12, jsxs as jsxs9 } from "react/jsx-runtime";
function SecondOfficeBlock({ t }) {
  return /* @__PURE__ */ jsx12("div", { className: footer_default4.bottomGrid, children: /* @__PURE__ */ jsxs9("div", { className: footer_default4.block, children: [
    /* @__PURE__ */ jsx12("h3", { className: footer_default4.title, children: t("footer:rightSide.name") }),
    /* @__PURE__ */ jsxs9("address", { className: footer_default4.address, children: [
      "Tr. SNP 48/A,",
      /* @__PURE__ */ jsx12("br", {}),
      "04011, Ko\u0161ice-Z\xE1pad"
    ] }),
    /* @__PURE__ */ jsxs9("p", { className: footer_default4.line, children: [
      t("footer:phone"),
      ":",
      " ",
      /* @__PURE__ */ jsx12("a", { href: "tel:+421556419190", className: footer_default4.link, children: "+421 55 64 19 190" })
    ] })
  ] }) });
}

// src/ui/footer/Footer.tsx
import { Fragment, jsx as jsx13, jsxs as jsxs10 } from "react/jsx-runtime";
function Footer({ isHomePage = false, t }) {
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  return /* @__PURE__ */ jsx13("footer", { className: footer_default4.container, children: /* @__PURE__ */ jsxs10("div", { className: footer_default4.content, children: [
    /* @__PURE__ */ jsxs10("div", { className: footer_default4.topGrid, children: [
      /* @__PURE__ */ jsx13(FirstOfficeBlock, { t }),
      isHomePage ? /* @__PURE__ */ jsx13(WorkHours, { t }) : /* @__PURE__ */ jsx13(SecondOfficeBlock, { t })
    ] }),
    isHomePage && /* @__PURE__ */ jsxs10(Fragment, { children: [
      /* @__PURE__ */ jsx13("hr", { className: footer_default4.divider }),
      /* @__PURE__ */ jsx13(SecondOfficeBlock, { t })
    ] }),
    /* @__PURE__ */ jsx13("div", { className: footer_default4.copyRow, children: /* @__PURE__ */ jsxs10("span", { children: [
      " \xA9 ",
      year,
      " Magistr\xE1t mesta Ko\u0161ice. V\u0161etky pr\xE1va vyhraden\xE9"
    ] }) })
  ] }) });
}

// src/types/articles.ts
var ArticleType = /* @__PURE__ */ ((ArticleType2) => {
  ArticleType2["NEWS"] = "News";
  ArticleType2["EVENT"] = "Event";
  return ArticleType2;
})(ArticleType || {});
export {
  Article,
  ArticleLoading,
  ArticleType,
  Footer,
  Gallery,
  Header,
  i18n,
  localizeArticle
};
//# sourceMappingURL=index.mjs.map