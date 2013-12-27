/*
 * 
 * powered by Manifaktüre
 * 
 * @author      Tolga Arican
 * @website     http://www.manifakture.com
 * @version     1.0.3
 * 
 * 1.0.3
 * Bug fix
 * 
 * 1.0.2
 * Added support for IE10+
 * 
 * 1.0.1
 * First release
 * 
 */

(function($) {
            
    $.UFIEWarning = function(options) {
        
        var mo = $.extend({}, $.UFIEWarning.defaults, options);
        
        var verArr = $.browser.version.split('.');
        var verNum = Number(verArr[0]);

        if ((!$.browser.msie || ($.browser.msie && verNum >= 9)) && !mo.force) return true;
        
        var browsers = '';
        
            if (mo.firefox)
                browsers += '<div>*&nbsp;<a href="http://www.mozilla.com/en-US/firefox/" target="_blank" style="text-decoration:underline !important; color:'+mo.txColor+' !important;">firefox</a></div>';
            if (mo.rockmelt)
                browsers += '<div>*&nbsp;<a href="http://www.rockmelt.com/" target="_blank" style="text-decoration:underline !important; color:'+mo.txColor+' !important;">rockmelt</a></div>';
            if (mo.chrome)
                browsers += '<div>*&nbsp;<a href="http://www.google.com/chrome" target="_blank" style="text-decoration:underline !important; color:'+mo.txColor+' !important;">chrome</a></div>';
            if (mo.safari)
                browsers += '<div>*&nbsp;<a href="http://www.apple.com/safari/download/" target="_blank" style="text-decoration:underline !important; color:'+mo.txColor+' !important;">safari</a></div>';
            if (mo.opera)
                browsers += '<div>*&nbsp;<a href="http://www.opera.com/download/" target="_blank" style="text-decoration:underline !important; color:'+mo.txColor+' !important;">opera</a></div>';
        
        
        var container = '<div id="uf-ie-warning" style="width:100%; height:100%; z-index:9999; position:fixed; top:0; left:0; background-color:'+mo.bgColor+' !important; color:'+mo.txColor+' !important;">';
            container += '<div id="uf-ie-warning-inner" style="position: absolute; top:50%; left: 50%; margin-left:-300px; width:600px; font-family:Courier,\'Courier New\',monospace; line-height:1.5; font-size:16px;"><div style="text-align:center; margin-bottom:20px;"><span style="background-color:#fff; color:'+mo.bgColor+'; padding:2px 5px;">WARNING</span></div>';
            container += '<div style="margin-bottom: 20px;">'+mo.warning+'</div>';
            container += '<div>'+browsers+'</div>';
            container += '<div style="text-align:center; margin-top:40px;"><a href="javascript:$.UFIEWarning.close()" style="text-decoration: none !important; color:'+mo.txColor+' !important;">'+mo.cont+'</a></div>';
            container += '</div></div>';
            
        $(container).appendTo('body');
        
        $('#uf-ie-warning-inner').css({ 'margin-top': -1*$('#uf-ie-warning-inner').height()/2 });
        $('#uf-ie-warning').show();
        
        if (mo.autoClose) {
            setTimeout(function() { $.UFIEWarning.close(); },mo.autoTime);
        }
    }
    
    $.UFIEWarning.close = function() {
        $('#uf-ie-warning').remove();
    }
    
    // DEFAULTS - change/overwrite here
    $.UFIEWarning.defaults = {
        autoTime        : 12000,
        force           : false,
        autoClose       : false,
        firefox         : true,
        rockmelt        : false,
        chrome          : true,
        safari          : true,
        opera           : true,
        warning         : 'O da nesi!? Internet Explorer görüyoruz, senelerden sonra... Daha iyi, daha hızlı, daha güvenli modern bir tarayıcıya geçmenin vakti gelmiş. Alttaki tarayıcılardan birini deneyin kesinlikle!',
        cont            : 'Yine de Siteye Gir',
        bgColor         : '#0000cd',
        txColor         : '#ffffff'
    };
    
})(jQuery);
