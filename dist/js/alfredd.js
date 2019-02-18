$(function () {

    $.getScript('/dist/js/models/api.js');

    api = new Api( 'http://api.alfredd.localhost/');

    // agencias
    agencies = api.getAllAgencies();

});