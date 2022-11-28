/*COLOR PALETTE*/

function Palette(color1, color2, color3, color4, color5, color6, color7, color8, color9, color10, color11, color12, color13, color14, color15){

    this.color1= color1;
    this.color2= color2;
    this.color3= color3;
    this.color4= color4;
    this.color5= color5;
    this.color6= color6;
    this.color7= color7;
    this.color8= color8;
    this.color9= color9;
    this.color10= color10;
    this.color11= color11;
    this.color12= color12;
    this.color13= color13;
    this.color14= color14;
    this.color15= color15;

}



const palet=new Palette ("black","grey","white","red","orangered","orange","yellow","yellowgreen","green","turquoise","blue","blueviolet","purple","violet","pink")

/*--------------------------*/

let div, zoom, makeBlur, divbefore ;
let count= 1;
let isPaint=false;

const container= document.querySelector(".container-fluid")
const paintMenu= document.querySelector(".paintMenu")
const paletHtml= document.querySelector(".palet")
const toolsetting= document.querySelector(".toolset")
const btn= document.getElementById("paintButton")
const eraser = document.querySelector(".eraser")
const eraseBox= document.querySelector(".eraseBox")
const fillDrip= document.querySelector(".fillDrip");
const zoomIn= document.querySelector(".zoomIn");
const zoomOut= document.querySelector(".zoomOut");
const blurMe= document.querySelector(".blurBox");
const dropdownMenu= document.querySelector(".dropdown-menu");
const prev= document.querySelector(".prev");
const mycircle= document.querySelector(".mycircle")


colorPalette();

const color1 = document.querySelector(`.${palet.color1}`)
const color2= document.querySelector(`.${palet.color2}`)
const color3= document.querySelector(`.${palet.color3}`)
const color4= document.querySelector(`.${palet.color4}`)
const color5 = document.querySelector(`.${palet.color5}`)
const color6 = document.querySelector(`.${palet.color6}`)
const color7 = document.querySelector(`.${palet.color7}`)
const color8 = document.querySelector(`.${palet.color8}`)
const color9 = document.querySelector(`.${palet.color9}`)
const color10= document.querySelector(`.${palet.color10}`)
const color11 = document.querySelector(`.${palet.color11}`)
const color12 = document.querySelector(`.${palet.color12}`)
const color13= document.querySelector(`.${palet.color13}`)
const color14 = document.querySelector(`.${palet.color14}`)
const color15 = document.querySelector(`.${palet.color15}`)

function colorPalette(){
   
   paletHtml.innerHTML=
   `<div class="box ${palet.color1}" style=background-color:${palet.color1}></div>
   <div class="box ${palet.color2}"  style=background-color:${palet.color2}></div>
   <div class="box ${palet.color3}" style=background-color:${palet.color3}></div>
   <div class="box ${palet.color4}" style=background-color:${palet.color4}></div>
   <div class="box ${palet.color5}" style=background-color:${palet.color5}></div>
   <div class="box ${palet.color6}" style=background-color:${palet.color6}></div>
   <div class="box ${palet.color7}" style=background-color:${palet.color7}></div>
   <div class="box ${palet.color8}" style=background-color:${palet.color8}></div>
   <div class="box ${palet.color9}" style=background-color:${palet.color9}></div>
   <div class="box ${palet.color10}" style=background-color:${palet.color10}></div>
   <div class="box ${palet.color11}" style=background-color:${palet.color11}></div>
   <div class="box ${palet.color12}" style=background-color:${palet.color12}></div>
   <div class="box ${palet.color13}" style=background-color:${palet.color13}></div>
   <div class="box ${palet.color14}" style=background-color:${palet.color14}></div>
   <div class="box ${palet.color15}" style=background-color:${palet.color15}></div>`
 
}

colors();

