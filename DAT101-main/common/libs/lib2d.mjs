"use strict";
/**
 * @library lib2d
 * @description A library for classes than manage 2D graphics.
 */

/*
Lag en klasse Tpoint med en konstruktør som tar inn x- og y.koordinater. 
*/
class TPoint{
constructor(aX, aY){
    this.x = aX;
    this.y = aY;
}
} //End of Tpoint class


/*
Lag en klasse TPosition som arver fra TPoint (extend) og som har en konstruktør som tar inn x- og y-koordinater. 
Og roper på super med disse koordinatene. 
En duplikat funksjon "clone" som returnerer en ny instans av TPosition med samme x- og y-koordinater. 
En funksjon for å finne avstanden mellom to TPoint objekter. 
*/
class TPosition extends TPoint{
    constructor(aX, aY){
        super(aX, aY);
    }

clone(){
    return new TPosition(this.x, this.y);
}

distanceToPoint(aPoint){
    const dx = this.x - aPoint.x;
    const dy = this.y - aPoint.y;
    return Math.hypot(dx, dy);
}

} // End of TPosition class


export default {
    /**
     * @class TPoint
     * @description A class representation for x and y point in 2D.
     * @param {number} aX - The x-coordinate
     * @param {number} aY- The y-coordinate
     */
    TPoint, 
    /**
     * @class TPosition
     * @description A position class for manipulation of point in 2D.
     * @param {number} aX- The x-coordinate
     * @param {number} aY- The y-coordiante
     * @extends TPoint
     * @method clone - A method to clone the position object
     * @method distanceToPoint - A method to calculate the distance to another point
     */
    TPosition
}