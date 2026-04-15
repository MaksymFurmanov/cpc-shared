"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Article: () => Article,
  ArticleLoading: () => ArticleLoading,
  ArticleType: () => ArticleType,
  Footer: () => Footer,
  Gallery: () => Gallery,
  Header: () => Header,
  i18n: () => i18n,
  localizeArticle: () => localizeArticle
});
module.exports = __toCommonJS(index_exports);

// src/ui/articles/Article.tsx
var import_articles5 = __toESM(require("./articles.module-G5BQISWY.module.css"));

// src/ui/articles/Gallery.tsx
var import_articles = __toESM(require("./articles.module-G5BQISWY.module.css"));
var import_io = require("react-icons/io");
var import_embla_carousel_react = __toESM(require("embla-carousel-react"));
var import_clsx2 = __toESM(require("clsx"));

// src/ui/articles/skeletons/GalleryLoading.tsx
var import_articles_skeletons = __toESM(require("./articles-skeletons.module-V6WRGZMG.module.css"));
var import_clsx = __toESM(require("clsx"));
var import_jsx_runtime = require("react/jsx-runtime");
function GalleryLoading() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: (0, import_clsx.default)(import_articles_skeletons.default.gallerySkeleton, import_articles_skeletons.default.skeleton) });
}

// src/ui/articles/Gallery.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
function Gallery({ images, preloaded }) {
  const [emblaRef, emblaApi] = (0, import_embla_carousel_react.default)({
    dragFree: true,
    loop: true,
    containScroll: "trimSnaps"
  });
  if (!preloaded) return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(GalleryLoading, {});
  const isOneImg = images.length === 1;
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: (0, import_clsx2.default)(import_articles.default.gallery, "not-selectable"), children: [
    !isOneImg && emblaApi?.canScrollPrev() && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_io.IoIosArrowBack, { onClick: () => emblaApi.scrollPrev() }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: import_articles.default.carousel, ref: emblaRef, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: import_articles.default.wrapper, children: images.map((img, index) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      "img",
      {
        src: img,
        alt: "",
        className: import_articles.default.image
      },
      index
    )) }) }),
    !isOneImg && emblaApi?.canScrollNext() && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_io.IoIosArrowForward, { onClick: () => emblaApi.scrollNext() })
  ] });
}

// src/ui/articles/Article.tsx
var import_react = require("react");
var import_react_markdown = __toESM(require("react-markdown"));

// src/utils/localizeArticle.ts
var localizeArticle = (event, lang) => {
  let title, text;
  switch (lang) {
    case "en":
      title = event.title_en;
      text = event.description_en;
      break;
    case "uk":
      title = event.title_ua;
      text = event.description_ua;
      break;
    default:
      title = event.title_sk;
      text = event.description_sk;
  }
  const date = new Date(event.date).toLocaleDateString(lang);
  return { title, text, date };
};

// src/utils/i18n/en/articles.json
var articles_default = {
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
var articles_default2 = {
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
var articles_default3 = {
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
    articles: articles_default,
    common: common_default,
    footer: footer_default,
    nav: nav_default
  },
  sk: {
    articles: articles_default2,
    common: common_default2,
    footer: footer_default2,
    nav: nav_default2
  },
  uk: {
    articles: articles_default3,
    common: common_default3,
    footer: footer_default3,
    nav: nav_default3
  }
};

// src/ui/articles/Article.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
function Article({
  articleData,
  lang,
  t,
  onBack,
  preloadedImages
}) {
  const { title, text, date } = (0, import_react.useMemo)(
    () => localizeArticle(articleData, lang),
    [articleData, lang]
  );
  const backHandler = () => {
    onBack(articleData.type);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("article", { className: import_articles5.default.article, children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("button", { className: import_articles5.default.backBtn, onClick: backHandler, children: [
      "\u2190 \xA0",
      t("articles:backBtn")
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      Gallery,
      {
        images: articleData.images,
        preloaded: preloadedImages
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: import_articles5.default.textContent, children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h2", { className: import_articles5.default.articleTitle, children: title }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("b", { className: import_articles5.default.date, children: date }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: import_articles5.default.articleText, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_markdown.default, { children: text }) })
    ] })
  ] });
}

// src/ui/articles/skeletons/ArticleLoading.tsx
var import_articles_skeletons2 = __toESM(require("./articles-skeletons.module-V6WRGZMG.module.css"));
var import_jsx_runtime4 = require("react/jsx-runtime");
function ArticleLoading() {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: import_articles_skeletons2.default.card, children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(GalleryLoading, {}),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: import_articles_skeletons2.default.textContent, children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: `${import_articles_skeletons2.default.titleSkeleton} ${import_articles_skeletons2.default.skeleton}` }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: `${import_articles_skeletons2.default.dateSkeleton} ${import_articles_skeletons2.default.skeleton}` }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: import_articles_skeletons2.default.textSkeleton, children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: import_articles_skeletons2.default.skeleton }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: import_articles_skeletons2.default.skeleton }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: import_articles_skeletons2.default.skeleton }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: import_articles_skeletons2.default.skeleton })
      ] })
    ] })
  ] });
}

