(function(){

angular.module('ui.bootstrap.demo').controller('ModalDemoCtrl', function ($uibModal, $log, $document) {
    
    var $ctrl = this;

    $ctrl.items = ['item1', 'item2', 'item3'];

    $ctrl.openComponentModal = function () {
        var modalInstance = $uibModal.open({
            animation: true,
            component: 'modalComponent',
            resolve: {
                items: function () {
                    return $ctrl.items;
                }
            }
        });

        modalInstance.result.then(function (selectedItem) {
            $ctrl.selected = selectedItem;
        }, function () {
            $log.info('modal-component dismissed at: ' + new Date());
        });

    };

    $ctrl.toggleAnimation = function () {
        $ctrl.animationsEnabled = !$ctrl.animationsEnabled;
    };
});

})();



