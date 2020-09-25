function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(000);

  let hr = hour();
  let min = minute();
  let sec = second();
  let mon = month();
  let dy = day();
  let yr = year();
   
  
  function retornaData() {
    if (dy < 10 && mon < 10){
      return text("0" + dy + " / " + "0" + mon + " / " + yr, 125, 150);
    }else{
      if(dy < 10){
        return text("0" + dy + " / " +  mon + " / " + yr, 125, 150);
      }else{
        if(mon < 10){
          return text(dy + " / " +  "0" + mon + " / " + yr, 125, 150);
        }
      }
    }
  }
  
  textSize(25);
  fill(255);
  retornaData();
  textSize(40);
  fill(255);
  retornaHora();
  
  function retornaHora() {
    if (hr < 10 && sec < 10 && min < 10){
      return text("0" + hr + " : " + "0" + min + " : " + "0" + sec, 100, 220);
    }
    else{
      if(hr < 10 && sec < 10) {
        return text("0" + hr + " : " + min + " : " + "0" + sec, 100, 220);
      }else{
        if(hr < 10 && min < 10){
          return text("0" + hr + " : " + "0" + min + " : " + sec, 100, 220);
        }else{
          if(sec < 10 && min < 10){
            return text(hr + " : " + "0" + min + " : " + "0" + sec, 100, 220);
          }else{
            if(hr < 10){
              return text("0" + hr + " : " + min + " : " + sec, 100, 220);
            }else{
              if(min < 10){
                return text(hr + " : " + "0" + min + " : " + sec, 100, 220);
              }else{
                if(sec < 10){
                  return text(hr + " : " + min + " : " + "0" + sec, 100, 220);
                }else{
                    return text(hr + " : " + min + " : " + sec, 100, 220);
                  }
                }
              }
            }
          }
        }
      }
    }
  
}
  