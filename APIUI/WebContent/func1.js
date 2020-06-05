
//update Employee
$(document).ready(

		
		function()
		{
			//Show Employee List to be updated
			$("#updateEmployee").click(
			
					function ()
					{
						alert("Employee updated Successfully ....");
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
							"name": $('#name').val(), 
							"phoneno": $('#phoneno').val(), 
							"department": $('#department').val(), 
							"status": $('#status').val(),
							"createddtm": $('#createddt').val(), 
							"createdby": $('#createdby').val(), 
							"updateddtm": $('#updateddt').val(), 
							"updatedby": $('#updatedby').val(), 
							"cid": $('#cid').val(), 
							"cname": $('#cname').val()
						}  
				)
			}
		}
);

//update country
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

