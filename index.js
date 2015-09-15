function Init_Index() {
	var $modal = $('#source');

	$modal.on('click', function(e) {
		var $target = $(e.target);
		alert($target.html())
		if (($target).hasClass('js-modal-open')) {
			$modal.modal();
		} else if (($target).hasClass('js-modal-close')) {
			$modal.modal('close');
		} else {
			$modal.modal();
		}
	});
}