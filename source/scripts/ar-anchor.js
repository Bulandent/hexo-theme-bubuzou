/*
 * base on jQuery - arAnchor v1.0
 * Copyright(c) 2016 by typeR
 * Date: 2017-5-27 16:10:41
 */
;
var arAnchor = (function() {
    if ( $('#postAr').length === 0 || $('.headerlink').length === 0 || $(window).width() < 900 ) {
        return function(){};
    }
    return function() {
        var $arContent = $('.post-content'),
        $arContentAnchor = $arContent.find('.headerlink');
    
        //create an anchorbar
        var $arCatalog = $('<div class="arCatalog">' + 
                           '<div class="arCatalog-line"></div>' +
                           '<div class="arCatalog-list"><dl></dl></div>');
        
        var h2Seq = 1,
			h3Seq = 1,
			currScrollHeight = -1,
			hasScrollToBottom = false;  // 已经滚动到底部
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
        var maxCatalogCount = parseInt((cHeight() - 180)/28); // 屏幕内能容纳的最大目录个数
        var lineHeight = $arContentAnchor.length > maxCatalogCount ? (maxCatalogCount * 28 + 10) : ( $arContentAnchor.length * 28 + 10 );
        $arCatalog.find('.arCatalog-line').css('height', lineHeight );
        $arCatalog.find('.arCatalog-list').css('maxHeight', lineHeight - 10);
        $arCatalog.find('dd').eq(0).addClass('on');
        $arCatalog.appendTo($( '#arAnchorBar' )[ 0 ]);
        
        var catalogLength = $arContentAnchor.length,
            $firstCatalog = $arCatalog.find('dd'),
            catalogHeight = $firstCatalog[0].offsetHeight || 0;
            viewRange = [];

        // the viewRange of the catalogBox
        var rangeTop = $firstCatalog.offset().top - sHeight(),
        rangeBottom = rangeTop + 8 * catalogHeight - catalogHeight / 2 ;
        viewRange.push( rangeTop );
        viewRange.push( rangeBottom );

        $(window).scroll(function(){
			var tempScrollHeight = sHeight()
			isHighlight();
			if (!hasScrollToBottom && tempScrollHeight > currScrollHeight || tempScrollHeight < currScrollHeight) {  // 向下滚动，如果目录已经滚动到最底部，则不进行滚动
				currScrollHeight = tempScrollHeight
				scrollCatalog();
			}
        });

        // auto scroll catalogBox for active catalog in the view
        function scrollCatalog() {
            var $currentCatalog = $arCatalog.find('dd.on'),
				$catalogList = $arCatalog.find('.arCatalog-list'),
				$catalogDl = $catalogList.find('dl');

			var curr = $currentCatalog[0].getBoundingClientRect(),
				list = $catalogDl[0].getBoundingClientRect(),
				body = $catalogList[0].getBoundingClientRect();
			
			if (curr.bottom + 4 * 28 >= body.bottom ) {
				$catalogDl.css('marginTop', Math.min(0,   body.bottom - list.bottom))
				hasScrollToBottom = true
			} else {
				$catalogDl.css('marginTop', 0)
				hasScrollToBottom = false
			}
        }

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
			let {
				scrollTop,
				scrollHeight,
				clientHeight
			} = document.scrollingElement;
				
			// 当前滚动高度 + 视口高度 >= 文档总高度
			if (scrollTop + clientHeight >= scrollHeight) {
				$arCatalog.find('dd').removeClass('on');
                $arCatalog.find('dd').eq($firstCatalog.length - 1).addClass('on')
			} else {
				$arContentAnchor.each(function(i){
					var $this = $(this);
					if($this.offset().top - 82 <= sHeight()){
						$arCatalog.find('dd').removeClass('on');
						$arCatalog.find('dd').eq(i).addClass('on');
					}
				});
			}
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