function colors(){

color1.addEventListener("click", ()=>{
   
 container.addEventListener("mousedown",()=> isPaint=true )
 container.addEventListener("mousemove", painting)
         
   function painting(e){
       if(isPaint){
              let x= e.clientX;
              let y= e.clientY;
               div=`<div class="paint"style="left:${x-15}px;top:${y-15}px;background-color:${palet.color1};position: absolute;
               border-radius: 100%;
               width: 10px;
               height: 10px;
               transform:scale(${count});
               filter:blur(${makeBlur});"></div>`
               container.insertAdjacentHTML("beforeend" ,div)
       }
   }
 container.addEventListener("mouseup",()=> isPaint=false)
 paletHtml.addEventListener("click",(e)=>{
      if(e.target!==paletHtml.children[0]){
         container.removeEventListener("mousemove", painting) }
})
 toolsetting.addEventListener("click",(e)=>{
   for(let child of e.currentTarget.children){                             
      if( e.target.parentElement.className!==child.className){ 
         
      container.removeEventListener("mousemove", painting)
         
      }
   }

}) 

  
}) 
 

 color2.addEventListener("click", ()=>{
 container.addEventListener("mousedown",()=>{
   isPaint=true;
})
 container.addEventListener("mousemove", painting)
   function painting(e){
      if(isPaint){
         let x= e.clientX;
         let y= e.clientY;
          div=`<div class="paint"style="left:${x-15}px;top:${y-15}px;background-color:${palet.color2};position: absolute;
          border-radius: 100%;
          width: 10px;
          height: 10px;
          transform:scale(${count});
          filter:blur(${makeBlur});"></div>`
          container.insertAdjacentHTML("beforeend" ,div)
      }
   }

 container.addEventListener("mouseup",()=>{
  isPaint=false;
 
  
})
 paletHtml.addEventListener("click",(e)=>{
      if(e.target!==paletHtml.children[1])container.removeEventListener("mousemove", painting)   
 })
 toolsetting.addEventListener("click",(e)=>{
   for(let child of e.currentTarget.children){                             
      if( e.target.parentElement.className!==child.className) container.removeEventListener("mousemove", painting)
      }
   }) 
}) 


color3.addEventListener("click", ()=>{
   container.addEventListener("mousedown",()=>isPaint=true)
   container.addEventListener("mousemove", painting)
      function painting(e){
         if(isPaint){
            let x= e.clientX;
            let y= e.clientY;
             div=`<div class="paint"style="left:${x-15}px;top:${y-15}px;background-color:${palet.color3};position: absolute;
             border-radius: 100%;
             width: 10px;
             height: 10px;
             transform:scale(${count});
             filter:blur(${makeBlur});"></div>`
             container.insertAdjacentHTML("beforeend" ,div)
            }
         }
   
   container.addEventListener("mouseup",()=>isPaint=false)
   paletHtml.addEventListener("click",(e)=>{
         if(e.target!==paletHtml.children[2]){
         container.removeEventListener("mousemove", painting)
         } 
})
   toolsetting.addEventListener("click",(e)=>{
         for(let child of e.currentTarget.children){                             
         if( e.target.parentElement.className!==child.className) container.removeEventListener("mousemove", painting)
         }
   }) 
})



color4.addEventListener("click",()=>{
   container.addEventListener("mousedown",()=>isPaint=true)
   container.addEventListener("mousemove", painting)
      function painting(e){
         if(isPaint){
            let x= e.clientX;
            let y= e.clientY;
             div=`<div class="paint"style="left:${x-15}px;top:${y-15}px;background-color:${palet.color4};position: absolute;
             border-radius: 100%;
             width: 10px;
             height: 10px;
             transform:scale(${count});
             filter:blur(${makeBlur});"></div>`
             container.insertAdjacentHTML("beforeend" ,div)
            }
      }
   
   container.addEventListener("mouseup",()=>isPaint=false)
   paletHtml.addEventListener("click",(e)=>{
      if(e.target!==paletHtml.children[3])container.removeEventListener("mousemove", painting) 
})
   toolsetting.addEventListener("click",(e)=>{
      for(let child of e.currentTarget.children){                             
      if( e.target.parentElement.className!==child.className) container.removeEventListener("mousemove", painting)
   }
}) 
})
    
color5.addEventListener("click",()=>{

   container.addEventListener("mousedown",()=>isPaint=true)
   container.addEventListener("mousemove", painting)
      function painting(e){
         if(isPaint){
            let x= e.clientX;
            let y= e.clientY;
             div=`<div class="paint"style="left:${x-15}px;top:${y-15}px;background-color:${palet.color5};position: absolute;
             border-radius: 100%;
             width: 10px;
             height: 10px;
             transform:scale(${count});
             filter:blur(${makeBlur});"></div>`
             container.insertAdjacentHTML("beforeend" ,div)
         }
      }
   
   container.addEventListener("mouseup",()=>isPaint=false)
   paletHtml.addEventListener("click",(e)=>{
         if(e.target!==paletHtml.children[4])container.removeEventListener("mousemove", painting)
   }) 
   toolsetting.addEventListener("click",(e)=>{
      for(let child of e.currentTarget.children){                             
      if( e.target.parentElement.className!==child.className) container.removeEventListener("mousemove", painting)
   }
}) 
})
       
 
color6.addEventListener("click", ()=>{
   container.addEventListener("mousedown",()=>isPaint=true)
   container.addEventListener("mousemove", painting)
      function painting(e){
         if(isPaint){
            let x= e.clientX;
            let y= e.clientY;
             div=`<div class="paint"style="left:${x-15}px;top:${y-15}px;background-color:${palet.color6};position: absolute;
             border-radius: 100%;
             width: 10px;
             height: 10px;
             transform:scale(${count});
             filter:blur(${makeBlur});"></div>`
             container.insertAdjacentHTML("beforeend" ,div)
            }
      }
   
   container.addEventListener("mouseup",()=>isPaint=false)
   paletHtml.addEventListener("click",(e)=>{
        if(e.target!==paletHtml.children[5])container.removeEventListener("mousemove", painting)   
   }) 
   toolsetting.addEventListener("click",(e)=>{
      for(let child of e.currentTarget.children){                             
      if( e.target.parentElement.className!==child.className) container.removeEventListener("mousemove", painting)
   }
}) 
 }) 


color7.addEventListener("click", ()=>{
   container.addEventListener("mousedown",()=>isPaint=true)
   container.addEventListener("mousemove", painting)
      function painting(e){
         if(isPaint){
            let x= e.clientX;
            let y= e.clientY;
             div=`<div class="paint"style="left:${x-15}px;top:${y-15}px;background-color:${palet.color7};position: absolute;
             border-radius: 100%;
             width: 10px;
             height: 10px;
             transform:scale(${count});
             filter:blur(${makeBlur});"></div>`
             container.insertAdjacentHTML("beforeend" ,div)
         }
      }
   
   container.addEventListener("mouseup",()=>isPaint=false)
   paletHtml.addEventListener("click",(e)=>{
         if(e.target!==paletHtml.children[6])container.removeEventListener("mousemove", painting) 
   }) 
   toolsetting.addEventListener("click",(e)=>{
      for(let child of e.currentTarget.children){                             
      if( e.target.parentElement.className!==child.className) container.removeEventListener("mousemove", painting)
   }
}) 
}) 


color8.addEventListener("click", ()=>{
   container.addEventListener("mousedown",()=>isPaint=true)
   container.addEventListener("mousemove", painting)
      function painting(e){
         if(isPaint){
         let x= e.clientX;
         let y= e.clientY;
          div=`<div class="paint"style="left:${x-15}px;top:${y-15}px;background-color:${palet.color8};position: absolute;
          border-radius: 100%;
          width: 10px;
          height: 10px;
          transform:scale(${count});
          filter:blur(${makeBlur});"></div>`
          container.insertAdjacentHTML("beforeend" ,div)
         }
      }

   container.addEventListener("mouseup",()=>isPaint=false)
   paletHtml.addEventListener("click",(e)=>{
        if(e.target!==paletHtml.children[7])container.removeEventListener("mousemove", painting)
   }) 
   toolsetting.addEventListener("click",(e)=>{
      for(let child of e.currentTarget.children){                             
      if( e.target.parentElement.className!==child.className) container.removeEventListener("mousemove", painting)
   }
}) 
}) 


color9.addEventListener("click",()=>{
   container.addEventListener("mousedown",()=>isPaint=true)
   container.addEventListener("mousemove", painting)
      function painting(e){
         if(isPaint){
         let x= e.clientX;
         let y= e.clientY;
          div=`<div class="paint"style="left:${x-15}px;top:${y-15}px;background-color:${palet.color9};position: absolute;
          border-radius: 100%;
          width: 10px;
          height: 10px;
          transform:scale(${count});
          filter:blur(${makeBlur});"></div>`
          container.insertAdjacentHTML("beforeend" ,div)
         } 
      }
   container.addEventListener("mouseup",()=>isPaint=false)
   paletHtml.addEventListener("click",(e)=>{
        if(e.target!==paletHtml.children[8])container.removeEventListener("mousemove", painting) 
   })
   toolsetting.addEventListener("click",(e)=>{
      for(let child of e.currentTarget.children){                             
      if( e.target.parentElement.className!==child.className) container.removeEventListener("mousemove", painting)
   }
}) 
})
 


color10.addEventListener("click", ()=>{
   container.addEventListener("mousedown",()=>isPaint=true)
   container.addEventListener("mousemove", painting)
      function painting(e){
         if(isPaint){
            let x= e.clientX;
            let y= e.clientY;
             div=`<div class="paint"style="left:${x-15}px;top:${y-15}px;background-color:${palet.color10};position: absolute;
             border-radius: 100%;
             width: 10px;
             height: 10px;
             transform:scale(${count});
             filter:blur(${makeBlur});"></div>`
             container.insertAdjacentHTML("beforeend" ,div)
            }
         }
   container.addEventListener("mouseup",()=>isPaint=false)
   paletHtml.addEventListener("click",(e)=>{
         if(e.target!==paletHtml.children[9])container.removeEventListener("mousemove", painting)
   }) 
   toolsetting.addEventListener("click",(e)=>{
      for(let child of e.currentTarget.children){                             
      if( e.target.parentElement.className!==child.className) container.removeEventListener("mousemove", painting)
   }
}) 
})  
  


 
color11.addEventListener("click",()=>{
   container.addEventListener("mousedown",()=>isPaint=true)
   container.addEventListener("mousemove", painting)
      function painting(e){
         if(isPaint){
         let x= e.clientX;
         let y= e.clientY;
          div=`<div class="paint"style="left:${x-15}px;top:${y-15}px;background-color:${palet.color11};position: absolute;
          border-radius: 100%;
          width: 10px;
          height: 10px;
          transform:scale(${count});
          filter:blur(${makeBlur});"></div>`
          container.insertAdjacentHTML("beforeend",div)
         }
      }
   container.addEventListener("mouseup",()=>isPaint=false)
   paletHtml.addEventListener("click",(e)=>{
        if(e.target!==paletHtml.children[10])container.removeEventListener("mousemove", painting)
      }) 
   toolsetting.addEventListener("click",(e)=>{
         for(let child of e.currentTarget.children){                             
         if( e.target.parentElement.className!==child.className) container.removeEventListener("mousemove", painting)
      }
   }) 
}) 



color12.addEventListener("click", ()=>{
   container.addEventListener("mousedown",()=>isPaint=true)
   container.addEventListener("mousemove", painting)
      function painting(e){
         if(isPaint){
         let x= e.clientX;
         let y= e.clientY;
         div=`<div class="paint"style="left:${x-15}px;top:${y-15}px;background-color:${palet.color12};position: absolute;
         border-radius: 100%;
         width: 10px;
         height: 10px;
         filter:blur(${makeBlur});
         transform:scale(${count});"></div>`
         container.insertAdjacentHTML("beforeend" ,div)
      }
   }

   container.addEventListener("mouseup",()=>isPaint=false)
   paletHtml.addEventListener("click",(e)=>{
       if(e.target!==paletHtml.children[11])container.removeEventListener("mousemove", painting)
      })
   toolsetting.addEventListener("click",(e)=>{
      for(let child of e.currentTarget.children){                             
      if( e.target.parentElement.className!==child.className) container.removeEventListener("mousemove", painting)
      }
   }) 

}) 



color13.addEventListener("click", ()=>{
   container.addEventListener("mousedown",()=>isPaint=true)
   container.addEventListener("mousemove", painting)
      function painting(e){
         if(isPaint){
         let x= e.clientX;
         let y= e.clientY;
         div=`<div class="paint"style="left:${x-15}px;top:${y-15}px;background-color:${palet.color13};position: absolute;
         border-radius: 100%;
         width: 10px;
         height: 10px;
         filter:blur(${makeBlur});
         transform:scale(${count});"></div>`
      container.insertAdjacentHTML("beforeend" ,div)
      }
  }
 
   container.addEventListener("mouseup",()=>isPaint=false)
   paletHtml.addEventListener("click",(e)=>{
         if(e.target!==paletHtml.children[12])container.removeEventListener("mousemove", painting) 
})
   toolsetting.addEventListener("click",(e)=>{
   for(let child of e.currentTarget.children){                             
   if( e.target.parentElement.className!==child.className) container.removeEventListener("mousemove", painting)
   }
}) 

}) 


color14.addEventListener("click",()=>{
   container.addEventListener("mousedown",()=>isPaint=true)
   container.addEventListener("mousemove", painting)
      function painting(e){
         if(isPaint){
         let x= e.clientX;
         let y= e.clientY;
         div=`<div class="paint"style="left:${x-15}px;top:${y-15}px;background-color:${palet.color14};position: absolute;
         border-radius: 100%;
         width: 10px;
         height: 10px;
         filter:blur(${makeBlur});
         transform:scale(${count});"></div>`
         container.insertAdjacentHTML("beforeend" ,div)
      }
   }

   container.addEventListener("mouseup",()=>isPaint=false)
   paletHtml.addEventListener("click",(e)=>{
        if(e.target!==paletHtml.children[13])container.removeEventListener("mousemove", painting)
})
   toolsetting.addEventListener("click",(e)=>{
   for(let child of e.currentTarget.children){                             
   if( e.target.parentElement.className!==child.className) container.removeEventListener("mousemove", painting)
   }
}) 
})


color15.addEventListener("click", ()=>{
   container.addEventListener("mousedown",()=>isPaint=true)
   container.addEventListener("mousemove", painting)
      function painting(e){
         if(isPaint){
         let x= e.clientX;
         let y= e.clientY;
         div=`<div class="paint"style="left:${x-15}px;top:${y-15}px;background-color:${palet.color15};position: absolute;
         border-radius: 100%;
         width: 10px;
         height: 10px;
         filter:blur(${makeBlur});
         transform:scale(${count});"></div>`
         container.insertAdjacentHTML("beforeend" ,div)
      }
   }

   container.addEventListener("mouseup",()=>isPaint=false)
   paletHtml.addEventListener("click",(e)=>{
        if(e.target!==paletHtml.children[14])container.removeEventListener("mousemove", painting)
    }) 
   toolsetting.addEventListener("click",(e)=>{
      for(let child of e.currentTarget.children){                             
      if( e.target.parentElement.className!==child.className) container.removeEventListener("mousemove", painting)
      }
   }) 
})  




}

