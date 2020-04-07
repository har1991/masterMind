/*
var x=document.getElementById("mySelect").value;
function myFunction() {
    var x=document.getElementById("mySelect").value=;
  document.getElementById("values").value = x;
}

let selectItemValue = document.getElementById('itemSelect');

selectItemValue.addEventListener('change', function() {
    let selectedOption = this.options[this.selectedIndex];
    //var handle = selectedOption.getAttribute('data-handle');
    let ItemValue = selectedOption.label;
    let itemText= selectedOption.value;
    document.getElementById("demo-value").value = ItemValue;
    document.getElementById("demo-text").value = itemText;
});



function pushLeft(){
    let a = document.getElementById("Button1").value;
    let b = document.getElementById("Button2").value;
    let c = document.getElementById("Button3").value;
    let d = document.getElementById("Button4").value;
    let e = document.getElementById("Button5").value;
    document.getElementById("Button1").value = b ;
    document.getElementById("Button2").value = c ;
    document.getElementById("Button3").value = d ;
    document.getElementById("Button4").value = e ;
    document.getElementById("Button5").value = a ;     
}
function pushRight(){
    let a = document.getElementById("Button1").value;
    let b = document.getElementById("Button2").value;
    let c = document.getElementById("Button3").value;
    let d = document.getElementById("Button4").value;
    let e = document.getElementById("Button5").value;
    document.getElementById("Button1").value = e ;
    document.getElementById("Button2").value = a ;
    document.getElementById("Button3").value = b ;
    document.getElementById("Button4").value = c ;
    document.getElementById("Button5").value = d ;
    
}

let a = document.getElementById("textBox1");
let b = document.getElementById("textBox2");
let c = document.getElementById("textBox3");
    document.getElementById("textBox2").disabled = true;
    document.getElementById("textBox3").disabled = true;
    

a.onkeyup = function() {
    if (this.value.length === parseInt(this.attributes["maxlength"].value)) {
        document.getElementById("textBox2").disabled = false;
        b.focus();        
    }
}
b.onkeyup = function() {
    if (this.value.length === parseInt(this.attributes["maxlength"].value)) {
        document.getElementById("textBox3").disabled = false;
        c.focus();
    }
}


function emptyFields(){
    
    if (document.getElementById("checkbox").checked ==true){
        document.forms[0].ch1.value = "";
        
    }else if ((document.getElementById("checkbox").checked == false)) {
        document.forms[0].ch1.value = "0";
        }
    }
    

   function disappear() {
       
    if (document.getElementById("checkedDisapear").checked ==true){
        document.getElementById("appaer").style.display = "none";
    }
    else if ((document.getElementById("checkedDisapear").checked ==false)) {

        document.getElementById("appaer").style.display = "inline";
    }

   }
  
  document.getElementById("outside").addEventListener("click", function () {

    document.getElementById("outside").style.height ="116px" ;
    document.getElementById("outside").style.width ="241px" ;
  
  }, true);
  document.getElementById("insdideP").addEventListener("click", function () {

    document.getElementById("outside").style.height ="16px" ;
    document.getElementById("outside").style.width ="141px" ;
  
  }, true);
   
    const setBg = () => {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        document.body.style.backgroundColor = "#" + randomColor;
        color.innerHTML = "#" + randomColor;
      }
      
      genNew.addEventListener("click", setBg);
      setBg()
      */

let colors = ["blue", "red", "green", "orange", "violet", "brown", "yellow"];
let userColors = [];
let computerColors = [];

function addColor(color) {
    if (userColors.length < 4) {
        userColors.push(color);
    }
    console.log("proposition : ", userColors);
}

document.getElementById("circleRed").addEventListener("click", () => {
    addColor(colors[1]);
});
document.getElementById("circleBrown").addEventListener("click", () => {
    addColor(colors[5]);
});
document.getElementById("circleBlue").addEventListener("click", () => {
    addColor(colors[0]);
});
document.getElementById("circleGreen").addEventListener("click", () => {
    addColor(colors[2]);
});
document.getElementById("circleYellow").addEventListener("click", () => {
    addColor(colors[6]);
});
document.getElementById("circleViolet").addEventListener("click", () => {
    addColor(colors[4]);
});
document.getElementById("circleOrange").addEventListener("click", () => {
    addColor(colors[3]);
});

