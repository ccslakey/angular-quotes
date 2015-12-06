angular.module('app', []);

angular.module('app').controller("MainController", ['$http', function($http) {
    var vm = this;
    vm.title = 'Angularish Quotes';
    // declare input box
    vm.searchInput = '';

    vm.addQuote = function() {
        vm.quotes.push(vm.new);
        vm.new = {};
    };

    $http.get('/quotes').success(function(data) {
        vm.quotes = data
            // console.log(vm.quotes) its our quotesDB.js array! wewt
    })

    // vm.quotes = quotes


    vm.orders = [{
            id: 1,
            title: 'Year Ascending',
            key: 'year',
            reverse: false
        }, {
            id: 2,
            title: 'Year Descending',
            key: 'year',
            reverse: true
        }, {
            id: 3,
            title: 'Author Ascending',
            key: 'author',
            reverse: false
        }, {
            id: 4,
            title: 'Author Descending',
            key: 'author',
            reverse: true
        }, {
            id: 5,
            title: 'Said in: Ascending',
            key: 'in',
            reverse: false
        }, , {
            id: 6,
            title: 'Said in: Descending',
            key: 'in',
            reverse: true
        }

    ];
    vm.order = vm.orders[0];

}]);
