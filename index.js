var VanillaLazyImage = /** @class */ (function () {
    function VanillaLazyImage(selectorName) {
        if (selectorName)
            this._selectorName = selectorName;
    }
    Object.defineProperty(VanillaLazyImage.prototype, "selectorName", {
        get: function () {
            return this._selectorName;
        },
        set: function (value) {
            this._selectorName = value;
        },
        enumerable: true,
        configurable: true
    });
    VanillaLazyImage.prototype.applyLazyLoader = function () {
        var lazyImages = [].slice.call(document.querySelectorAll(this._selectorName));
        if ("IntersectionObserver" in window) {
            var lazyImageObserver_1 = new IntersectionObserver(function (entries, observer) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        var lazyImage = entry.target;
                        lazyImage.src = lazyImage.dataset.src;
                        if (lazyImage.dataset.srcset)
                            lazyImage.srcset = lazyImage.dataset.srcset;
                        lazyImage.classList.remove("lazy");
                        // observer.unobserve(lazyImage);
                        lazyImageObserver_1.unobserve(lazyImage);
                    }
                });
            });
            lazyImages.forEach(function (lazyImage) {
                lazyImageObserver_1.observe(lazyImage);
            });
        }
        else {
            var lazyLoad_1 = function () {
                lazyImages.forEach(function (lazyImage) {
                    if ((lazyImage.getBoundingClientRect().top <= window.innerHeight && lazyImage.getBoundingClientRect().bottom >= 0) && getComputedStyle(lazyImage).display !== "none") {
                        lazyImage.src = lazyImage.dataset.src;
                        if (lazyImage.dataset.srcset)
                            lazyImage.srcset = lazyImage.dataset.srcset;
                        lazyImage.classList.remove("lazy");
                        lazyImages = lazyImages.filter(function (image) {
                            return image !== lazyImage;
                        });
                        if (lazyImages.length === 0) {
                            document.removeEventListener("scroll", lazyLoad_1);
                            window.removeEventListener("resize", lazyLoad_1);
                            window.removeEventListener("orientationchange", lazyLoad_1);
                        }
                    }
                });
            };
            document.addEventListener("scroll", lazyLoad_1);
            window.addEventListener("resize", lazyLoad_1);
            window.addEventListener("orientationchange", lazyLoad_1);
        }
    };
    return VanillaLazyImage;
}());
//# sourceMappingURL=index.js.map