// src/ui/header/Header.tsx
var import_header5 = __toESM(require("./header.module-UHRJKHKQ.module.css"));

// src/ui/header/NavBar.tsx
var import_header = __toESM(require("./header.module-UHRJKHKQ.module.css"));

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
var import_jsx_runtime5 = require("react/jsx-runtime");
function NavBar({ t, appNavigate }) {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("nav", { className: import_header.default.links, children: nav_links_default.map((link, index) => {
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
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
var import_header2 = __toESM(require("./header.module-UHRJKHKQ.module.css"));
var import_io2 = require("react-icons/io");
var import_ri = require("react-icons/ri");
var import_jsx_runtime6 = require("react/jsx-runtime");
function SidebarButton({ sidebarToggle, toggleSidebar }) {
  const openSidebar = () => {
    toggleSidebar(true);
  };
  const closeSidebar = () => {
    toggleSidebar(false);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: import_header2.default.burgerIconContainer, children: sidebarToggle ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_io2.IoMdClose, { onClick: () => {
    closeSidebar();
  } }) : /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_ri.RiMenu2Line, { onClick: () => {
    openSidebar();
  } }) });
}

// src/ui/header/LanguageSwitcher.tsx
var import_header3 = __toESM(require("./header.module-UHRJKHKQ.module.css"));

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
var import_clsx3 = __toESM(require("clsx"));
var import_jsx_runtime7 = require("react/jsx-runtime");
function LanguageSwitcher({ lang, onLangChange }) {
  const sortedLanguages = [
    ...languages_default.filter((l) => l.systemName === lang),
    ...languages_default.filter((l) => l.systemName !== lang)
  ];
  const selectedIndex = sortedLanguages.findIndex(
    (l) => l.systemName === lang
  );
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: (0, import_clsx3.default)(import_header3.default.languageSwitcher, "not-selectable"), children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: import_header3.default.languagesContainer, children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
      "div",
      {
        className: import_header3.default.selectedContainer,
        style: {
          transform: `translateY(${selectedIndex * 2.5}em)`
        }
      }
    ),
    sortedLanguages.map((language, index) => {
      return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
        "div",
        {
          className: import_header3.default.languageVariant,
          onClick: () => {
            if (language.systemName !== lang) onLangChange(language.systemName);
          },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { children: language.label }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("img", { src: language.flagImg, alt: "" })
          ]
        },
        index
      );
    })
  ] }) });
}

// src/ui/header/Socials.tsx
var import_header4 = __toESM(require("./header.module-UHRJKHKQ.module.css"));
var import_fa = require("react-icons/fa");
var import_jsx_runtime8 = require("react/jsx-runtime");
function Socials() {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: import_header4.default.socials, children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("a", { className: import_header4.default.socialsBtn, href: "https://www.facebook.com/CentrumPodporyCudzincovKosice", "aria-label": "Facebook", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_fa.FaFacebookF, {}) }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("a", { className: import_header4.default.socialsBtn, href: "https://t.me/+LjEG_D7cxxA0OTg8", "aria-label": "Telegram", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_fa.FaTelegramPlane, {}) }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("a", { className: import_header4.default.socialsBtn, href: "tel:+421908365995", "aria-label": "Viber", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_fa.FaViber, {}) })
  ] });
}

