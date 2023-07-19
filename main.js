function toggleFullScreen(id) {
    document.getElementById(id).requestFullscreen()
  }

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

var images2 = ["l2.jpg","l3.jpg","l1.jpg",];
var index2=0;

function changeImage2()
{
  
  im2.setAttribute("src", images2[index2]);
  index2++;
  if(index2 >= images2.length )
  {
    index2=0;
  }
}

setInterval(changeImage2, 5000);

var cats = ["Directing","Perfomaning", "Fine Art"];
var index3=0;


function changeImage3()
{
  
  cat.innerText=cats[index3];
  index3++;
  if(index3 >= cats.length )
  {
    index3=0;
  }
}

setInterval(changeImage3, 5000);


