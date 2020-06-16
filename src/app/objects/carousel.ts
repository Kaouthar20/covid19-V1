
export class Carousel {
    image: string;
    title: string;
    badge: string;
    readmoreLink : string;
   
    description: string;
    constructor( i? : string, t? : string, b?:string, rL? : string , d? : string){
        this.image = i;
        this.title = t;
        this.badge = b;
        this.readmoreLink =rL;
        this.description = d;
    }
}
