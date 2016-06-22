var maxLength = 20;

/* WRITE ARTICLES LINKS UNTIL MAXLENGTH IS ACHIEVED------------------------------------------------------------------*/
/* FUNCTION TO WRITE THE LIST OF ARTICLES */
/* APPEND TO THE LIST PAGE*/

function returnFullList() {
    var fullList = "";
    for (var i = 1; i <= maxLength; i++) {
        var listItem = '<li id="list' + i + '"><a href="#article' + i + '" id="link' + i + '">&nbsp;</a></li>';
        $("#articleList").append(listItem);
    }
}
fullList = window.returnFullList();






/* WRITE ARTICLES UNTIL MAXLENGTH IS ACHIEVED------------------------------------------------------------------*/

for (i = 1; i <= maxLength; i++) {
    document.write(
        '<div data-role="page" id="article' + i + '">' +
        '  <div data-role="header" data-position="inline" class="wow fadeInDown">' +
        '    <a href="#home" data-role="button" data-icon="home"></a>' +
        '    <h1 id="articleHeader' + i + '">&nbsp;</h1>' +
        '    <a href="#" id="openButton' + i + '" data-role="button" data-theme="a" data-icon="search"' +
        '      class="ui-btn-right" rel="external"></a>' +
        '    <a href="#" id="openButton' + i + '" data-role="button" data-theme="a" data-icon="search"' +
        '      class="ui-btn-right" rel="external"></a>' +
        '  </div>' +
        '  <div data-role="content">' +
        '    <div id="articleContent' + i + '" class="articleContent"></div>' +
        '    <div id="controlgroup" data-role="controlgroup" data-type="horizontal">' +
        '      <a href="#article' + String(i - 1) + '" data-role="button"  class="ui-btn ui-btn-inline  waves-effect waves-button waves-effect waves-button" data-icon="arrow-l"' +
        '        data-inline="true" class="prevButton">Prev</a>' +
        '      <a href="#article' + String(i + 1) + '" data-role="button"  class="ui-btn ui-btn-inline  waves-effect waves-button waves-effect waves-button"' +
        '        data-inline="true" class="nextButton" data-iconpos="right">Next</a>' +
        '    </div>' +
        '  </div>' +
        '</div>'
    );
}

/* FAVOURITES ARRAY */
function favArray(){
    var favArray = [];
    for (i = 1; i <= maxLength; i++) {
        $("#addFav").click(function () {
            $("#article' + i + '").push(favArray);
        });
    }
    console.log(favArray);
}
/*favend*/
favArray = window.favArray();
/* DYNAMIC URL DEPENDING ON WHERE YOU'RE CLICKING ON THE FIRST PAGE */
/* CLICK CONTENT APPEND ON THE PROCESSED URL */
$(function () {
    var cat = "";
    $("#home li a").click(function () {
        // TODO --> ADD CSS WLLH
        cat = ($(this).text());
        getOnlineFeed('http://feeds.thescoreesports.com/' + cat + '.rss');
        $(this).css("color", "#f3f3f3");
    });
    $("#list li a").click(function () {
        $(this).css("color", "#d6d3d3");
    });

    // LANG FUNCTION
    $("#lang").click(function () {
        $("#langlist").fadeToggle("slow");
    });

    //  ZOOM FUNCTION
    $(".zoom").click(function () {
        $("#zoomlist").fadeToggle("slow");
    });

    $("#zoomIn").click(function () {
        $("#zoomerElement li a, p").css("font-size", "150%");
    });
    $("#zoomOut").click(function () {
        $("#zoomerElement li a, p").css("font-size", "70%");
    });

    $("#resetZoom").click(function () {
        $("#zoomerElement li a, p").css("font-size", "100%");
    });


    // THEME FUNCTION 
    $(".theme").click(function () {
        $("#bottomsheetlist").fadeToggle("slow");
    });
    $(".blue").click(function () {
        $("#theme").attr("href", "css/nativedroid2.color.light-blue.css");
    });

    $(".green").click(function () {
        $("#theme").attr("href", "css/nativedroid2.color.light-green.css");
    });
    $(".lime").click(function () {
        $("#theme").attr("href", "css/nativedroid2.color.lime.css");
    });

    // Favs
    $(".fav").click(function () {
        $("#favlist").fadeToggle("slow");
    });

});

/* functions */
var listEntries = function (json) {

    if (!json.responseData.feed.entries) return false;
    $('#widgetTitle').text(json.responseData.feed.title);
    var articleLength = json.responseData.feed.entries.length;

    articleLength = (articleLength > maxLength) ? maxLength : articleLength;
    for (var i = 1; i <= articleLength; i++) {

        /* FOR EACH ARTICLES THERE IS */
        var entry = json.responseData.feed.entries[i - 1];

        /* A LINK TO IT */
        $('#link' + i).text(entry.title);
        /* A HEADER TO DISPLAY */
        $('#articleHeader' + i).text(entry.title);
        /* A LINK TO IT */
        $('#openButton' + i).attr('href', entry.link);
        /* THE ARTICLE'S CONTENT */
        $('#articleContent' + i).append(entry.content);

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
var getOnlineFeed = function (url) {
    var script = document.createElement('script');
    script.setAttribute('src', 'http://ajax.googleapis.com/ajax/services/feed/load?callback=listEntries&hl=ja&output=json-in-script&q='
                        + encodeURIComponent(url)
                        + '&v=1.0&num=' + maxLength);
    script.setAttribute('type', 'text/javascript');
    document.documentElement.firstChild.appendChild(script);
    // Append tu script dans le <head> du html


};