/*TOOLS*/

tools();

function tools (e){
   eraser.addEventListener("click", ()=>{
      container.addEventListener("mousemove", myErase)
      function myErase(e){
         let x= e.clientX;
         let y= e.clientY;
         eraseBox.style.display= "block";
         eraseBox.style.left=(x-20)+"px";
         eraseBox.style.top=(y-20) +"px";
  
         if(btn.getBoundingClientRect().right>=eraseBox.getBoundingClientRect().left && btn.getBoundingClientRect().bottom>=eraseBox.getBoundingClientRect().top){
         
         container.removeEventListener("mousemove", myErase)
         container.removeEventListener("mousemove", eraseIt)
         eraseBox.style.display="none";
      }      
   }
      container.addEventListener("mousedown",()=>isPaint=true)
      container.addEventListener("mousemove", eraseIt)
      function eraseIt(e){
         let x= e.clientX;
         let y= e.clientY;

         if(isPaint){
         div=`<div class="erase" style="left:${x-15}px;top:${y-15}px;background-color:${palet.color3};position:absolute;
         ;width:20px;height:20px;border-radius:0;transform:${zoom};"></div>`
         container.insertAdjacentHTML("beforeend",div)
      }     
   }
      container.addEventListener("mouseup",(e)=>isPaint=false)

      paletHtml.addEventListener("click",()=>{
      container.removeEventListener("mousemove", eraseIt)
      container.removeEventListener("mousemove", myErase)
      eraseBox.style.display="none";

})
      
toolsetting.addEventListener("click", (e)=>{

   if(e.target.parentElement!==toolsetting.children[0]){
         
      container.removeEventListener("mousemove", myErase)
      container.removeEventListener("mousemove", eraseIt)
      eraseBox.style.display="none";
   } 
})   
})

zoomIn.addEventListener("click",zoomMax)
   function zoomMax(){
      count++;
      zoom=eraseBox.style.transform="scale("+`${count++}`+")"
   }

zoomOut.addEventListener("click",zoomMin)
   function zoomMin(){
      count--;
      zoom=eraseBox.style.transform="scale("+`${count--}`+")"
   }

blurMe.addEventListener("click",()=>makeBlur="5px")
blurMe.addEventListener("dblclick",()=>makeBlur="0px")

fillDrip.addEventListener("click", fillIt)
   function fillIt(){
      paletHtml.addEventListener("click", selectColor)
         function selectColor(a){
         for(let child of paletHtml.children){

            if(a.target.className===child.className){
              
               container.addEventListener("mousedown", filling)
               function filling(e){
               console.log(e.target)

                  
            if(!e.target.hasAttribute("style")){
               e.target.setAttribute("style", "background-color:"+`${a.target.style.backgroundColor}`+"");
               }
               else{
               e.target.style.backgroundColor=`${a.target.style.backgroundColor}`
               }
  
               
            if(e.target.className ==="triangle" || e.target.className ==="triangleblack")
               {
                e.target.style.backgroundColor="transparent"
            
               }

                       
            if(e.target.className ==="trianglebefore")
            {
             e.target.style.borderBottomColor=`${a.target.style.backgroundColor}`;
             e.target.style.backgroundColor="transparent"
            } 
            }

                
      toolsetting.addEventListener("click", (e)=>{
           
            if(e.target.parentElement!==toolsetting.children[1]){ 
            
            paletHtml.removeEventListener("click", selectColor) 
            container.removeEventListener("mousedown", filling)
            // eraseBox.style.display="none";
            }
           }) 
         }} 


      }
}

for( let child of dropdownMenu.children){
  
   child.addEventListener("click", selectShape)
     function selectShape(e){
   

     container.addEventListener("mousedown", drawShape)

     function drawShape(e){ 
     let x= e.clientX;
     let y= e.clientY;


        if(container.style.backgroundColor==="black"){
           if(child.classList.contains("mycircle")){
              console.log(child)
  
              div=`<div class="mycircle" style="left:${x-15}px;top:${y-15}px;position:absolute;
              ;width:20px;height:20px;border-radius:100%;border: 1px solid white;transform:${zoom};"></div>`
              container.insertAdjacentHTML("beforeend",div)
             
              
           }else{
              
              
              container.removeEventListener("mousedown", drawShape)
        
           } 
  
           if(child.classList.contains("mysquare")){
               div=`<div class="mysquare" style="left:${x-15}px;top:${y-15}px;position:absolute;
               ;width:20px;height:20px;border: 1px solid white;transform:${zoom};"></div>`
               container.insertAdjacentHTML("beforeend",div)
           }else{
              
              
              container.removeEventListener("mousedown", drawShape)

           }
          
          if(child.classList.contains("mytriangle")){
            div=document.createElement("div")
            div.setAttribute("class", "triangle")
            div.style.left=x-15+"px";
            div.style.top=y-15+"px";
            div.style.transform=`${zoom}`; 
            div.style.borderBottomColor="white"; 



            container.appendChild(div)


            divbefore=document.createElement("div")
            divbefore.setAttribute("class", "trianglebefore")
        
            divbefore.style.borderBottomColor="black"; 

            div.appendChild(divbefore)

   
         }else{
           
           container.removeEventListener("mousedown", drawShape)

         }
          
        }else{
  
           if(child.classList.contains("mycircle")){
              div=`<div class="mycircle" style="left:${x-15}px;top:${y-15}px;position:absolute;
              ;width:20px;height:20px;border-radius:100%;border: 1px solid black;transform:${zoom};"></div>`
              container.insertAdjacentHTML("beforeend",div)
              
            
              
           }else{
              
              
              container.removeEventListener("mousedown", drawShape)
        
           }
  
           if(child.classList.contains("mysquare")){
              div=`<div class="mysquare" style="left:${x-15}px;top:${y-15}px;position:absolute;
              ;width:20px;height:20px;border: 1px solid black;transform:${zoom};"></div>`
              container.insertAdjacentHTML("beforeend",div)
           }else{
              
              
              container.removeEventListener("mousedown", drawShape)

           }

           if(child.classList.contains("mytriangle")){
             div=document.createElement("div")
             div.setAttribute("class", "triangle")
             div.style.left=x-15+"px";
             div.style.top=y-15+"px";
             div.style.transform=`${zoom}`; 
             container.appendChild(div)

             divbefore=document.createElement("div")
             divbefore.setAttribute("class", "trianglebefore")
             div.appendChild(divbefore) 
   
         }else{
           
           container.removeEventListener("mousedown", drawShape)

         }
      } 
   }    
} 
}

 
prev.addEventListener("click", back)

function back(e){

   if(e.target===prev.children[0]){

      container.lastElementChild.remove();
      
   }
}
}





   
    
   





   