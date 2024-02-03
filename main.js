var EnterCourse = document.querySelector(".addButton"); 

EnterCourse.onclick = function(e){

    addingCourses(); 
    document.querySelector("input").value=" "; 
}

var data =  ''; 


var addingCourses= function(){
        
    var subjectName=document.querySelector("input").value;
    
    data  = data +  `<li>  <input type="checkbox"  name= "check"> <span> ${subjectName} </span>  </li>` ;
    localStorage.setItem("courses", data);

     var oldvalue = localStorage.getItem("courses"); 
     document.querySelector("ul").innerHTML =data; 
     var checkboxes = document.querySelectorAll('.checkBoxList input[type="checkbox"]');

     console.log(checkboxes);

     
 
     for (let i = 0; i < checkboxes.length; i++) {
        checkboxes[i].onclick = function() {
            if (checkboxes[i].checked == true) {
                checkboxes[i].nextElementSibling.classList.add("lineThrough");
            } else {
                checkboxes[i].nextElementSibling.classList.remove("lineThrough");
            }
        }
    }
    

     

}



