primus = Primus.connect("", {
  reconnect: {
      max: Infinity // Number: The max delay before we try to reconnect.
    , min: 500 // Number: The minimum delay before we try reconnect.
    , retries: 10 // Number: How many times we should try to reconnect.
  }
});

primus.on("data",function(data){
    console.log(data)
})

document.querySelector(".yellow").addEventListener("click",function(e){
    primus.write({color:"yellow"})
    e.preventDefault;
});

document.querySelector(".red").addEventListener("click",function(e){
    primus.write({color:"red"})
    e.preventDefault;
});