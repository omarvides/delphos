var parser = require('lucene-query-parser');
var analyzer = require('./analyzer');
var utils = require('./utils')

exports.register = function (server, options, next) {
    
    server.on('request-internal', function (request, event, tags) {
        if(request.query.q && tags.received){
            var query = utils.prepareQuery(request.query.q);
            var results = parser.parse(query);
            var query = analyzer.analyze(results);
            request.server.app.querySet =  query;
        }
    });

    next();
}

exports.register.attributes = {
    name: 'lucene-query',
    version: '1.0.0'
}