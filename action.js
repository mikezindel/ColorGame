$(document).ready(function(){
    $('#start').click(function(){
        $(this).hide();
    });
});

$(document).ready(function(){
	$("#red").prop('disabled', true);
	$("#blue").prop('disabled', true);
	$("#green").prop('disabled', true);
		$('#yellow').click(function(){
			$("#yellow").prop('disabled', true);
			$("#red").prop('disabled', false);
			 $("#imgcolor").attr('src',"Red.png");
		});
		$('#red').click(function(){
			$("#red").prop('disabled', true);
			$("#green").prop('disabled', false);
			$("#imgcolor").attr('src',"Green.png");
		});
		$('#green').click(function(){
			$("#green").prop('disabled', true);
			$("#blue").prop('disabled', false);
			$("#imgcolor").attr('src',"Blue.png");
		});
		$('#blue').click(function(){
			$("#blue").prop('disabled', true);
			$("#imgcolor").attr('src',"Winner.png");
		});
		
		$('#refresh').click(function() {
		location.reload();
		});
		
});