// src/ui/header/Header.tsx
var import_clsx4 = __toESM(require("clsx"));
var import_jsx_runtime9 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
    "header",
    {
      style: { backgroundColor: isHomepage ? "transparent" : void 0 },
      className: `${import_header5.default.header} ${scrolled ? import_header5.default.scrolled : ""}`,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
          "div",
          {
            className: (0, import_clsx4.default)(import_header5.default.logo, "not-selectable"),
            onClick: handleToHomepage,
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                "img",
                {
                  src: "/logo.png",
                  alt: "",
                  className: import_header5.default.cpcLogo
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                "img",
                {
                  src: "/logo-white.svg",
                  alt: "Logo",
                  className: import_header5.default.kosiceLogo
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(NavBar, { t, appNavigate }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: import_header5.default.buttonsRight, children: [
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
            LanguageSwitcher,
            {
              lang,
              onLangChange
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Socials, {}),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
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

// src/ui/footer/Footer.tsx
var import_footer7 = __toESM(require("./footer.module-2LSSSQZ2.module.css"));

// src/ui/footer/FirstOfficeBlock.tsx
var import_footer4 = __toESM(require("./footer.module-2LSSSQZ2.module.css"));
var import_fa2 = require("react-icons/fa");
var import_jsx_runtime10 = require("react/jsx-runtime");
function FirstOfficeBlock({ t }) {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: import_footer4.default.block, children: [
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("h3", { className: import_footer4.default.title, children: t("footer:leftSide.name") }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("address", { className: import_footer4.default.address, children: [
      "Hlavn\xE1 68, Ko\u0161ice, B 214, 2. posch.",
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("br", {}),
      "040 01, Star\xE9 Mesto"
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("p", { className: import_footer4.default.line, children: [
      t("footer:phone"),
      ":",
      " ",
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("a", { href: "tel:+421908365995", className: import_footer4.default.link, children: "+421 908 365 995" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("p", { className: import_footer4.default.line, children: [
      "Email:",
      " ",
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("a", { href: "mailto:centrumH68@kosice.sk", className: import_footer4.default.link, children: "centrumH68@kosice.sk" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: import_footer4.default.icons, children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("a", { className: import_footer4.default.iconBtn, href: "https://www.facebook.com/CentrumPodporyCudzincovKosice", "aria-label": "Facebook", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_fa2.FaFacebookF, {}) }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("a", { className: import_footer4.default.iconBtn, href: "https://t.me/+LjEG_D7cxxA0OTg8", "aria-label": "Telegram", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_fa2.FaTelegramPlane, {}) }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("a", { className: import_footer4.default.iconBtn, href: "tel:+421908365995", "aria-label": "Viber", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_fa2.FaViber, {}) })
    ] })
  ] });
}

// src/ui/footer/WorkHours.tsx
var import_footer5 = __toESM(require("./footer.module-2LSSSQZ2.module.css"));
var import_jsx_runtime11 = require("react/jsx-runtime");
function WorkHours({ t }) {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: import_footer5.default.block, children: [
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("h3", { className: import_footer5.default.title, children: t("footer:openingHours") }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("ul", { className: import_footer5.default.hours, children: [
      /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { children: t("footer:week.monday") }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("span", { children: [
          "8:00 \u2013 15:00 ",
          t("common:hoursShort")
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { children: t("footer:week.tuesday") }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("span", { children: [
          "8:00 \u2013 15:00 ",
          t("common:hoursShort")
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { children: t("footer:week.wednesday") }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("span", { children: [
          "8:00 \u2013 16:00 ",
          t("common:hoursShort")
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { children: t("footer:week.thursday") }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("span", { children: [
          "8:00 \u2013 15:00 ",
          t("common:hoursShort")
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { children: t("footer:week.friday") }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("span", { children: [
          "8:00 \u2013 14:00 ",
          t("common:hoursShort")
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("p", { className: import_footer5.default.note, children: [
      t("footer:lunchBreak"),
      ": 12:00 \u2013 12:30 h."
    ] })
  ] });
}

// src/ui/footer/SecondOfficeBlock.tsx
var import_footer6 = __toESM(require("./footer.module-2LSSSQZ2.module.css"));
var import_jsx_runtime12 = require("react/jsx-runtime");
function SecondOfficeBlock({ t }) {
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: import_footer6.default.bottomGrid, children: /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: import_footer6.default.block, children: [
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("h3", { className: import_footer6.default.title, children: t("footer:rightSide.name") }),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("address", { className: import_footer6.default.address, children: [
      "Tr. SNP 48/A,",
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("br", {}),
      "04011, Ko\u0161ice-Z\xE1pad"
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("p", { className: import_footer6.default.line, children: [
      t("footer:phone"),
      ":",
      " ",
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("a", { href: "tel:+421556419190", className: import_footer6.default.link, children: "+421 55 64 19 190" })
    ] })
  ] }) });
}

// src/ui/footer/Footer.tsx
var import_jsx_runtime13 = require("react/jsx-runtime");
function Footer({ isHomePage = false, t }) {
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("footer", { className: import_footer7.default.container, children: /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: import_footer7.default.content, children: [
    /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: import_footer7.default.topGrid, children: [
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(FirstOfficeBlock, { t }),
      isHomePage ? /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(WorkHours, { t }) : /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(SecondOfficeBlock, { t })
    ] }),
    isHomePage && /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(import_jsx_runtime13.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("hr", { className: import_footer7.default.divider }),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(SecondOfficeBlock, { t })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: import_footer7.default.copyRow, children: /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("span", { children: [
      " \xA9 ",
      year,
      " Magistr\xE1t mesta Ko\u0161ice. V\u0161etky pr\xE1va vyhraden\xE9"
    ] }) })
  ] }) });
}

// src/types/articles.ts
var ArticleType = /* @__PURE__ */ ((ArticleType2) => {
  ArticleType2["NEWS"] = "news";
  ArticleType2["EVENT"] = "event";
  return ArticleType2;
})(ArticleType || {});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Article,
  ArticleLoading,
  ArticleType,
  Footer,
  Gallery,
  Header,
  i18n,
  localizeArticle
});
//# sourceMappingURL=index.js.map