# vanilla js based image-lazy-loader
This library for loading images as lazy<br/>
And this library based on Vanilla JS and built from typescript<br/>
So, there is advantage you can use with javascript, AngularJS-1, Angular2 (or above),ReactJs, VueJs and more<br/>

Please see in the [EXAMPLE / DEMO](https://umbrashia.github.io/vanilla-js-image-lazy-loader/example/index.html) 

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

<b>typescript/reactjs/angular based Code : </b>
<br/>
<code>
    import {VanillaLazyImage} from 'vanilla-js-image-lazy-loader';
</code>
<br><br/>
<b>OR Core javascript code</b>
<br/><br/>
<code>

    <script src="dist/image-lazy-loader-vanilla.js"></script>

    <script>
    new VanillaLazyImage(".blog img.lazy").applyLazyLoader(); 
    // OR
    var vanillaLazyImageObj = new VanillaLazyImage();
    vanillaLazyImageObj.selectorName=".blog img.lazy";
    vanillaLazyImageObj.applyLazyLoader();
    <script>
</code>

<!-- and see in the example.py  -->



<!--New Section **************************-->