function chooseColor() {
    computerColors = [];
    let randomColor1 = "";
    let randomColor2 = "";
    let randomColor3 = "";
    let randomColor4 = "";
    let filteredColors = [];

    // for (let couleurTrouvées = 0; couleurTrouvées < 4; couleurTrouvées++) {
    //     let alreadyChoose = true;
    //     let randomColor = null;
    //     while (alreadyChoose) {
    //         //tirage d'une couleur au hasaard
    //         //si la couleur est pas présente alors alreadyChoose = false;
    //     }
    //     //ajout de la couleur au tableau 
    // }
    randomColor1 = colors[Math.floor(Math.random() * colors.length)];
    computerColors.push(randomColor1);
    filteredColors = colors.filter(
        (colors) => !computerColors.includes(colors)
    );
    randomColor2 =
        filteredColors[Math.floor(Math.random() * filteredColors.length)];
    computerColors.push(randomColor2);
    filteredColors = filteredColors.filter(
        (filteredColors) => !computerColors.includes(filteredColors)
    );
    randomColor3 =
        filteredColors[Math.floor(Math.random() * filteredColors.length)];
    computerColors.push(randomColor3);
    filteredColors = filteredColors.filter(
        (filteredColors) => !computerColors.includes(filteredColors)
    );
    randomColor4 =
        filteredColors[Math.floor(Math.random() * filteredColors.length)];
    computerColors.push(randomColor4);
    filteredColors = filteredColors.filter(
        (filteredColors) => !computerColors.includes(filteredColors)
    );
    console.log(computerColors);
}
function compare() {
    document.getElementById("firstCircle").style.background = "grey";
    document.getElementById("secondCircle").style.background = "grey";
    document.getElementById("thirdCircle").style.background = "grey";
    document.getElementById("fourthCircle").style.background = "grey";
    let noire = 0;
    let blanche = 0;
    userColors = [];
    let firstColor = document.getElementById("firstVariable").value;
    let secondColor = document.getElementById("secondVariable").value;
    let thirdColor = document.getElementById("thirdVariable").value;
    let fourthColor = document.getElementById("fourthVariable").value;
    userColors.push(firstColor, secondColor, thirdColor, fourthColor);

    for (var i = 0; i < userColors.length; i++) {
        if (userColors[i] == computerColors[i]) {
            noire = noire + 1;
        } else if (computerColors.includes(userColors[i])) {
            blanche = blanche + 1;
        }
    }

    console.log("black :", noire);
    console.log("white :", blanche);
    if (noire == 1 && blanche == 0) {
        document.getElementById("firstCircle").style.background =
            "rgba(24, 23, 23, 0.904)";
    } else if (noire == 1 && blanche == 1) {
        document.getElementById("firstCircle").style.background = "black";
        document.getElementById("secondCircle").style.background = "red";
    } else if (noire == 1 && blanche == 2) {
        document.getElementById("firstCircle").style.background = "black";
        document.getElementById("secondCircle").style.background = "red";
        document.getElementById("thirdCircle").style.background = "red";
    } else if (noire == 1 && blanche == 3) {
        document.getElementById("firstCircle").style.background = "black";
        document.getElementById("secondCircle").style.background = "red";
        document.getElementById("thirdCircle").style.background = "red";
        document.getElementById("fourthCircle").style.background = "red";
    } else if (noire == 2 && blanche == 0) {
        document.getElementById("firstCircle").style.background = "black";
        document.getElementById("secondCircle").style.background = "black";
    } else if (noire == 2 && blanche == 1) {
        document.getElementById("firstCircle").style.background = "black";
        document.getElementById("secondCircle").style.background = "black";
        document.getElementById("thirdCircle").style.background = "red";
    } else if (noire == 2 && blanche == 2) {
        document.getElementById("firstCircle").style.background = "black";
        document.getElementById("secondCircle").style.background = "black";
        document.getElementById("thirdCircle").style.background = "red";
        document.getElementById("fourthCircle").style.background = "red";
    } else if (noire == 3 && blanche == 0) {
        document.getElementById("firstCircle").style.background = "black";
        document.getElementById("secondCircle").style.background = "black";
        document.getElementById("thirdCircle").style.background = "black";
    } else if (noire == 3 && blanche == 1) {
        document.getElementById("firstCircle").style.background = "black";
        document.getElementById("secondCircle").style.background = "black";
        document.getElementById("thirdCircle").style.background = "black";
        document.getElementById("fourthCircle").style.background = "red";
    } else if (noire == 4) {
        document.getElementById("firstCircle").style.background = "black";
        document.getElementById("secondCircle").style.background = "black";
        document.getElementById("thirdCircle").style.background = "black";
        document.getElementById("fourthCircle").style.background = "black";
    } else if (blanche == 4) {
        document.getElementById("firstCircle").style.background = "red";
        document.getElementById("secondCircle").style.background = "red";
        document.getElementById("thirdCircle").style.background = "red";
        document.getElementById("fourthCircle").style.background = "red";
    } else if (blanche == 3) {
        document.getElementById("firstCircle").style.background = "red";
        document.getElementById("secondCircle").style.background = "red";
        document.getElementById("thirdCircle").style.background = "red";
    } else if (blanche == 2) {
        document.getElementById("firstCircle").style.background = "red";
        document.getElementById("secondCircle").style.background = "red";
    } else if (blanche == 1) {
        document.getElementById("firstCircle").style.background = "red";
    }
}
