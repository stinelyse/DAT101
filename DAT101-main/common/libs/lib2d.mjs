"use strict"; //aktiverer strict mode- gjør språket mindre tilgivende, reduserer feil
/**
 * @library lib2d
 * @description A library for classes that manage 2D graphics.
 */

//En klasse er en mal for objekter, TPoint er en klasse som representerer et punkt i 2D (x,y). Brukes for å gjenbruke kode og organisere kode.
//Klassen har to egenskaper x og y, og en konstruktør som tar inn to parametere aX og aY.
class TPoint {
  x = 0;
  y = 0;
  constructor(aX, aY) {
    this.x = aX;
    this.y = aY;
  }
} // End of TPoint class

//TPosition er en klasse som representerer en posisjon i 2D, den arver fra TPoint klassen, men kan også ha sine egne funkjsoner og egenskaper.
//Klassen har en konstruktør som tar inn to parametere aX og aY, og kaller på konstruktøren til TPoint med disse parameterne.
//super() brukes for å kalle på konstruktøren til TPoint for å sette x og y.
//Klassen har også en metode clone som lager en kopi av objektet, og en metode distanceToPoint som regner ut avstanden til et annet punkt.
class TPosition extends TPoint {
  constructor(aX, aY) {
    super(aX, aY);
  }

  clone() {
    return new TPosition(this.x, this.y);
  }

  distanceToPoint(aPoint) {
    const dx = this.x - aPoint.x;
    const dy = this.y - aPoint.y;
    return Math.hypot(dx, dy);
  }
} // End of TPosition class


//TRectangle er en klasse som representerer et rektangel i 2D, den arver fra TPosition.
//Klassen har en konstruktør som tar inn fire parametere aX, aY, aWidth og aHeight, og kaller på konstruktøren til TPosition med aX og aY.
//Klassen har også egenskapene width og height, og egenskapene left, right, top og bottom som regner ut posisjonen til sidene av rektangelet.
//Klassen har også metodene isInsideRect og isPositionInside som sjekker om et punkt er inni rektangelet.
//Klassen har også egenskapen center som regner ut midtpunktet til rektangelet, og setter midtpunktet til rektangelet.
class TRectangle extends TPosition {
  constructor(aX, aY, aWidth, aHeight) {
    super(aX, aY);
    this.width = aWidth;
    this.height = aHeight;
  }

  get left() {
    return this.x;
  }

  get right() {
    return this.x + this.width;
  }

  get top() {
    return this.y;
  }

  get bottom() {
    return this.y + this.height;
  }

  isInsideRect(aRect) {
    if (this.left >= aRect.right) return false;
    if (this.right <= aRect.left) return false;
    if (this.top >= aRect.bottom) return false;
    if (this.bottom <= aRect.top) return false;
    return true;
  }

  isPositionInside(aPosition) {
    if (this.left >= aPosition.x) return false;
    if (this.right <= aPosition.x) return false;
    if (this.top >= aPosition.y) return false;
    if (this.bottom <= aPosition.y) return false;
    return true;
  }

  get center() {
    return new TPosition(this.x + this.width / 2, this.y + this.height / 2);
  }

  set center(aPoint) {
    this.x = aPoint.x - this.width / 2;
    this.y = aPoint.y - this.height / 2;
  }
} // End of TRectangle class

const RAD = Math.PI / 180;


//En klasse som lager en sinuskurve. Har egenskapene amplitude, frequency og angle.
//Vi bruker denne klassen til å lage en sinuskurve som vi kan bruke til å lage en bølgeeffekt.
//Privat egenskapene er markert med #, og kan ikke aksesseres utenfra klassen. Bruker det for å hindre utilsiktet endring av egenskaper.
class TSineWave {
  #amplitude;
  #frequency;
  #angle;
  constructor(aAmplitude, aFrequency) {
    this.#amplitude = aAmplitude;
    this.#frequency = aFrequency;
    this.#angle = 0;
  }

  get value() {
    let value = this.#amplitude * Math.sin(this.#angle * RAD);
    this.#angle += this.#frequency;
    return value;
  }
} // end of TSineWave class



//Eksporterer klassene slik at de kan brukes i andre filer.
export default {
  /**
   * @class TPoint
   * @description A class representation for x and y point in 2D.
   * @param {number} aX - The x-coordinate.
   * @param {number} aY - The y-coordinate.
   */
  TPoint,
  /**
   * @class TPosition
   * @description A position class for manipulation of point in 2D.
   * @param {number} aX - The x-coordinate.
   * @param {number} aY - The y-coordinate.
   * @extends TPoint
   * @method clone - A method to clone the position object.
   * @method distanceToPoint - A method to calculate the distance to another point.
   */
  TPosition,

  /**
   * @class TRectangle
   * @extends TPosition
   * @description A class representation for a rectangle in 2D.
   * @param {number} aX - The x-coordinate.
   * @param {number} aY - The y-coordinate.
   * @param {number} aWidth - The width of the rectangle.
   * @param {number} aHeight - The height of the rectangle.
   * @property {number} width - The width of the rectangle.
   * @property {number} height - The height of the rectangle.
   * @property {number} left - The left side of the rectangle.
   * @property {number} right - The right side of the rectangle.
   * @property {number} top - The top side of the rectangle.
   * @property {number} bottom - The bottom side of the rectangle.
   */
  TRectangle,
  /**
   * @class TSineWave
   * @description A class representation for a sine wave.
   * @param {number} aAmplitude - The amplitude of the wave.
   * @param {number} aFrequency - The frequency of the wave.
   * @property {number} value - The next value of the wave.
   */
  TSineWave,
};