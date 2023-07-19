function toggleFullScreen(id) {
    document.getElementById(id).requestFullscreen()
  }

//   function myFunction(){
//     var arr = document.getElementsByClassName('rotate');
//     for(var i = 2; i > arr.length; i--){
//         if(arr[i].classList.contains('hide')){
//             arr[i].classList.remove("hide");
//         }else{
//             arr[i].classList.add("hide");
//         }
//     }

// }

// myFunction();

// setInterval(function(){
//     myFunction()
// }, 30000)

var im = document.getElementById("img");

var images = ["https://picsum.photos/seed/3/342/180","https://picsum.photos/seed/2/342/180","https://picsum.photos/seed/1/342/180"];
var index=0;

function changeImage()
{
  im.setAttribute("src", images[index]);
  index++;
  if(index >= images.length)
  {
    index=0;
  }
}

setInterval(changeImage, 6000);

var im2 = document.getElementById("switchImg");
var cat = document.getElementById("catPush");

var images2 = ["https://picsum.photos/seed/3/342/180","https://picsum.photos/seed/2/342/180","https://picsum.photos/seed/1/342/180"];
var cats = ["Directing","Perfomaning", "Fine Art"];
var index2=0;

function changeImage2()
{
  im2.setAttribute("src", images2[index2]);
  cat.innerText=cats[index2];
  index2++;
  if(index2 >= images2.length)
  {
    index2=0;
  }
}

setInterval(changeImage2, 3000);


