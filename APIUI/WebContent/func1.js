$(document).ready(

		
		function()
		{
			//Show Employee List
			$("#updateCountry").click(
			
					function ()
					{
						alert("Country ....");
						$.ajax(
						{
							type: "PUT",
							contentType : "application/json",
							url : "http://localhost:9090/apii/updatecountrynamehb1",
							dataType : "json",
							data : formTojson()
						}		
						).then
						(
								
						);						
					}
			);
			
			function formTojson()
			{
				return JSON.stringify(
						{
							'cid':$('#cid').val(),
							'cname': $('#cname').val()
						}  
				)
			}
		}
);
