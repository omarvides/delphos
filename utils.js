
var _ = require('lodash');

function prepareQuery (query) {
    query = unescape(query);
    var padStrings = ['AND','OR','TO'];
    var removeStrings = [' '];

    _.forEach(removeStrings, function (string) {
        query = query.replace(string, '');
    });

    _.forEach(padStrings, function (string) {
        query = query.replace(string, ' ' + string + ' ');
    });
    return query;
}

module.exports.prepareQuery = prepareQuery;
