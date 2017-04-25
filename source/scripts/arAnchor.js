/*
 * base on jQuery - arAnchor v1.0
 * Copyright(c) 2016 by brandon
 * Date: 2017-4-25 11:02:13
 */
;
var arAnchor = (function() {
    if ( $('#postAr').length === 0 || $('.headerlink').length === 0 || $(window).width() < 900 ) {
        return function(){};
    }
    return function() {
        var $arContent = $('.post-content'),
        $articleBox = $('.article-box'),
        $arContentAnchor = $arContent.find('.headerlink');
    
        //create an anchorbar
        var $arCatalog = $('<div class="arCatalog">' + 
                           '<div class="arCatalog-line"></div>' +
                           '<div class="arCatalog-list"><dl></dl></div>');
        
        var h2Seq = 1,
            h3Seq = 1;
        $arContentAnchor.each(function(i){
            var $this = $(this),
                acIndex = '',
                $dd = $('<dd><span class="arCatalog-index"></span><a></a><span class="arCatalog-dot"></span></dd>'),
                hTagName = $arContentAnchor[ i ].parentElement.tagName;
            if( hTagName === 'H3' ){
                 acIndex = '' + --h2Seq + '.' + h3Seq++ + '';
                $dd.addClass( 'arCatalog-tack2' );
            }else {
                acIndex = h2Seq;
                h3Seq = 1;
                $dd.addClass( 'arCatalog-tack1' );
            }
            h2Seq++;
            $dd.find('.arCatalog-index').text( acIndex );
            $dd.find('a').attr('href','#');
            $dd.find('a').text( $this[0].title );
            
            $dd.appendTo( $arCatalog.find('dl')[ 0 ] );
        });

        var lineHeight = $arContentAnchor.length > 8 ? 234 : ( $arContentAnchor.length * 28 + 10 );
        $arCatalog.find('.arCatalog-line').css('height', lineHeight );

        $arCatalog.appendTo($( '#arAnchorBar' )[ 0 ]);

        $(window).scroll(function(){
            isHighlight();
        });

        //bind event for arCatalogtacks
        $arCatalog.find('a').each(function(i){
            var $this = $(this);
            $this.click(function(e){
                e.preventDefault();
                $('html,body').animate({ scrollTop: $arContentAnchor.eq(i).offset().top - 80}, 300, 'swing');
            });
        });

        //highlight an arCatalogtack
        function isHighlight(){
            $arContentAnchor.each(function(i){
                var $this = $(this);
                if($this.offset().top - 82 <= sHeight()){
                    $arCatalog.find('dd').removeClass('on');
                    $arCatalog.find('dd').eq(i).addClass('on');
                }
            });
        }

        //get browser's viewHeight
        function cHeight(){
            if(document.all){
                return document.compatMode == "CSS1Compat" ? document.documentElement.clientHeight : document.body.clientHeight;
            }else{
                return self.innerHeight;
            }
        }

        //get scrollbar's scrollHeight
        function sHeight(){
            return document.body.scrollTop + document.documentElement.scrollTop;
        }
    }
}());