 export interface IVanillaLazyImage {
    selectorName: string;
}

 export class VanillaLazyImage implements IVanillaLazyImage {

    private _selectorName: string;

    public get selectorName(): string {
        return this._selectorName;
    }
    public set selectorName(value: string) {
        this._selectorName = value;
    }

    constructor(selectorName?: string) {
        if (selectorName)
            this._selectorName = selectorName;
    }

    public applyLazyLoader(){
        var lazyImages = [].slice.call(document.querySelectorAll(this._selectorName));
            if ("IntersectionObserver" in window) {
                let lazyImageObserver = new IntersectionObserver(function (entries, observer) {
                    entries.forEach(function (entry) {
                        if (entry.isIntersecting) {
                            let lazyImage = entry.target as any;
                            lazyImage.src = lazyImage.dataset.src;
                            if (lazyImage.dataset.srcset)
                                lazyImage.srcset = lazyImage.dataset.srcset;
                            lazyImage.classList.remove("lazy");
                            // observer.unobserve(lazyImage);
                            lazyImageObserver.unobserve(lazyImage);
                        }
                    });
                });
                lazyImages.forEach(function (lazyImage:any) {
                    lazyImageObserver.observe(lazyImage);
                });
            } else {
                let lazyLoad = function () {
                    lazyImages.forEach(function (lazyImage:any) {
                        if ((lazyImage.getBoundingClientRect().top <= window.innerHeight && lazyImage.getBoundingClientRect().bottom >= 0) && getComputedStyle(lazyImage).display !== "none") {
                            lazyImage.src = lazyImage.dataset.src;
                            if (lazyImage.dataset.srcset)
                                lazyImage.srcset = lazyImage.dataset.srcset;
                            lazyImage.classList.remove("lazy");

                            lazyImages = lazyImages.filter(function (image:any) {
                                return image !== lazyImage;
                            });

                            if (lazyImages.length === 0) {
                                document.removeEventListener("scroll", lazyLoad);
                                window.removeEventListener("resize", lazyLoad);
                                window.removeEventListener("orientationchange", lazyLoad);
                            }
                        }
                    });
                }


                document.addEventListener("scroll", lazyLoad);
                window.addEventListener("resize", lazyLoad);
                window.addEventListener("orientationchange", lazyLoad);

            }
    }

}