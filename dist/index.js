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
  localizeArticle: () => localizeArticle
});
module.exports = __toCommonJS(index_exports);

// src/ui/articles/Article.tsx
var import_articles2 = __toESM(require("./articles.module-G5BQISWY.module.css"));

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
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("article", { className: import_articles2.default.article, children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("button", { className: import_articles2.default.backBtn, onClick: backHandler, children: [
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
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: import_articles2.default.textContent, children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h2", { className: import_articles2.default.articleTitle, children: title }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("b", { className: import_articles2.default.date, children: date }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: import_articles2.default.articleText, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_markdown.default, { children: text }) })
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
  localizeArticle
});
//# sourceMappingURL=index.js.map