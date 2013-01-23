
// This uses require.js to structure javascript:
// http://requirejs.org/docs/api.html#define

define(function(require) {
    // Zepto provides nice js and DOM methods (very similar to jQuery,
    // and a lot smaller):
    // http://zeptojs.com/
    var $ = require('zepto');

    // Need to verify receipts? This library is included by default.
    // https://github.com/mozilla/receiptverifier
    require('receiptverifier');

    // Want to install the app locally? This library hooks up the
    // installation button. See <button class="install-btn"> in
    // index.html
    require('./install-button');

    // Write your app here.

    var gem = document.getElementById('gem');
      gem.addEventListener('click', function() {
        var mantra = document.getElementById('mantra');
        if (mantra.style.display) {
          mantra.style.display = null;
        }
        else {
          mantra.style.display = 'block';
        }
    })

});

