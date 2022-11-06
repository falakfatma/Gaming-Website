let menuLists=document.getElementById('menuLists');
    menuLists.style.maxHeight = '0px'
    function toggledIcon(){
    if( menuLists.style.maxHeight == '0px')
    {
        menuLists.style.maxHeight = '160px'
        }
        else{
            menuLists.style.maxHeight = '0px'
        }
    }