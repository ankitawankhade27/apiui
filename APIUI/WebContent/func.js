/*
$.getJSON('http://localhost:9090/api/v1/listemployees', function(data) {
    $.each(data,function(index,emp){
    	var text = `Date: ${emp.age}<br>
            Time: ${emp.ename}<br>`
    		//alert(text);
    		$(".mypanel").html(text);
    })
});
    

var rootURL = "http://localhost:9090/api/v1/listemployees";

$(document).ready(
		function() {
			$.ajax({
				url : "http://localhost:9090/api/v1/listemployees"
			}).then(
					function(data) {
						$.each(data,
								function(index, employee) {
										$('#empList').append(
												'<li>'+
														employee.age+' '+ employee.ename
														+ '</li>');
								});

					});
		});


$('#btnSave').click(function() {
    		addEmployee();
});





function addEmployee() {
	$.ajax({
		type: 'POST',
		contentType: 'application/json',
		url: 'http://localhost:9090/api/v1/addemployee',
		dataType: "json",
		data: formToJSON(),
	});
}

//Helper function to serialize all the form fields into a JSON string
function formToJSON() {
	return JSON.stringify({
		"age": $('#age').val(), 
		"ename": $('#ename').val(), 
		});
}
*/

//Show all employee from db
//update country

$(document).ready(
		function() {
$('#showAllEmployee').click(function() {
	
	$.ajax({
		url :"http://localhost:9090/apii/showallemployeehb1"
	}).then(
			function(data) {
				$.each(data,function(index,employee) {
								$('#empList').append(
									'<li>'+employee.id+' '+ employee.name+' '+employee.phoneno+' '+employee.department+' '+employee.status+' '
									+ employee.createddtm+' '+employee.createdby+' '+employee.updateddtm+ ' '+employee.updatedby+'</li>');
						});

			});
});
});


//Show all employee of Status=active,inactive and suspended
$(document).ready(
		function() {
$('#showAllEmployeebyStatus').click(function() {
	var status = $("#status").val();
	
		$.ajax({
			url :"http://localhost:9090/apii/statushb1/"+status
		}).then(
		function(data) {			
			
			$.each(data,
					function(index,employee) {
							$('#empListbyStatus').append(
									'<li>'+employee.id+' '+ employee.name+' '+employee.phoneno+' '+employee.department+' '+employee.status+' '
									+ employee.createddtm+' '+employee.createdby+' '+employee.updateddtm+ ' '+employee.updatedby+'</li>');
						})

		})
		})
});

//show all Employee by employee id
$(document).ready(
		function() {
$('#showAllEmployeebyId').click(function() {
	var id = $("#id").val();
	
		$.ajax({
			url :"http://localhost:9090/apii/eidhb1/"+id
		}).then(
		function(data) {			
			
			$.each(data,
					function(index,employee) {
							$('#empListbyId').append(
									'<li>'+employee.id+' '+ employee.name+' '+employee.phoneno+' '+employee.department+' '+employee.status+' '
									+ employee.createddtm+' '+employee.createdby+' '+employee.updateddtm+ ' '+employee.updatedby+'</li>');
						})

		})
		})
});

//Show employee by name
$(document).ready(
		function() {
$('#showAllEmployeebyName').click(
		function() {
	                var name = $("#name").val();
                    $.ajax
                       ({
			                  url :"http://localhost:9090/apii/enamehb1/"+name
			                  
                       }).then(function(data)
		                       {			
			                   $.each(data,function(index,employee) 
			                		   {
					                     $('#empListbyName').append(
									     '<li>'+employee.id+' '+ employee.name+' '+employee.phoneno+' '+employee.department+' '+employee.status+' '
									      + employee.createddtm+' '+employee.createdby+' '+employee.updateddtm+ ' '+employee.updatedby+'</li>');
						                }
			                           )
						       })
		                 })

		          });

//Add Employyee

$(document).ready(
		function(){
			$('#addEmployeeButton').click(function()
			{
				addEmployee();
			}
			)
 
			function addEmployee()
					{
						$.ajax({
								type:'POST',
								contentType: 'application/json',
								url: 'http://localhost:9090/apii/addemployeehb1',
								dataType: "json",
								data: formToJSON()
								})
					};
	function formToJSON() 
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
	};
	
});
//Add country

$(document).ready(
		function(){
			$('#addCountry').click(function()
			{
				addCountry();
			}
			
			)

function addCountry()
{
	$.ajax({
		type:'POST',
		contentType: 'application/json',
		url: 'http://localhost:9090/apii/addcountryhb1',
		dataType: "json",
		data: formToJSON()
	})
};
		
	//Function to serialize the field to JSON string	
		
function formToJSON() {
	return JSON.stringify
	(
			{
				"cname": $('#cname').val()
				
		}
	)
};
		});


//delete
$(document).ready(
		          function() {
                             $('#Countrytobedeletdbyname').click(function() 
                            		 {
                            	 		var cname = $("#cname").val();
                            	 		$.ajax({
                            	 				type: 'DELETE',
                            	 				contentType: 'application/json',
                            	 				url: 'http://localhost:9090/apii/deletebycountrynamehb1/'+cname,
                            	 				dataType: "json",
                            	 				data: formToJSONCountryUpdate(),
                            	 				})
                                    })
	
		          			}
		          );


		
