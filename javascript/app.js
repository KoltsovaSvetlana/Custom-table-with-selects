var app = angular.module('tableApp', []);
app.controller('tableCtrl', function($scope){
    $scope.countRow = 50;
    $scope.countCol = 50;

    $scope.createTable = function(max_row, max_col) {
        var tableData = [];
        for (var row = 0; row < max_row; row++) {
            tableData[row] = [];
            for (var col = 0; col < max_col; col++) {
                tableData[row].push({name: 'row_' + row + '&col_' + col});
            }
        }
        console.log("tableData", tableData);
        return tableData;
    };

    $scope.table = $scope.createTable($scope.countRow, $scope.countCol);
});
