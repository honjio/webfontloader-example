// Please use a bundle system such as webpack

import WebFont from 'webfontloader';

WebFont.load({
    google: {
        families: ['Roboto Condensed']
    },
    loading: function() {
        console.log('loading');
    },
    active: function() {
        console.log('active');
    },
    inactive: function() {
        console.log('inactive');
    },
    fontloading: function(familyName, fvd) {
        console.log('fontloading', familyName, fvd);
    },
    fontactive: function(familyName, fvd) {
        console.log('fontactive', familyName, fvd);
    },
    fontinactive: function(familyName, fvd) {
        console.log('fontinactive', familyName, fvd);
    }
});