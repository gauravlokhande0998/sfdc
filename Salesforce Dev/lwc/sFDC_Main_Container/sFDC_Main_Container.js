import { LightningElement } from 'lwc';
import FORM_FACTOR from '@salesforce/client/formFactor';
import sfdcimage from '@salesforce/resourceUrl/sfdcimage';

export default class SFDC_Main_Container extends LightningElement {
    isDesktop = false;
    isHome = true;
    isServices = false;
    isAboutUs = false;
    isContactUs = false;
    isMenuClicked = false;
    menu_button_home = '';
    menu_button_services = '';
    menu_button_about = '';
    menu_button_contact = '';
    menu_button_mobile = ' slds-align_absolute-center slds-menu-button';
    morayaLogo;
    connectedCallback(){
        if(FORM_FACTOR == 'Large'){
            this.isDesktop = true;
        }
        if(this.isDesktop == true){
            this.menu_button_home = 'slds-button-home slds-header slds-selected';
            this.menu_button_services = 'slds-button-services slds-header';
            this.menu_button_about = 'slds-button-about slds-header';
            this.menu_button_contact = 'slds-button-contact slds-header';
        } else {
            this.menu_button_home = 'slds-button-home slds-m_top-large slds-selected ' + this.menu_button_mobile;
            this.menu_button_services = 'slds-button-services ' + this.menu_button_mobile;
            this.menu_button_about = 'slds-button-about ' + this.menu_button_mobile;
            this.menu_button_contact = 'slds-button-contact ' + this.menu_button_mobile;
        }
        this.morayaLogo = sfdcimage + '/sfdcimage/morayaLogo.jpg';
        document.addEventListener('scroll',() => this.isMenuClicked = false);
    }
    menuClickHandler(){
        if(this.isMenuClicked == false && this.isDesktop == false){
            this.isMenuClicked = true;
        } else if(this.isDesktop == false){
            this.isMenuClicked = false;
        }
    }
    buttonClickHandler(event){
        this.menuClickHandler();
        const eventClassList =event.target.className;
        const buttonClassName = eventClassList.substring(0, eventClassList.indexOf(' '));
        if(buttonClassName == 'slds-button-home'){
            if(this.isDesktop == true){
                this.menu_button_home = 'slds-button-home slds-header slds-selected';
                this.menu_button_services = 'slds-button-services slds-header';
                this.menu_button_about = 'slds-button-about slds-header';
                this.menu_button_contact = 'slds-button-contact slds-header';
            }else{
                this.menu_button_home = 'slds-button-home slds-m_top-large slds-selected ' + this.menu_button_mobile;
                this.menu_button_services = 'slds-button-services ' + this.menu_button_mobile;
                this.menu_button_about = 'slds-button-about ' + this.menu_button_mobile;
                this.menu_button_contact = 'slds-button-contact ' + this.menu_button_mobile;
            }
            this.isHome = true;
            this.isServices = false;
            this.isAboutUs = false;
            this.isContactUs = false;
        } else if(buttonClassName == 'slds-button-services'){
            if(this.isDesktop == true){
                this.menu_button_home = 'slds-button-home slds-header';
                this.menu_button_services = 'slds-button-services slds-header slds-selected';
                this.menu_button_about = 'slds-button-about slds-header';
                this.menu_button_contact = 'slds-button-contact slds-header';
            }else{
                this.menu_button_home = 'slds-button-home slds-m_top-large ' + this.menu_button_mobile;
                this.menu_button_services = 'slds-button-services slds-selected ' + this.menu_button_mobile;
                this.menu_button_about = 'slds-button-about ' + this.menu_button_mobile;
                this.menu_button_contact = 'slds-button-contact ' + this.menu_button_mobile;
            }
            this.isServices = true;
            this.isHome = false;
            this.isAboutUs = false;
            this.isContactUs = false;
        } else if(buttonClassName == 'slds-button-about'){
            if(this.isDesktop == true){
                this.menu_button_home = 'slds-button-home slds-header';
                this.menu_button_services = 'slds-button-services slds-header';
                this.menu_button_about = 'slds-button-about slds-header slds-selected';
                this.menu_button_contact = 'slds-button-contact slds-header';
            }else{
                this.menu_button_home = 'slds-button-home slds-m_top-large ' + this.menu_button_mobile;
                this.menu_button_services = 'slds-button-services ' + this.menu_button_mobile;
                this.menu_button_about = 'slds-button-about slds-selected ' + this.menu_button_mobile;
                this.menu_button_contact = 'slds-button-contact ' + this.menu_button_mobile;
            }
            this.isAboutUs = true;
            this.isServices = false;
            this.isHome = false;
            this.isContactUs = false;
        } else{
            if(this.isDesktop == true){
                this.menu_button_home = 'slds-button-home slds-header';
                this.menu_button_services = 'slds-button-services slds-header';
                this.menu_button_about = 'slds-button-about slds-header';
                this.menu_button_contact = 'slds-button-contact slds-header slds-selected';
            }else{
                this.menu_button_home = 'slds-button-home slds-m_top-large' + this.menu_button_mobile;
                this.menu_button_services = 'slds-button-services' + this.menu_button_mobile;
                this.menu_button_about = 'slds-button-about' + this.menu_button_mobile;
                this.menu_button_contact = 'slds-button-contact slds-selected' + this.menu_button_mobile;
            }
            this.isContactUs = true;
            this.isAboutUs = false;
            this.isServices = false;
            this.isHome = false;
        }
    }
}