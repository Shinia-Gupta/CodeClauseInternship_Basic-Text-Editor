let optionButton=document.querySelectorAll(".option-button");
let advancedOptionButton=document.querySelectorAll(".adv-option-button");
let fontName=document.getElementById("fontName");
let fontSizeRef=document.getElementById("fontSize");
let writingArea=document.getElementById("text-input");
let linkButton=document.getElementById("createLink");
let alignButtons=document.querySelectorAll(".align");
let spacingButtons=document.querySelectorAll(".spacing");
let formatButtons=document.querySelectorAll(".format");
let scriptButtons=document.querySelectorAll(".script");


//LIST OF FAMILIES
let fontList=[
    "Arial",
    "Verdana",
    "Times New Roman",
"Garamond",
"Georgia",
"Courier New",
"cursive",
];

// Initial Settings 
const initializer=()=>{
    highlighter(alignButtons,true);
    highlighter(spacingButtons,true);
    highlighter(formatButtons,false);
    highlighter(scriptButtons,true);


    //create options for font names
    fontList.map((val)=>{
let option=document.createElement("option");
option.value=val;
option.innerHTML=val;
fontName.appendChild(option);

    });


//fontsize allows only till 7
for(let i=1;i<=7;i++){
    let option=document.createElement("option");
    option.value=i;
    option.innerHTML=i;
    fontSizeRef.appendChild(option);
}

//default size
fontSizeRef.value=3;
};

//main logic
const modifyText=(command,defaultUI,value)=>{
    document.execCommand(command,defaultUI,value);
};

optionButton.forEach((button)=>{
    button.addEventListener("click",()=>{
        modifyText(button.id,false,null);
    });
});
advancedOptionButton.forEach((button)=>{
    button.addEventListener("change",()=>{
        modifyText(button.id,false,button.value);
    });
});

//Highlight Clicked button
const highlighter=(className,needsRemoval)=>{
    className.forEach((button) => {
button.addEventListener("click",()=>{
    //needsRemoval=true means only 1 btn should be highlighted
    if(needsRemoval){
        let alreadyActive=false;
        if(button.classList.contains("active")){
            alreadyActive=true;
        }
        highlighterRemover(className);
        if(!alreadyActive){
            button.classList.add("active");
        }
    }else{
        button.classList.toggle("active");
    }
});        
    });
};

const highlighterRemover=(className)=>{
    className.forEach((button)=>{
        button.classList.remove("active");
    });
};
window.onload=initializer();