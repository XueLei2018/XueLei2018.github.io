window.onload = function(){
    var icons = document.getElementsByClassName('right-toolbar-icon');
    console.log(icons);
    for(var i = 0; i < icons.length; i++){
        var title = icons[i].attributes['data-before'].value;
        console.log(title);
    }
}