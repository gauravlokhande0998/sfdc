import { LightningElement, api } from 'lwc';
import sfdcimage from '@salesforce/resourceUrl/sfdcimage';

export default class SfdcAboutUs extends LightningElement {
    @api isDesktop;
    addressLogo;
    emailLogo;
    mapMarkers;
    center;
    locationUrl;
    connectedCallback(){
        this.addressLogo = sfdcimage + '/sfdcimage/addressLogo.png';
        this.emailLogo = sfdcimage + '/sfdcimage/emailLogo.png';
        this.locationUrl = 'https://maps.app.goo.gl/5xqg1mSjTNaen9Wm6';
        this.mapOptions = {
            'disableDefaultUI': true,
            'draggable': false
          };
        this.mapMarkers = [
            {
                location: {
                    Latitude: '19.098841',
                    Longitude: '74.689990'
                },
                title: 'Moraya Hightech Washing Center',
                description:
                    'Wide vehicle cleaning service offerings',
            }
        ];     
        this.center = {
            location: { 
                Latitude: '19.098841',
                Longitude: '74.689990'
             }
        };
    }
}