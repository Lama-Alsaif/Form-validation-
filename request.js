function im_blue1(){ 
    box1.style.borderColor = "blue";
};

function im_blue2(){ 
    box2.style.borderColor = "blue";
};

function validateForm() {
    let fname = document.forms["myForm"]["fname"].value;
    let PhnNum = document.forms["myForm"]["PhnNum"].value;
    let check = [];

    const cls1 = document.getElementById("class1");
    const cls2 = document.getElementById("class2");
    const cls3 = document.getElementById("class3");
    const cls4 = document.getElementById("class4");

    const ddl = document.getElementById("cities");
    var ddlValue = ddl.options[ddl.selectedIndex].value;

    
     
    

    if (fname == "") {
      document.getElementById("fname_msg").innerHTML = "Name must be filled out";
      return false;
    }
    if (PhnNum == "") {
      document.getElementById("PhnNum_msg").innerHTML = "Phone number must be filled out";
      return false;
    }

    if(!/^[a-zA-Z]*$/g.test(fname)){
        document.getElementById("fname_msg").innerHTML = "Enter letter only";
        return false;
    }

    if(cls1.checked){
        check.push(cls1.value);
    }
    if(cls2.checked){
        check.push(cls2.value);
    }
    if(cls3.checked){
        check.push(cls3.value);
    }
    if(cls4.checked){
        check.push(cls4.value);
    }
    if(check.length <= 0){
        document.getElementById("chkbox_msg").innerHTML = "pick at least 1 class";
        return false;
    }
    if(check.length > 2){
        document.getElementById("chkbox_msg").innerHTML = "2 classes max";
        return false;
    }
    
    if (ddlValue == "select")
    {
     document.getElementById("dd_msg").innerHTML = "Please select a city";
     return false;

    
    }
    let chk0= check[0];
    let chk1 = check[1];
    let ddv = ddlValue;

    localStorage.setItem("first_name",fname);
    localStorage.setItem("Phone_number",PhnNum);
    localStorage.setItem("CITY",ddv);
    localStorage.setItem("CLASS1",chk0);
    localStorage.setItem("CLASS2",chk1);

      
  };

const box1 = document.querySelector("#fname");
const box2 = document.querySelector("#PhnNum");
box1.addEventListener("input", im_blue1);
box2.addEventListener("input", im_blue2);

const sub = document.querySelector("#submit");
sub.addEventListener("click" , validateForm);

const checks = document.querySelectorAll('input[type=checkbox]');

    



