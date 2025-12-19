// Generative Art - Interactive Circles
let particles = [];

function setup() {
    createCanvas(400, 400);
    colorMode(HSB, 360, 100, 100, 100);
    noStroke();
}

function draw() {
    background(0, 0, 10, 10);
    
    // Create new particle on mouse movement
    if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
        if (frameCount % 3 === 0) {
            particles.push(new Particle(mouseX, mouseY));
        }
    }
    
    // Update and display particles
    for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].update();
        particles[i].display();
        
        // Remove dead particles
        if (particles[i].isDead()) {
            particles.splice(i, 1);
        }
    }
}

class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vx = random(-2, 2);
        this.vy = random(-2, 2);
        this.alpha = 100;
        this.size = random(5, 15);
        this.hue = random(360);
    }
    
    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.alpha -= 1;
    }
    
    display() {
        fill(this.hue, 80, 90, this.alpha);
        ellipse(this.x, this.y, this.size);
    }
    
    isDead() {
        return this.alpha <= 0;
    }
}
