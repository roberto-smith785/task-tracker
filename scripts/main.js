$(document).ready(function(){

	//when the document loads check if there are task
	/*var task_container = $(".task-list");
	task_container.children().length ? task_container.text() : task_container.text("NO TASK ADDED");*/

	//when the add button is clicked display form
	$(".btn-add").click(function(){
		$(this).toggleClass("btn-add btn-end");
		//change button text to close when add button is pressed
		if($(this).hasClass("btn-add")){
			$(this).text("ADD TASK");
		}else{
			$(this).text("CLOSE");
		}
		$(".form-container").slideToggle(500);
	})

	//when the close button is pressed hide form
	$(".btn-end").click(function(){
		$(this).toggleClass("btn-end btn-add");
		//change button text to add task when close button is pressed
		if($(this).hasClass("btn-end")){
			$(this).text("CLOSE");
		}else{
			$(this).text("ADD TASK");
		}
		$(".form-container").slideToggle(500);
	})

	//when new task is ADDED
	$(".btn-add-task").click(function(){
		var task_value = $("#task").val();
		var time_value = $("#time").val();
		var task_list_container = $(".task-list");

		var row = document.createElement("div");
		var task_container = document.createElement("span");
		var time_container = document.createElement("span");
		var check_box_content = document.createElement("span");
		var checkbox = document.createElement("input");
		checkbox.setAttribute("type","checkbox");
		checkbox.setAttribute("id","completed");
		checkbox.setAttribute("class","checkbox form-check-input form-control");

		task_container.innerHTML = task_value;
		time_container.innerHTML= time_value;


		row.setAttribute("class","row task-row");
		task_container.setAttribute("class","col col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-9 task");
		time_container.setAttribute("class","col col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-2 time");
		check_box_content.setAttribute("class","col checkbox-container form-control-sm");
		check_box_content.append(checkbox);

		var row_content = Array(task_container,time_container,check_box_content);
		for(var element of row_content){
			row.append(element);
		}

		task_list_container.append(row);
		$("#task").val('');
		$("#time").val('');

		var checkboxes = document.querySelectorAll("#completed");
		for(var checkbox of checkboxes){
		var row = checkbox.parentElement.parentElement;
		checkbox.addEventListener("click",()=>{
			checkbox.checked ? row.style="text-decoration:line-through; background:green !important" : row.style="text-decoration:none";
		})
	}
	})


})
