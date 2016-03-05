$(function(){
	$('.loading').hide();
	$('#submit').click(function(){
	 
	var params = {
		Name : $('#con-name').val() ,
		Contact :  $('#con-mail').val() ,
	    Content : $('#con-text').val() 
	}
	// alert(params.Name);
	if(beforeSubmit(params)){
		doSubmit(params);
	}
})
})


function  beforeSubmit(params){
	if(params =="" ||params == undefined){
		alert('不知道哪里出了点错')
		return false;
	}
	else if($.trim(params.Name) == "" || $.trim(params.Content) == "" || $.trim(params.Contact) == ""){
		alert('信息不完整哦')
		return false;
	}
	else if(params.Content.length > 300){
		alert('哎呀内容写太长了')
		return false;
	}
	else{
		return true;
		
	}
}
function doSubmit(params){
	// alert(params.Name)
	$.ajax({
		type: "post",
		url: "http://panming2013.com/mail",
		 dataType: "json",
		 data:params,

		 beforeSend:function(){
		    $('.con-input').attr('disabled','disabled'); 
		    $('.loading').show();
		 },
		 success:function(data){
		 	if(data.Result == true){
		 		alert('发送成功'); 
		 	}
		 	else{
		 		alert('发送失败，')
		 	}
			$('.con-input').removeAttr('disabled'); 
	 		$('.con-input').val(""); 
	 		$('.loading').hide();
		 },
		 error:function(error){
		 	alert('发送失败,请联系QQ：910739015');
		 	$('.con-input').removeAttr('disabled'); 
		 	$('.loading').hide();
		 }
	})
} 