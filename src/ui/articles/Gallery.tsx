"use client";

import styles from "./articles.module.css";
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io";
import useEmblaCarousel from "embla-carousel-react";
import clsx from "clsx";
import GalleryLoading from "./skeletons/GalleryLoading";
import {useImgPreload} from "../../hooks";

export function Gallery({images}: { images: string[] }) {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        dragFree: true,
        loop: true,
        containScroll: "trimSnaps",
    });

    const preloaded = useImgPreload(images);

    if (!preloaded) return <GalleryLoading/>;

    const isOneImg = images.length === 1;

    return (
        <div>
            <div className={clsx(styles.gallery, "not-selectable")}>
                {!isOneImg && emblaApi?.canScrollPrev() && (
                    <IoIosArrowBack onClick={() => emblaApi.scrollPrev()}/>
                )}

                <div className={styles.carousel} ref={emblaRef}>
                    <div className={styles.wrapper}>
                        {images.map((img, index) => (
                            <img key={index}
                                 src={img}
                                 alt={""}
                                 className={styles.image}
                            />
                        ))}
                    </div>
                </div>

                {!isOneImg && emblaApi?.canScrollNext() && (
                    <IoIosArrowForward onClick={() => emblaApi.scrollNext()}/>
                )}
            </div>
        </div>
    );
}