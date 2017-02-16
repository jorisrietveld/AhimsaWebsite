/**
 * Created by Joris rietveld on 16-2-17.
 */
app.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
        .when('/home', {
            templateUrl: Routing.generate('route_dispacher', {template: "FrontEnd:home.html.twig"})
        })
        .when('/', {
            templateUrl: Routing.generate('route_dispacher', {template: "FrontEnd:home.html.twig"})
        })
        .when('/appartement', {
            templateUrl: Routing.generate('route_dispacher', {template: "FrontEnd:appartement.html.twig"})
        })
        .when('/camping', {
            templateUrl: Routing.generate('route_dispacher', {template: "FrontEnd:camping.html.twig"})
        })
        .when('/contact-en-boeken', {
            templateUrl: Routing.generate('route_dispacher', {template: "FrontEnd:contact.html.twig"})
        })
        .when('/kees-bij-joris', {
            templateUrl: Routing.generate('route_dispacher', {template: "FrontEnd:joris.html.twig"})
        })
        .when('/de-omgeving', {
            templateUrl: Routing.generate('route_dispacher', {template: "FrontEnd:omgeving.html.twig"})
        })
        .when('/fotos', {
            templateUrl: Routing.generate('route_dispacher', {template: "FrontEnd:fotos.html.twig"})
        })
        .when('/recencies', {
            templateUrl: Routing.generate('route_dispacher', {template: "FrontEnd:recencies.html.twig"})
        });
    }
]);