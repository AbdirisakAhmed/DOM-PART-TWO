// Your code goes here
const menus = document.querySelector("nav") 
menus.addEventListener("mouseover" ,function(event){
    event.target.style.color = "orange";

    setTimeout(function() {
        event.target.style.color = "";
      }, 500);
    }, false);


    const large = document.querySelector(".img-content img")
    large.addEventListener("dblclick", function(event){
        large.style.transform = "scale(1.5)"
  large.style.transition = "all 0.3s"
    })
large.addEventListener("mouseleave", function(event){
    large.style.transform = "scale(1)";
})

window.addEventListener("resize",() => {
    large.src = "https://images.ctfassets.net/cnu0m8re1exe/7hQBr1Got3iOOxCn4yJqSy/8ac59ceb4d08d0474a2688ac976b1693/neptune1-1024x727.jpg?w=650&h=433&fit=fill"})



const titles = document.querySelectorAll(".text-content h2")[0]
titles.addEventListener("focus", function(event){
    titles.target.style.background = "yellow";
})

console.log(titles)

window.addEventListener("load", function(){
    alert("Page Is Loaded");
  });

  window.addEventListener("scroll", function(){
      const scrollable =  document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;

      if (Math.ceil(scrolled) === scrollable){
          this.alert("You have Reached the Bottom");
      }
  });

  const wheelEven = document.querySelector(".content-section h2")
  wheelEven.addEventListener("wheel", function(event){
      event.style.background = "green";
  })