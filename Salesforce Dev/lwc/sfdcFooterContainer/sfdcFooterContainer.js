import { LightningElement } from 'lwc';
import FORM_FACTOR from '@salesforce/client/formFactor';

export default class Sfdc_Footer_Container extends LightningElement {
    isDesktop;
    sldsFooterContainer = '';
    connectedCallback(){
        if(FORM_FACTOR == 'Large'){
            this.isDesktop = true;
            this.sldsFooterContainer = "slds-card__footer slds-p-around_small slds-footer-container";
        } else {
            this.isDesktop = false;
            this.sldsFooterContainer = "slds-card__footer slds-p-around_small slds-footer-container-mobile"
        }
    }
}