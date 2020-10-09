$("body").append(
  `<div class="headerText"> <h1>Stewie the Pup</h1> </div> <div class="navbar"> <p class="navItem">Photos</p> <p class="navItem">Videos</p> <p class="navItem">Favorite Treats</p> <p class="navItem"><a href="https://www.yosemitehikes.com/">Favorite Hikes</a></p> </div> <div class="main"> <div class="aboutMe border"> <h2 class="headerText">About Me</h2> <img class="aboutMeImg" src="https://www.k9web.com/wp-content/uploads/2019/03/labrador-german-shepherd-mix_4.jpg"> <h3 class="headerItem">Name</h3> <p>Stewie</p> <h3 class="headerItem">Hobbies</h3> <p>Eating food, hiking, playing with friends, looking outside my window, barking at enemies</p> </div> <div class="wall border"> <h2 class="headerText">Write a post below</h2> <h3 class="headerItem">April 27: Took this cool picture</h3> <p>Went to the beach with my friends. Check out this cool picture that I took. #photography #beach</p> <img class="border" src="https://www.californiabeaches.com/wp-content/uploads/2014/09/Fort-funston-beach-GGNRA-looking-south-bryce-Large-1000x605.jpg"> <h3 class="headerItem">April 25: Ate a delicious treat</h3> <p>Had some of this while my parents weren't looking.</p> <img class="border" src="https://www.papajohns.com/static-assets/a/images/web/product/pizzas/sausage-slate-compressed.jpg"> </div> <div class="friends border"> <h2 class="headerText">Friends</h2> <p class="headerItem">Frankie</p> <img class="friendsImg" src="https://www.pets4homes.co.uk/images/articles/5271/large/blue-frenchies-all-about-blue-french-bulldogs-5c503cb882316.jpeg"> <p class="headerItem">Toro</p> <img class="friendsImg" src="https://minidoodledogs.com/wp-content/uploads/2017/11/Teacup-Goldendoodle-Utah-Idaho-New_York-Philadephia-Massachussets-Georgia-Virginai-California-Washington-Goldendoodle-Puppies-Golden-doodle-Dog-0001-1.jpg"> <p class="headerItem">Zoie</p> <img class="friendsImg" src="https://i.pinimg.com/originals/17/a4/97/17a497057fd2a1653715c4e5e2860671.jpg"> </div> </div>`
);
$("body").css("font-family", "'Quicksand', sans-serif");
$("body").css("background-color", "#abebb1");
$("body").css("text-align", "center");

$(".headerText ").css("font-family", "''Anton', sans-serif");

$(".navItem, .headerItem").css("background-color", "#90e0df");
$(".navItem, .headerItem").css("border", "1px black solid");
$(".navItem, .headerItem").css("margin", "10px");
$(".navItem, .headerItem").css("padding", "2px");
$(".navItem, .headerItem").css("text-align", "center");

$(".border").css("border", "1px black solid");
$(".border").css("padding", "5px");
$(".border").css("margin", "5px");

$(".wall").css("width", "500px");
$(".wall").css("background-color", "white");

$(".aboutMe, .friends").css("width", "200px");
$(".aboutMe,.friends").css("background-color", "white");

$("img").css("width", "400px");

$(".aboutMeImg").css("width", "130px");
$(".aboutMeImg").css("border", "1px black solid");

$(".friendsImg").css("width", "100px");
$(".friendsImg").css("border", "1px black solid");

$(".main").css("display", "flex");
$(".main").css("justify-content", "center");

$(".navbar").css("display", "flex");
$(".navbar").css("justify-content", "center");
