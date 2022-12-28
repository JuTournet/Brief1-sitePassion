function darkMode() {
    var element = document.body;
    element.classList.toggle("dark");
    if ( document.getElementById("btnMode").classList.contains('fa-sun') ){
      document.getElementById("btnMode").classList.remove('fa-sun');
      document.getElementById("btnMode").classList.add('fa-moon');
    }
    else if ( document.getElementById("btnMode").classList.contains('fa-moon') ) {
      document.getElementById("btnMode").classList.remove('fa-moon');
      document.getElementById("btnMode").classList.add('fa-sun');
    }
  }

function showImage() {
  var element = document.getElementById("imageHidden");
  if ( document.getElementById("imageHidden").classList.contains('showImage') ){
    document.getElementById("imageHidden").classList.remove('showImage');
    document.getElementById("imageHidden").classList.add('hideImage');
  }
  else if ( document.getElementById("imageHidden").classList.contains('hideImage') ) {
    document.getElementById("imageHidden").classList.remove('hideImage');
    document.getElementById("imageHidden").classList.add('showImage');
  }
}
