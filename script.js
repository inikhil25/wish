let highestZ = 1;

class Paper{


    holdingPaper = false;


    prevMouseX = 0;
    prevMouseY = 0;

    mouseX = 0;
    mouseY = 0;

    velocityX = 0;
    velocityY = 0;

    currentPaperX = 0;
    currentPaperY = 0;


    init(paper){

      paper.addEventListener('mousedown', (e) =>  {
        
        this.holdingPaper = true ;


        paper.style.zIndex = highestZ;
        highestZ+= 1;
        
        if (e.button=== 0)  {
          this.prevMouseX = this.mouseX;
          this.prevMouseY = this.mouseY;

          console.log (this.prevMouseX);
          console.log (this.prevMouseY);
        }

      })



      document.addEventListener('mousemove', (e) => {
    
        // Update mouse coordinates
        this.mouseX = e.clientX;
        this.mouseY = e.clientY;
    
        // Calculate velocity
        this.velocityX = this.mouseX - this.prevMouseX || 0;
        this.velocityY = this.mouseY - this.prevMouseY || 0;
    
        if (this.holdingPaper) {
            // Update the current position of the paper
            this.currentPaperX += this.velocityX;
            this.currentPaperY += this.velocityY;
    
            // Update the previous mouse coordinates
            this.prevMouseX = this.mouseX;
            this.prevMouseY = this.mouseY;
            
            // Apply the new position to the paper element
            paper.style.transform = `translateX(${this.currentPaperX}px) translateY(${this.currentPaperY}px)`;
        }
    });
    

      window.addEventListener('mouseup',(e)=>{
        console.log('mouse button is released');
        this.holdingPaper = false;
      })

    }

}

const papers=Array.from(document.querySelectorAll('.paper'));

papers.forEach(paper => {
    const p = new Paper();
    p.init(paper);
})