window.addEventListener('load', function() {
  if (window.location.protocol !== 'https:' && !/localhost/.test(window.location.href)) window.location.replace('https://artoor.herokuapp.com');
});