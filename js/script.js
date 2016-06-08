var maxLength = 20;

/* WRITING THE FIRST PAGE *------------------------------------------------------------------------------*/

document.write(
    ' <div data-role="page" id="home">' +
    '    <div data-role="header" class="wow clr-light-green fadeInDown">' +
    '        <h1>MOB1</h1>' +
    '    </div>' +
    '    <div data-role="content" >' +	
    '        <ul data-role="listview" data-autodivider="true" data-inset="true" data-theme="a">' +
    '            <li data-role="list-divider"><span> Choose a category</span> ' +
    '            </li>' +
    '            <li>' +
    '                <img src="img/LoL_icon.png" alt="LoL" class="ui-thumbnail ui-thumbnail-circular"/>' +
    '                <a href="#list" data-rel="list">lol</a>' +
    '            </li>' +
    '            <li>' +
    '                <img src="img/dota_2_icon_by_benashvili-d6w0695.png" alt="dota2"class="ui-thumbnail ui-thumbnail-circular"/>' +
    '                <a href="#list">dota2</a>' +
    '            </li>' +
    '            <li>' +
    '                <img src="img/csgo-logo.png" alt="csgo"class="ui-thumbnail ui-thumbnail-circular"/>' +
    '                <a href="#list">csgo</a>' +
    '            </li>' +
    '            <li>' +
    '                <img src="img/hots.png" alt="hots" class="ui-thumbnail ui-thumbnail-circular"/>' +
    '                <a href="#list">hots</a>' +
    '            </li>' +
    '            <li>' +
    '                <img src="img/hs_icon.png" alt="hs" class="ui-thumbnail ui-thumbnail-circular"/>' +
    '                <a href="#list">hearthstone</a>' +
    '            </li>' +
    '            <li>' +
    '                <img src="img/starcraft-ii-icon.png" alt="sc2" class="ui-thumbnail ui-thumbnail-circular"/>' +
    '                <a href="#list">sc2</a>' +
    '            </li>' +
    '            <li>' +
    '                <img src="img/3xhumed-Mega-Games-Pack-33-Call-of-Duty-Modern-Warfare-2-8.ico" alt="cod+" class="ui-thumbnail ui-thumbnail-circular"/>' +
    '                <a href="#list">cod</a>' +
    '            </li>' +
    '        </ul>' +
    '    </div>' +
    '</div>'
);

/* WRITING THE SECOND (DYNAMIC) PAGE *-----------------------------------------------------------------------*/

document.write(
    '<div data-role="page" id="list">' +
    '  <div data-role="header" data-position="inline" class="wow fadeInDown">' +
    '    <a href="#home" data-role="button" data-icon="home"></a>' +
    '    <h1><span>TheScore Esport RSS Reader </span> ' +
    '      <span style="font-size: x-small"></span></h1>' +
    '  </div>' +
    '  <div data-role="content">' +
    '    <ul data-role="listview" data-inset="true" data-filter="true" data-theme="a" id="articleList">'
);

/* WRITE ARTICLES LINKS UNTIL MAXLENGTH IS ACHIEVED------------------------------------------------------------------*/

for(var i=1; i<=maxLength; i++){
    document.write(
        '<li id="list' + i + '"><a href="#article' + i + '" id="link' + i + '">&nbsp;</a></li>'
    );
}
document.write(
    '    </ul>' +
    '  </div>' +
    '</div>'
);

/* WRITE ARTICLES UNTIL MAXLENGTH IS ACHIEVED------------------------------------------------------------------*/

for(i=1; i<=maxLength; i++){
    document.write(
        '<div data-role="page" id="article' + i + '">' +
        '  <div data-role="header" data-position="inline" class="wow fadeInDown">' +
        '    <a href="#home" data-role="button" data-icon="home"></a>' +
        '    <h1 id="articleHeader' + i + '">&nbsp;</h1>' +
        '    <a href="#" id="openButton' + i + '" data-role="button" data-theme="a" data-icon="search"' +
        '      class="ui-btn-right" rel="external"></a>' +
        '  </div>' +
        '  <div data-role="content">' +
        '    <div id="articleContent' + i + '" class="articleContent"></div>' +
        '    <div id="controlgroup" data-role="controlgroup" data-type="horizontal">' +
        '      <a href="#article' + String(i-1) + '" data-role="button"  class="ui-btn ui-btn-inline  waves-effect waves-button waves-effect waves-button" data-icon="arrow-l"' +
        '        data-inline="true" class="prevButton">Prev</a>' +
        '      <a href="#article' + String(i+1) + '" data-role="button"  class="ui-btn ui-btn-inline  waves-effect waves-button waves-effect waves-button"' +
        '        data-inline="true" class="nextButton" data-iconpos="right">Next</a>' +
        '    </div>' +
        '  </div>' +
        '</div>'
    );
}


