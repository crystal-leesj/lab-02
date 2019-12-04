'use strict';

function HornImage(img) {
  this.title = img.title;
  this.image_url = img.image_url;
  this.description = img.description;
  this.description = img.keyword;
  this.description = img.horns;
}

HornImage.allImages = [];

HornImage.prototype.render = function() {
  let template = Handlebars.compile($('#photo-template').html());
  console.log('template :', template);
  return template(this);
};


