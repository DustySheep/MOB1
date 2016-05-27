function($){
    $.rssFeedr = function (el, rssObj){
        this.rssObj = null;
        this.init(el);
    }
    $.rssFeedr.prototype = {
        tmplturl = "http://feeds.thescoreesports.com/";
        // each time you click on a link, it will append to this url

        display :function(){
        var ul = document.createElement('ul');
        var items = this.request.responseXML.getElementsByTagName('item');
        // OR
        var item = {
        'title' : $(item).find('title').text(),
        'pubDate' : $(item).find('pubDate').text(),
        'content' : $(item).find('content:encoded').text(),
        'source' : $(item).find('media:credit').find('image'),
        'empty' : false
    };
    objArray.push(rssObj);

},
}



})(jQuery);