  
  var velX = 2;
  var quanti = 150;
  var cerchi = [];
  
  function setup() {
  //createCanvas (window.innerWidth, window.innerHeight);
    //frameRate(200);
    createCanvas (1000,1000);
    for (i=0; i < quanti; i++) {
      cerchi[i] = new vita();
    }
        background(50);
  }
  
  function draw() {
            //background(50);

      for (i=0;i<quanti;i++){
        cerchi[i].muove();
        cerchi[i].visualizza()
        cerchi[i].r += 0.25;
        cerchi[i].g += 0.25;
        cerchi[i].b += 0.25;
      }
    }

  
function vita() {
      this.x = 0;
      this.y = 0;
      this.diametro = 2;
      this.vel1=random(velX,velX/2);
      this.vel2=random(velX,velX/2);
      this.r = 0;
      this.g = 0;
      this.b = 0;
  
         this.muove = function() { 
          this.x += this.vel1;
          this.y += this.vel2;
          if (this.x < 0 || this.x > width) {
          this.vel1 *= -1;
          }
          if (this.y < 0 || this.y > height) {
          this.vel2 *= -1;
                // this.r = random(255);
                // this.g = random(255);
                // this.b = random(255);
          }

        };  
        
        this.visualizza = function() {
          noStroke();
          fill(this.r, this.g, this.b);
          ellipse(this.x, this.y, this.diametro, this.diametro)
        };
    
    }
    
    //function mousePressed() {

    //r = random(255);
    //g = random(255);
    //b = random(255);
    //}