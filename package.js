Package.describe({
  summary: "Provides bootstrap 3."
});

Package.on_use(function (api) {
  api.use('jquery');
  api.use('bootstrap-3');
  var path = Npm.require('path');
  

    
  var asset_path = path.join('bootstrap-3');
    
//    css
    
  // api.add_files(path.join(asset_path, 'css', 'bootstrap.css'), 'client');
  api.add_files(path.join('bootstrap-override.css'), 'client');
  api.add_files(path.join(asset_path, 'css', 'jquery-ui-1.10.2.custom.css'), 'client');
  api.add_files(path.join(asset_path, 'css', 'font-awesome.css'), 'client');
  api.add_files(path.join(asset_path, 'css', 'layout.css'), 'client');
  api.add_files(path.join(asset_path, 'css', 'elements.css'), 'client');
  api.add_files(path.join(asset_path, 'css', 'icons.css'), 'client');

    
//homecss
    
  api.add_files(path.join(asset_path, 'csshome', 'bootstrap-theme.css'), 'client');
  api.add_files(path.join(asset_path, 'csshome', 'carousel.css'), 'client');
  api.add_files(path.join(asset_path, 'csshome', 'magnific-popup.css'), 'client');
  api.add_files(path.join(asset_path, 'csshome', 'theme.css'), 'client');

  
    
    
  
//js
    
  // api.add_files(path.join(asset_path, 'js', 'bootstrap.js'), 'client');
  api.add_files(path.join(asset_path, 'js', 'jquery-ui-1.10.2.custom.min.js'), 'client');
  api.add_files(path.join(asset_path, 'js', 'jquery.knob.js'), 'client');
  api.add_files(path.join(asset_path, 'js', 'jquery.flot.js'), 'client');
  api.add_files(path.join(asset_path, 'js', 'jquery.flot.stack.js'), 'client');
  api.add_files(path.join(asset_path, 'js', 'jquery.flot.resize.js'), 'client');
  // api.add_files(path.join(asset_path, 'js', 'theme.js'), 'client');
    
//imgs
api.add_files(path.join(asset_path, 'img', 'logo.png'),"client");
  api.add_files(path.join(asset_path, 'img', 'ico-table-new.png'),"client");
  api.add_files(path.join(asset_path, 'img', 'ico-table-edit.png'),"client");
  api.add_files(path.join(asset_path, 'img', 'ico-table-delete.png'),"client");
  api.add_files(path.join(asset_path, 'img', 'btn-tool.png'),"client");
  api.add_files(path.join(asset_path, 'img', 'ico-arrow-black.png'),"client");
  api.add_files(path.join(asset_path, 'img', 'btn-shuffle.png'),"client");
  api.add_files(path.join(asset_path, 'img', 'btn-setting.png'),"client");
  api.add_files(path.join(asset_path, 'img', 'btn-attach.png'),"client");
  api.add_files(path.join(asset_path, 'img', 'ico-phone.png'),"client");
  api.add_files(path.join(asset_path, 'img', 'ico-mail.png'),"client");
  api.add_files(path.join(asset_path, 'img', 'table-img.png'),"client");
  api.add_files(path.join(asset_path, 'img', 'ico-gallery-edit.png'),"client");
  api.add_files(path.join(asset_path, 'img', 'ico-gallery-trash.png'),"client");

   api.add_files(path.join(asset_path, 'jshome', 'cbpAnimatedHeader.min.js'), 'client');
   api.add_files(path.join(asset_path, 'jshome', 'classie.js'), 'client');
   api.add_files(path.join(asset_path, 'jshome', 'imagesloaded.pkgd.min.js'), 'client');
   api.add_files(path.join(asset_path, 'jshome', 'isotope.min.js'), 'client');
   api.add_files(path.join(asset_path, 'jshome', 'jquery.flexslider-min.js'), 'client');
   api.add_files(path.join(asset_path, 'jshome', 'jquery.magnific-popup.min.js'), 'client');
   api.add_files(path.join(asset_path, 'jshome', 'jquery.nav.js'), 'client');
   api.add_files(path.join(asset_path, 'jshome', 'jquery.scrollTo.js'), 'client');
   api.add_files(path.join(asset_path, 'jshome', 'jquery.mb.YTPlayer.js'), 'client');
   api.add_files(path.join(asset_path, 'jshome', 'modernizr.custom.js'), 'client');
   api.add_files(path.join(asset_path, 'jshome', 'owl.carousel.min.js'), 'client');
   api.add_files(path.join(asset_path, 'jshome', 'scrollReveal.js'), 'client');
 
  // fonts
  api.add_files(path.join(asset_path, 'font', 'glyphicons-halflings-regular.eot'), 'client');
  api.add_files(path.join(asset_path, 'font', 'glyphicons-halflings-regular.ttf'), 'client');
  api.add_files(path.join(asset_path, 'font', 'glyphicons-halflings-regular.svg'), 'client');
  api.add_files(path.join(asset_path, 'font', 'glyphicons-halflings-regular.woff'), 'client');

  // XXX this makes the paths to the icon sets absolute. it needs
  // to be included _after_ the standard bootstrap css so
  // that its styles take precedence.
});
