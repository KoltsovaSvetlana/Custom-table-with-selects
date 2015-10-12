app.directive('multipleSelect', ['$document', function($document) {
    return {
        restrict: 'E',
        templateUrl: './javascript/templates/tplMultipleSelect.html',
        scope: true,
        link: function(scope, element, attr) {
            scope.isOpen = false;
            scope.optionList = [];
            scope.countOptions = 100;

            scope.openList = function (event) {
                event.stopPropagation();
                scope.isOpen=!scope.isOpen;
                if(!scope.optionList.length) {
                    for (var option = 1; option <= scope.countOptions; option++) {
                        scope.optionList.push({
                            label : 'Checkbox ' + option,
                            selected : false
                        });
                    }
                }
            };

            //function getSelectedOptions() {
            //    var selectedOptions = [];
            //
            //    angular.forEach(scope.distinctItems, function(item) {
            //        if (item.selected) {
            //            selectedOptions.push(item.value);
            //        }
            //    });
            //
            //    return selectedOptions;
            //}
            //
            //function bindCollection(collection) {
            //    var predicate = getPredicate();
            //    var distinctItems = [];
            //
            //    angular.forEach(collection, function(item) {
            //        var value = item[predicate];
            //        fillDistinctItems(value, distinctItems);
            //    });
            //
            //    distinctItems.sort(function(obj, other) {
            //        if (obj.value > other.value) {
            //            return 1;
            //        } else if (obj.value < other.value) {
            //            return -1;
            //        }
            //        return 0;
            //    });
            //
            //    scope.distinctItems = distinctItems;
            //
            //    filterChanged();
            //}
            //
            //function filterChanged() {
            //    scope.dropdownLabel = getDropdownLabel();
            //
            //    var predicate = getPredicate();
            //
            //    var query = {
            //        matchAny: {}
            //    };
            //
            //    query.matchAny.items = getSelectedOptions();
            //    var numberOfItems = query.matchAny.items.length;
            //    if (numberOfItems === 0 || numberOfItems === scope.distinctItems.length) {
            //        query.matchAny.all = true;
            //    } else {
            //        query.matchAny.all = false;
            //    }
            //
            //    table.search(query, predicate);
            //}
            //
            //function fillDistinctItems(value, distinctItems) {
            //    if (value && value.trim().length > 0 && !findItemWithValue(distinctItems, value)) {
            //        distinctItems.push({
            //            value: value,
            //            selected: true
            //        });
            //    }
            //}
            //
            //function findItemWithValue(collection, value) {
            //    var found = _.find(collection, function(item) {
            //        return item.value === value;
            //    });
            //
            //    return found;
            //}
        }
    }
}]);