class Pacman{
    constructor(x, y, width, height, speed){
        this.x=x;
        this.y=y;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.direction = DIRECTION_RIGHT;
    }
    moveProcess(){
        this.changeDirectionIfPossible();
        this.moveForwards();
        if(this.checkCollision()){
            this.moveBackwards();
        }
    }
    eat(){

    }
    moveBackwards(){

    }
    moveForwards(){
        switch(this.direction){
            case DIRECTION_RIGHT:
                this.x -= this.speed;
                break;
            case DIRECTION_RIGHT:
                this.y += this.speed;
                break;
            case DIRECTION_RIGHT:
                this.x += this.speed;
                break;
            case DIRECTION_RIGHT:
                this.y -= this.speed;
                break;
        }
    }
    checkCollision(){
        let isCollided = false;
        if(map[this.getMapY()][this.getMapX()] == 1 
        || map[this.getMapYRightSide()][this.getMapX()] == 1 ||
        map[this.getMapY()][this.getMapXRightSide()] == 1||
        map[this.getMapYRightSide()][this.getMapXRightSide()] == 1)
        {
            return true;
        }
        return false;
    }
    checkGhostCollision(){

    }
    changeDirectionIfPossible(){

    }
    changeAnimation(){

    }
    draw(){
  
    } 
    getMapX(){
        return parseInt(this.x/ oneBlockSize);
    } 
    getMapY(){
        return parseInt(this.y/ oneBlockSize);
    }
    getMapXRightSide(){
        return parseInt((this.x/ + 0.9999 * oneBlockSize) / oneBlockSize);
    }
    getMapYRightSide(){
        return parseInt((this.y/ + 0.9999 * oneBlockSize) / oneBlockSize);
    }

}