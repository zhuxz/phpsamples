function ShowUserSourceWin(pSender) {
	if ($(pSender).attr("init") == 1) {
		$('#doc-modal-1').modal("toggle");
		//$(this).attr("init", 1);
	} else {
		$('#doc-modal-1').modal({closeViaDimmer:false, width: 240, height:200});
		$(pSender).attr("init", 1);
	}
	
	return true;
}

function Init_Index() {
	var $modal = $('#doc-modal-1');

	//$("#modelframe").on("click", function (e) {
	//	$('#doc-modal-1').modal({closeViaDimmer:false, width: 500, height:500});		
	//	return true;	
	//});

	//$modal.on('open.modal.amui', function(){
	//  alert("open");
	//});

	//$modal.on('opened.modal.amui', function(){
	//  alert("opened");
	//});

	//$modal.on('close.modal.amui', function(){
	//  alert("close");
	//});

	//$modal.on('click', function(e) {
	//	var $target = $(e.target);
	//	alert($target.html())
	//	if (($target).hasClass('js-modal-open')) {
	//		$modal.modal();
	//	} else if (($target).hasClass('js-modal-close')) {
	//		$modal.modal('close');
	//	} else {
	//		$modal.modal();
	//	}
	//});

	//$(function (first_argument) {
	//	$('#doc-modal-1').modal({
	//        relatedTarget: this,
	//        onConfirm: function(options) {
	//          var $link = $(this.relatedTarget).prev('a');
	//          var msg = $link.length ? '你要删除的链接 ID 为 ' + $link.data('id') :
	//            '确定了，但不知道要整哪样';
	//          alert(msg);
	//        },
	//        // closeOnConfirm: false,
	//        onCancel: function() {
	//          alert('算求，不弄了');
	//        }
	//	});
	//	return true;
	//});

	

	//$('#doc-modal-1').on('open.modal.amui', function(){
	//  console.log('第一个演示弹窗打开了');
	//});
}