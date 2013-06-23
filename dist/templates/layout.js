(function() {
  if (module.exports == null) {
    module.exports = {};
  }

  module.exports['t'] = function(context) {
    return (function() {
      var $c, $o;
      $c = function(text) {
        switch (text) {
          case null:
          case void 0:
            return '';
          case true:
          case false:
            return '' + text;
          default:
            return text;
        }
      };
      $o = [];
      $o.push("<!DOCTYPE html>\n<html>\n  <head>\n    <title>Block Map</title>");
      $o.push("    " + $c(this.stylesheets()));
      $o.push("  </head>\n  <body>");
      $o.push("    " + $c(this.body()));
      $o.push("  </body>");
      $o.push("  " + $c(this.javascripts()));
      $o.push("</html>");
      return $o.join("\n").replace(/\s(\w+)='true'/mg, ' $1').replace(/\s(\w+)='false'/mg, '');
    }).call(context);
  };

}).call(this);