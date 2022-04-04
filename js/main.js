function btn() {
    if ( document.getElementById("side-bar").classList.contains("show") ) {
        document.getElementById("side-bar").classList.remove('show');
        document.getElementById("side-bar").classList.add('hide');
        document.getElementById("side-bar-hide").classList.remove('hide');
        document.getElementById("side-bar-hide").classList.add('show');
    } else {
        document.getElementById("side-bar").classList.remove('hide');
        document.getElementById("side-bar").classList.add('show');
        document.getElementById("side-bar-hide").classList.remove('show');
        document.getElementById("side-bar-hide").classList.add('hide');
    }
}
