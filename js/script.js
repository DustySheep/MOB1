var maxLength = 20;

/* WRITING THE FIRST PAGE *------------------------------------------------------------------------------*/

document.write(
    ' <div data-role="page" id="home">' +
    '    <div data-role="header">' +
    '        <h1>MOB1</h1>' +
    '    </div>' +
    '    <div data-role="content" >' +	
    '        <ul data-role="listview" data-autodivider="true" data-inset="true" data-theme="a">' +
    '            <li data-role="list-divider"> Choose a category ' +
    '            </li>' +
    '            <li>' +
    '                <img src="img/LoL_icon.png" alt="LoL" class="ui-li-icon"/>' +
    '                <a href="#list" data-rel="list">lol</a>' +
    '            </li>' +
    '            <li>' +
    '                <img src="img/dota_2_icon_by_benashvili-d6w0695.png" alt="dota2" class="ui-li-icon"/>' +
    '                <a href="#list">dota2</a>' +
    '            </li>' +
    '            <li>' +
    '                <img src="img/csgo-logo.png" alt="csgo" class="ui-li-icon"/>' +
    '                <a href="#list">csgo</a>' +
    '            </li>' +
    '            <li>' +
    '                <img src="img/hots.png" alt="hots" class="ui-li-icon"/>' +
    '                <a href="#list">hots</a>' +
    '            </li>' +
    '            <li>' +
    '                <img src="img/hs_icon.png" alt="hs" class="ui-li-icon"/>' +
    '                <a href="#list">hearthstone</a>' +
    '            </li>' +
    '            <li>' +
    '                <img src="img/starcraft-ii-icon.png" alt="sc2" class="ui-li-icon"/>' +
    '                <a href="#list">sc2</a>' +
    '            </li>' +
    '            <li>' +
    '                <img src="img/3xhumed-Mega-Games-Pack-33-Call-of-Duty-Modern-Warfare-2-8.ico" alt="cod+" class="ui-li-icon"/>' +
    '                <a href="#list">cod</a>' +
    '            </li>' +
    '        </ul>' +
    '    </div>' +
    '</div>'
);

/* WRITING THE SECOND (DYNAMIC) PAGE *-----------------------------------------------------------------------*/

document.write(
    '<div data-role="page" id="list">' +
    '  <div data-role="header" data-position="inline">' +
    '    <a href="#home" data-role="button" data-icon="home">Home</a>' +
    '    <h1><span>TheScore Esport RSS Reader </span> ' +
    '      <span style="font-size: x-small"></span></h1>' +
    '    <a href="#" id="openButton' + i + '" data-role="button" data-icon="plus"' +
    '      class="ui-btn-right" rel="external">Open</a>' +
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
        '  <div data-role="header" data-position="inline">' +
        '    <a href="#home" data-role="button" data-icon="home">Home</a>' +
        '    <h1 id="articleHeader' + i + '">&nbsp;</h1>' +
        '    <a href="#" id="openButton' + i + '" data-role="button" data-icon="plus"' +
        '      class="ui-btn-right" rel="external">Open</a>' +
        '  </div>' +
        '  <div data-role="content">' +
        '    <div id="articleContent' + i + '" class="articleContent"></div>' +
        '    <div data-role="controlgroup" data-type="horizontal">' +
        '      <a href="#article' + String(i-1) + '" data-role="button" data-icon="arrow-l"' +
        '        data-inline="true" class="prevButton">Prev</a>' +
        '      <a href="#article' + String(i+1) + '" data-role="button" data-icon="arrow-r"' +
        '        data-inline="true" class="nextButton" data-iconpos="right">Next</a>' +
        '    </div>' +
        '  </div>' +
        '</div>'
    );
}

/* DYNAMIC URL DEPENDING ON WHERE YOU'RE CLICKING ON THE FIRST PAGE */
/* CLICK CONTENT APPEND ON THE PROCESSED URL */
$(function(){
    var cat ="";
    $("#home li a").click(function(){
        cat = ($(this).text());
        getOnlineFeed('http://feeds.thescoreesports.com/'+cat+'.rss');
    });
});

/* functions */
var listEntries = function(json) {
    
    if (!json.responseData.feed.entries) return false;
    $('#widgetTitle').text(json.responseData.feed.title);
    var articleLength =json.responseData.feed.entries.length;
    console.log(articleLength);
    articleLength = (articleLength > maxLength) ? maxLength : articleLength;
    for (var i = 1; i <= articleLength ; i++) {
        
        /* FOR EACH ARTICLES THERE IS */
        var entry = json.responseData.feed.entries[i-1];
        
        /* A LINK TO IT */          $('#link' + i).text(entry.title);
        /* A HEADER TO DISPLAY */   $('#articleHeader' + i).text(entry.title);
        /* A LINK TO IT */          $('#openButton' + i).attr('href', entry.link);
        /* THE ARTICLE'S CONTENT */ $('#articleContent' + i).append(entry.content);
    }

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