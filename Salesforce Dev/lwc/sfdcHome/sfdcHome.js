import { LightningElement, api } from 'lwc';
import sfdcimage from '@salesforce/resourceUrl/sfdcimage';

export default class Sfdc_Home extends LightningElement {
    @api isDesktop;
    vaccumLogo;
    moistureLogo;
    backgroundImage;
    backgroundStyle;
    backgroundStyleMobile;
    smartTech;
    qualityWork;
    cleaningLogo;
    connectedCallback(){
        this.smartTech = sfdcimage+'/sfdcimage/smartTech.png';
        this.qualityWork = sfdcimage+'/sfdcimage/qualityWork.png';
        this.cleaningLogo = sfdcimage+'/sfdcimage/cleaningLogo.jpg';
        this.backgroundImage = sfdcimage+'/sfdcimage/bgcarwash.jpg';
        this.vaccumLogo = sfdcimage+'/sfdcimage/vacuum.png';
        this.moistureLogo = sfdcimage+'/sfdcimage/moisture.png';
        this.backgroundStyleMobile = `height:60vw; font-size :10vw; background-image:url(${this.backgroundImage}); background-repeat: no-repeat; background-size: cover; background-color: white;`;
        this.backgroundStyleDesktop = `height:400px; font-size :60px; background-image:url(${this.backgroundImage}); background-repeat: no-repeat; background-size: cover; background-color: white;`;
    }
}
