
let colors = ['blue', 'red' , 'green' , 'orange' , 'violet' , 'brown','yellow'] ;
let userColors = [];
let computerColors = [] ; 
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
console.log("proposition : ", userColors);

function chooseColor(){
    
    computerColors = [];
    let randomColor1 ="";
    let randomColor2="";
    let randomColor3="";
    let randomColor4="";
    let filteredColors=[];
        randomColor1 = colors[Math.floor(Math.random()*colors.length)];
        computerColors.push(randomColor1);
        filteredColors = colors.filter(colors => !computerColors.includes(colors));
        randomColor2 = filteredColors[Math.floor(Math.random()*filteredColors.length)];
        computerColors.push(randomColor2);
        filteredColors = filteredColors.filter(filteredColors => !computerColors.includes(filteredColors));
        randomColor3 = filteredColors[Math.floor(Math.random()*filteredColors.length)];
        computerColors.push(randomColor3);
        filteredColors = filteredColors.filter(filteredColors => !computerColors.includes(filteredColors));
        randomColor4 = filteredColors[Math.floor(Math.random()*filteredColors.length)];
        computerColors.push(randomColor4);
        filteredColors = filteredColors.filter(filteredColors => !computerColors.includes(filteredColors));
        console.log(computerColors);
        userColors =[];
        }
        function compare() {
            document.getElementById("firstCircle").style.background="grey";
            document.getElementById("secondCircle").style.background="grey";
            document.getElementById("thirdCircle").style.background="grey";
            document.getElementById("fourthCircle").style.background="grey";
            let noire = 0 ;
            let blanche = 0;   
            for (var i = 0 ; i < userColors.length  ; i++ ){
                if(userColors[i]== computerColors[i]){
                    noire = noire + 1 ;
                }
                else if (computerColors.includes(userColors[i])){
                    blanche = blanche + 1;
                    
                }
                }
                
                console.log("black :" ,noire);
                console.log("white :" ,blanche);
                if (noire == 1 && blanche == 0){
                    document.getElementById("firstCircle").style.background="rgba(24, 23, 23, 0.904)";
                }
                else if (noire == 1 && blanche ==1){
                    document.getElementById("firstCircle").style.background="black";
                    document.getElementById("secondCircle").style.background="red";
                }else if(noire == 1 && blanche == 2){
                    document.getElementById("firstCircle").style.background="black";
                    document.getElementById("secondCircle").style.background="red";
                    document.getElementById("thirdCircle").style.background="red";
                }else if (noire == 1 && blanche == 3 ){
                    document.getElementById("firstCircle").style.background="black";
                    document.getElementById("secondCircle").style.background="red";
                    document.getElementById("thirdCircle").style.background="red";
                    document.getElementById("fourthCircle").style.background="red";
                }
                else if (noire == 2 && blanche == 0){
                    document.getElementById("firstCircle").style.background="black";
                    document.getElementById("secondCircle").style.background="black";
                }
                else if (noire == 2 && blanche == 1){
                    document.getElementById("firstCircle").style.background="black";
                    document.getElementById("secondCircle").style.background="black";
                    document.getElementById("thirdCircle").style.background="red";
                }
                else if (noire == 2 && blanche == 2){
                    document.getElementById("firstCircle").style.background="black";
                    document.getElementById("secondCircle").style.background="black";
                    document.getElementById("thirdCircle").style.background="red";
                    document.getElementById("fourthCircle").style.background="red";
                }
                else if (noire == 3 && blanche == 0){
                    document.getElementById("firstCircle").style.background="black";
                    document.getElementById("secondCircle").style.background="black";
                    document.getElementById("thirdCircle").style.background="black";
                    
                }
                else if (noire == 3 && blanche == 1){
                    document.getElementById("firstCircle").style.background="black";
                    document.getElementById("secondCircle").style.background="black";
                    document.getElementById("thirdCircle").style.background="black";
                    document.getElementById("fourthCircle").style.background="red";
                    
                }else if  (noire == 4 ){
                    document.getElementById("firstCircle").style.background="black";
                    document.getElementById("secondCircle").style.background="black";
                    document.getElementById("thirdCircle").style.background="black";
                    document.getElementById("fourthCircle").style.background="black";
                    
                }
                else if (blanche == 4){
                    document.getElementById("firstCircle").style.background="red";
                    document.getElementById("secondCircle").style.background="red";
                    document.getElementById("thirdCircle").style.background="red";
                    document.getElementById("fourthCircle").style.background="red";

                }
                else if (blanche == 3){
                    document.getElementById("firstCircle").style.background="red";
                    document.getElementById("secondCircle").style.background="red";
                    document.getElementById("thirdCircle").style.background="red";
                
                }
                else if (blanche == 2){
                    document.getElementById("firstCircle").style.background="red";
                    document.getElementById("secondCircle").style.background="red"; 
            }
            else if (blanche == 1){
                document.getElementById("firstCircle").style.background="red";
        }
        }
               
             let colorsLevel2=['blue', 'red' , 'green' , 'orange' , 'violet' , 'brown','yellow', ];
            
            
             document.getElementById("delete").addEventListener("click", () => {
                userColors.pop();
                console.log(userColors);
            });
    

