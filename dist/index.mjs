// src/ui/articles/ArticleContainer.tsx
import styles from "./articles.module-2IFUF3IW.module.css";
import { jsx } from "react/jsx-runtime";
function ArticleContainer({ children }) {
  return /* @__PURE__ */ jsx("article", { className: styles.ArticleContainer, children });
}

// src/ui/articles/BackBtn.tsx
import styles2 from "./articles.module-2IFUF3IW.module.css";
import { jsx as jsx2 } from "react/jsx-runtime";
function BackBtn({ children, onBack }) {
  return /* @__PURE__ */ jsx2("button", { className: styles2.backBtn, onClick: () => onBack(), children });
}

// src/ui/articles/Gallery.tsx
import styles4 from "./articles.module-2IFUF3IW.module.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import useEmblaCarousel from "embla-carousel-react";
import clsx2 from "clsx";

// src/ui/articles/skeletons/GalleryLoading.tsx
import styles3 from "./articles-skeletons.module-V6WRGZMG.module.css";
import clsx from "clsx";
import { jsx as jsx3 } from "react/jsx-runtime";
function GalleryLoading() {
  return /* @__PURE__ */ jsx3("div", { className: clsx(styles3.gallerySkeleton, styles3.skeleton) });
}

// src/hooks/useImgPreload.ts
import { useEffect, useState } from "react";
function useImgPreload(images) {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    let active = true;
    Promise.all(
      images.map(
        (src) => new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = () => resolve();
          img.onerror = reject;
        })
      )
    ).then(() => {
      if (active) setReady(true);
    });
    return () => {
      active = false;
    };
  }, [images]);
  return ready;
}

// src/ui/articles/Gallery.tsx
import { jsx as jsx4, jsxs } from "react/jsx-runtime";
function Gallery({ images }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    dragFree: true,
    loop: true,
    containScroll: "trimSnaps"
  });
  const preloaded = useImgPreload(images);
  if (!preloaded) return /* @__PURE__ */ jsx4(GalleryLoading, {});
  const isOneImg = images.length === 1;
  return /* @__PURE__ */ jsx4("div", { children: /* @__PURE__ */ jsxs("div", { className: clsx2(styles4.gallery, "not-selectable"), children: [
    !isOneImg && emblaApi?.canScrollPrev() && /* @__PURE__ */ jsx4(IoIosArrowBack, { onClick: () => emblaApi.scrollPrev() }),
    /* @__PURE__ */ jsx4("div", { className: styles4.carousel, ref: emblaRef, children: /* @__PURE__ */ jsx4("div", { className: styles4.wrapper, children: images.map((img, index) => /* @__PURE__ */ jsx4(
      "img",
      {
        src: img,
        alt: "",
        className: styles4.image
      },
      index
    )) }) }),
    !isOneImg && emblaApi?.canScrollNext() && /* @__PURE__ */ jsx4(IoIosArrowForward, { onClick: () => emblaApi.scrollNext() })
  ] }) });
}

// src/ui/articles/ArticleText.tsx
import styles5 from "./articles.module-2IFUF3IW.module.css";
import { jsx as jsx5, jsxs as jsxs2 } from "react/jsx-runtime";
function ArticleText({ title, date, children }) {
  return /* @__PURE__ */ jsxs2("div", { className: styles5.textContent, children: [
    /* @__PURE__ */ jsx5("h2", { className: styles5.articleTitle, children: title }),
    /* @__PURE__ */ jsx5("b", { className: styles5.date, children: date }),
    /* @__PURE__ */ jsx5("div", { className: styles5.articleText, children })
  ] });
}

// src/ui/articles/skeletons/ArticleLoading.tsx
import styles6 from "./articles-skeletons.module-V6WRGZMG.module.css";
import { jsx as jsx6, jsxs as jsxs3 } from "react/jsx-runtime";
function ArticleLoading() {
  return /* @__PURE__ */ jsxs3("div", { className: styles6.card, children: [
    /* @__PURE__ */ jsx6(GalleryLoading, {}),
    /* @__PURE__ */ jsxs3("div", { className: styles6.textContent, children: [
      /* @__PURE__ */ jsx6("div", { className: `${styles6.titleSkeleton} ${styles6.skeleton}` }),
      /* @__PURE__ */ jsx6("div", { className: `${styles6.dateSkeleton} ${styles6.skeleton}` }),
      /* @__PURE__ */ jsxs3("div", { className: styles6.textSkeleton, children: [
        /* @__PURE__ */ jsx6("span", { className: styles6.skeleton }),
        /* @__PURE__ */ jsx6("span", { className: styles6.skeleton }),
        /* @__PURE__ */ jsx6("span", { className: styles6.skeleton }),
        /* @__PURE__ */ jsx6("span", { className: styles6.skeleton })
      ] })
    ] })
  ] });
}

// src/ui/articles/skeletons/ArticlesListLoading.tsx
import styles7 from "./articles-skeletons.module-V6WRGZMG.module.css";
import { jsx as jsx7, jsxs as jsxs4 } from "react/jsx-runtime";
function ArticlesListLoading() {
  return /* @__PURE__ */ jsxs4("div", { className: styles7.container, children: [
    /* @__PURE__ */ jsx7("div", { children: /* @__PURE__ */ jsx7("div", { className: `${styles7.paginationSkeleton} ${styles7.skeleton}` }) }),
    /* @__PURE__ */ jsx7(ArticleLoading, {})
  ] });
}

// src/types/articles.ts
var ArticleType = /* @__PURE__ */ ((ArticleType2) => {
  ArticleType2["NEWS"] = "news";
  ArticleType2["EVENT"] = "event";
  return ArticleType2;
})(ArticleType || {});
export {
  ArticleContainer,
  ArticleLoading,
  ArticleText,
  ArticleType,
  ArticlesListLoading,
  BackBtn,
  Gallery,
  useImgPreload
};
//# sourceMappingURL=index.mjs.map