document.write(
    '<div data-role="footer" data-position="fixed" class="wow fadeInUp" id="footer">' +
    '<div class="row center-xs">'+
    '<div class="col-xs-12">'+
    '<div data-role="panel" id="bottomsheetlist" class="ui-bottom-sheet ui-bottom-sheet-list" data-animate="false" data-position="bottom" data-display="overlay">'+
    '<div class="row around-xs">'+
    '<div class="col-xs-auto">'+
    '<a href="#" class="ui-bottom-sheet-link ui-btn ui-btn-inline waves-effect waves-button waves-effect waves-button" data-ajax="false"><i class="fa fa-circle c1" aria-hidden="true"></i><strong>blue</strong></a>'+
    '</div>'+
    '<div class="col-xs-auto bsheet">'+
    '<a href="#" class="ui-bottom-sheet-link ui-btn ui-btn-inline waves-effect waves-button waves-effect waves-button" data-ajax="false"><i class="fa fa-circle c2" aria-hidden="true"></i><strong>green</strong></a>'+
    '</div>'+
    '<div class="col-xs-auto">'+
    '<a href="#" class="ui-bottom-sheet-link ui-btn ui-btn-inline waves-effect waves-button waves-effect waves-button" data-ajax="false"><i class="fa fa-circle c3" aria-hidden="true"></i><strong>lime</strong></a>'+
    '</div>'+
    '</div>'+
    '</div>'+
    '</div>' + 
    '<div class="col-xs-3">'+
    '<div class="box">'+
    '<a href="#" class="clr-btn-light-green ui-btn ui-mini nd2-btn-icon-block"><i style="padding:2%;" class="fa fa-language" aria-hidden="true"></i>Language</a>'+
    '</div>'+
    '</div>'+
    '<div class="col-xs-3">'+
    '<div class="box zoom">'+
    '<a href="#" id="animateZoomControl" class="clr-btn-light-green ui-btn ui-mini nd2-btn-icon-block"><i style="padding:2%;" class="fa fa-search-plus" aria-hidden="true"></i>Zoom</a>'+
    '</div>'+
    '</div>'+
    '<div class="col-xs-3">'+
    '<div class="box theme">'+
    '<a href="#" class="clr-btn-light-green ui-btn ui-mini nd2-btn-icon-block"><i style="padding:2%;" class="fa fa-picture-o" aria-hidden="true"></i>Theme</a>'+
    '</div>'+
    '</div>'+
    '<div class="col-xs-3">'+
    '<div class="box">'+
    '<a href="#" class="clr-btn-light-green ui-btn ui-mini nd2-btn-icon-block"><i style="padding:2%;" class="fa fa-star" aria-hidden="true"></i>Favs</a>'+
    '</div>'+
    '</div>'+
    '</div>'+
    '</div>'
);




/* DYNAMIC URL DEPENDING ON WHERE YOU'RE CLICKING ON THE FIRST PAGE */
/* CLICK CONTENT APPEND ON THE PROCESSED URL */
$(function(){
    var cat ="";
    $("#home li a").click(function(){
        // TODO --> ADD CSS WLLH
        cat = ($(this).text());
        getOnlineFeed('http://feeds.thescoreesports.com/'+cat+'.rss');
        $(this).css("color", "#f3f3f3");
    });
    $("#list li a").click(function(){
        $(this).css("color", "#f3f3f3");
    })
    //  ZOOM FUNCTION
    $(".zoom").click(function(){
        $("#zoomerElement li a, p").css("font-size", "150%");
    });

    // THEME FUNCTION 
    $(".theme").click(function(){
        $("#bottomsheetlist").toggle();  
    });
    $(".c1").click(function(){
        $("#theme").attr("href", "css/nativedroid2.color.light-blue.css"); 
    });

    $(".c2").click(function(){
        $("#theme").attr("href", "css/nativedroid2.color.light-green.css"); 
    });
    $(".c3").click(function(){
        $("#theme").attr("href", "css/nativedroid2.color.lime.css"); 
    });

});

/* functions */
var listEntries = function(json) {

    if (!json.responseData.feed.entries) return false;
    $('#widgetTitle').text(json.responseData.feed.title);
    var articleLength =json.responseData.feed.entries.length;

    articleLength = (articleLength > maxLength) ? maxLength : articleLength;
    for (var i = 1; i <= articleLength ; i++) {

        /* FOR EACH ARTICLES THERE IS */
        var entry = json.responseData.feed.entries[i-1];

        /* A LINK TO IT */          $('#link' + i).text(entry.title);
        /* A HEADER TO DISPLAY */   $('#articleHeader' + i).text(entry.title);
        /* A LINK TO IT */          $('#openButton' + i).attr('href', entry.link);
        /* THE ARTICLE'S CONTENT */ $('#articleContent' + i).append(entry.content);

    }

    /*RANDOM ARTICLE */
    var allArticles = json.responseData.feed.entries;
    var rand = allArticles[Math.floor(Math.random() * allArticles.length)];


    // NAVIGATE THROUGH ARTICLES OF THE SAME CATEGORY

    $('#article1 .prevButton').remove();
    $('#article' + articleLength + ' .nextButton').remove();
    if (articleLength < maxLength) {
        for (i = articleLength + 1; i <= maxLength; i++) {
            $('#list' + i).remove();
            $('#article' + i).remove();
        }
    }
};



/* PROCESSSING OF THE URL */
var getOnlineFeed = function(url) {
    var script = document.createElement('script');
    script.setAttribute('src', 'http://ajax.googleapis.com/ajax/services/feed/load?callback=listEntries&hl=ja&output=json-in-script&q='
                        + encodeURIComponent(url)
                        + '&v=1.0&num=' + maxLength);
    script.setAttribute('type', 'text/javascript');
    document.documentElement.firstChild.appendChild(script);
    // Append tu script dans le <head> du html


};