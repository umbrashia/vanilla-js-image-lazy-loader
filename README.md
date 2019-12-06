# vanilla js based image-lazy-loader
This library for loading images as lazy<br/>
And this library based on Vanilla JS and built from typescript<br/>
So, there is advantage you can use with javascript, AngularJS-1, Angular2 (or above),ReactJs, VueJs and more<br/>

<br/><h3>Installation</h3>
<code>
npm i vanilla-js-image-lazy-loader
</code>
Clone or Download all file in your lib(any folder) 


<br/><h3>How to use ?</h3>
<br/>HTML Code : 
<code>

    <div class="blog">
        <a href="static/frontend/blog-detail.html" class="block3-img dis-block hov-img-zoom">
            <img class="img-fluid lazy" data-src="https://picsum.photos/seed/picsum/400/300?123489879" alt="IMG-BLOG">
        </a><br/>

        <a href="static/frontend/blog-detail.html" class="block3-img dis-block hov-img-zoom">
            <img class="img-fluid lazy" data-src="https://picsum.photos/seed/picsum/400/300?123489879" alt="IMG-BLOG">
        </a><br/>

        <a href="static/frontend/blog-detail.html" class="block3-img dis-block hov-img-zoom">
            <img class="img-fluid lazy" data-src="https://picsum.photos/seed/picsum/400/300?123489879" alt="IMG-BLOG">
        </a><br/>
        ....
    </div>
</code>

<b>Javascript Code 1 : </b>
<br/>
<code>
    new VanillaLazyImage(".blog img.lazy").applyLazyLoader();
</code>
<br><br/>
<b>OR</b>
<br/><br/>
<code>
    var vanillaLazyLoadObj=new VanillaLazyImage();
    vanillaLazyLoadObj.
</code>

<!-- and see in the example.py  -->



<!--New Section **************************-->
