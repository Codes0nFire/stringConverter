let uppercaseword=document.querySelector("#uppercase span");
let lowercaseword=document.querySelector("#lowercase span");
let camelcaseword=document.querySelector("#camelcase span");
let pascalcaseword=document.querySelector("#pascalcase span");
let snakecaseword=document.querySelector("#snakecase span");
let kebabcaseword=document.querySelector("#kebabcase span");
let trimword=document.querySelector("#trim span"); 
let input=document.querySelector("input");



//uppercaseHandler

function uppercaseHandler(string){

    return string.toUpperCase();
    
}


//lowercaseHandler

function lowercaseHandler(string){

    return string.toLowerCase();
    
}


//capitalizeHandler

function capitalizeHandler(string){
    
  
    if(input.value.length>0){
        return string[0].toUpperCase()+ string.slice(1);
    }

}

//camelcaseHandler


function camelcaseHandler(string){

    const newArr=string.trim().split(' ');

   const reqArr= newArr.map((word,index)=>{

        if(index==0){
            return word;
        }
        else{
            return capitalizeHandler(word);
        }

    })

    return reqArr.join('');




}



//pascalcaseHandler


function pascalcaseHandler(string){

     let newArr= string.trim().split(' ');

    modiArr= newArr.map((word)=>{

        return capitalizeHandler(word);

     })

     return modiArr.join('');

    
}

//snakecaseHandler

function snakecaseHandler(string){

    newArr= string.trim().split(' ')

    modiArr=newArr.map((word)=>{
        return word.toLowerCase();
        
    })

    return modiArr.join('_');

}

//kebabcaseHandler

function kebabcaseHandler(string){



    newArr= string.trim().split(' ')

    modiArr=newArr.map((word)=>{
        return word.toLowerCase();
        
    })

    return modiArr.join('-');

}


//trimHandler

function trimHandler(string){

    return string.trim();

}


function renderdata(){

    lowercaseword.textContent=lowercaseHandler(input.value);
    
    uppercaseword.textContent=uppercaseHandler(input.value);
    
    camelcaseword.textContent=camelcaseHandler(input.value);
    pascalcaseword.textContent=pascalcaseHandler(input.value);
    snakecaseword.textContent=snakecaseHandler(input.value);
    kebabcaseword.textContent=kebabcaseHandler(input.value);
    trimword.textContent=trimHandler(input.value);


}
renderdata();


input.addEventListener('input',renderdata);