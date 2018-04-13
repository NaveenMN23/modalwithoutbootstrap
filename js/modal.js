$(document).ready(() => {
	$("#launchButtonId").click(()=>{
		$("#modal-containerId").show();
	});
	$(".modal-headerclose").click(()=>{
		$("#modal-containerId").hide();
	});
	$(".modal-footertext").click(()=>{
		$("#modal-containerId").hide();
	});
})