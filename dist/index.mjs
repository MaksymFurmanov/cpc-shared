// src/ui/articles/Article.tsx
import styles3 from "./articles.module-G5BQISWY.module.css";

// src/ui/articles/Gallery.tsx
import styles2 from "./articles.module-G5BQISWY.module.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import useEmblaCarousel from "embla-carousel-react";
import clsx2 from "clsx";

// src/ui/articles/skeletons/GalleryLoading.tsx
import styles from "./articles-skeletons.module-V6WRGZMG.module.css";
import clsx from "clsx";
import { jsx } from "react/jsx-runtime";
function GalleryLoading() {
  return /* @__PURE__ */ jsx("div", { className: clsx(styles.gallerySkeleton, styles.skeleton) });
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
  return /* @__PURE__ */ jsxs("div", { className: clsx2(styles2.gallery, "not-selectable"), children: [
    !isOneImg && emblaApi?.canScrollPrev() && /* @__PURE__ */ jsx2(IoIosArrowBack, { onClick: () => emblaApi.scrollPrev() }),
    /* @__PURE__ */ jsx2("div", { className: styles2.carousel, ref: emblaRef, children: /* @__PURE__ */ jsx2("div", { className: styles2.wrapper, children: images.map((img, index) => /* @__PURE__ */ jsx2(
      "img",
      {
        src: img,
        alt: "",
        className: styles2.image
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
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
function Article({
  articleData,
  lang,
  t,
  onBack,
  preloadedImages
}) {
  const { title, text, date } = useMemo(
    () => localizeArticle(articleData, lang),
    [articleData, lang]
  );
  const backHandler = () => {
    onBack(articleData.type);
  };
  return /* @__PURE__ */ jsxs2("article", { className: styles3.article, children: [
    /* @__PURE__ */ jsxs2("button", { className: styles3.backBtn, onClick: backHandler, children: [
      "\u2190 \xA0",
      t("articles:backBtn")
    ] }),
    /* @__PURE__ */ jsx3("div", { children: /* @__PURE__ */ jsx3(
      Gallery,
      {
        images: articleData.images,
        preloaded: preloadedImages
      }
    ) }),
    /* @__PURE__ */ jsxs2("div", { className: styles3.textContent, children: [
      /* @__PURE__ */ jsx3("h2", { className: styles3.articleTitle, children: title }),
      /* @__PURE__ */ jsx3("b", { className: styles3.date, children: date }),
      /* @__PURE__ */ jsx3("p", { className: styles3.articleText, children: /* @__PURE__ */ jsx3(ReactMarkdown, { children: text }) })
    ] })
  ] });
}

// src/ui/articles/skeletons/ArticleLoading.tsx
import styles4 from "./articles-skeletons.module-V6WRGZMG.module.css";
import { jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
function ArticleLoading() {
  return /* @__PURE__ */ jsxs3("div", { className: styles4.card, children: [
    /* @__PURE__ */ jsx4(GalleryLoading, {}),
    /* @__PURE__ */ jsxs3("div", { className: styles4.textContent, children: [
      /* @__PURE__ */ jsx4("div", { className: `${styles4.titleSkeleton} ${styles4.skeleton}` }),
      /* @__PURE__ */ jsx4("div", { className: `${styles4.dateSkeleton} ${styles4.skeleton}` }),
      /* @__PURE__ */ jsxs3("div", { className: styles4.textSkeleton, children: [
        /* @__PURE__ */ jsx4("span", { className: styles4.skeleton }),
        /* @__PURE__ */ jsx4("span", { className: styles4.skeleton }),
        /* @__PURE__ */ jsx4("span", { className: styles4.skeleton }),
        /* @__PURE__ */ jsx4("span", { className: styles4.skeleton })
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
export {
  Article,
  ArticleLoading,
  ArticleType,
  localizeArticle
};
//# sourceMappingURL=index.mjs.map