import { api, LightningElement } from 'lwc';
import getServiceResponse from'@salesforce/apex/Sfdc_Services.getServiceResponse';
import isSameSession from'@salesforce/apex/Sfdc_Services.isSameSession';

export default class SfdcContactUs extends LightningElement {
    @api isDesktop;
    name = '';
    phone = '';
    email = '';
    message = '';
    isInvalid = true;
    showModal = false;
    modalHeader = '';
    modalBody = '';
    responseSubmitted = false;
    responseAlreadySubmitted = false;
    loading = true;
    submitted = false;
    sldsContactResponse = '';
    connectedCallback(){
        const machineId = localStorage.getItem('sfdcPantherMachineId');
        isSameSession({ sessionId : machineId})
        .then(result => {
            if(result === 'true'){
                this.responseAlreadySubmitted = true;
                this.submitted = true;
            }
            this.loading = false; 
            })
        .catch(error => {
                console.log('error : '+error.body.message);
            })
        if(this.isDesktop){
            this.sldsContactResponse = 'slds-contact-response-desktop slds-text-align_center';
        } else{
            this.sldsContactResponse = 'slds-contact-response-mobile slds-p-around_large';
        }
    }
    nameChangeHandler(event){
        this.name = event.target.value;
        const nameFormate = /^[A-Za-z\s]+$/;
        if(!this.name.match(nameFormate)){
            this.modalHeader = 'Validation Error';
            this.modalBody = 'Please Enter Valid Name';
            this.modalButtonLabel = 'Cancel';
            this.showModal = true;
            this.isInvalid = true;
            this.name = '';
        }
        if(this.name.length > 50){
            this.modalHeader = 'Validation Error';
            this.modalBody = 'Name can not exceed 50 characters';
            this.modalButtonLabel = 'Cancel';
            this.showModal = true;
            this.isInvalid = true;
            this.name = '';
        }
    }
    phoneChangeHandler(event){
        this.phone = event.target.value;
        const phoneFormate = /^\d{10}$/;
        if(!this.phone.match(phoneFormate)){
            this.modalHeader = 'Validation Error';
            this.modalBody = 'Please Enter Valid Phone Number';
            this.modalButtonLabel = 'Cancel';
            this.showModal = true;
            this.isInvalid = true;
            this.phone = '';
        }
    }
    emailChangeHandler(event){
        this.email = event.target.value;
        let testEmail = this.email.split('@')[1];
        let testEmail2;
        if(testEmail != undefined){
            const lastIndex = testEmail.lastIndexOf('.');
            testEmail2 = testEmail.slice(lastIndex + 1);
        }
        const emailRegex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
        if(!(emailRegex.test(this.email)) || testEmail2 == undefined || testEmail2 == '' || this.email.indexOf(' ') >= 0 || this.email.indexOf('.') == -1){
            this.modalHeader = 'Validation Error';
            this.modalBody = 'Please Enter Valid Email Address';
            this.modalButtonLabel = 'Cancel';
            this.showModal = true;
            this.isInvalid = true;
            this.email = '';
        }
    }
    messageChangeHandler(event){
        this.message = event.target.value;
        if(this.message.length > 150){
            this.modalHeader = 'Validation Error';
            this.modalBody = 'Message can not exceed 200 charectors';
            this.modalButtonLabel = 'Cancel';
            this.showModal = true;
            this.isInvalid = true;
            const textAreaElement = this.template.querySelector('textarea');
            textAreaElement.value = '';
            this.message = '';
        }
    }
    submitHandler(){
        if(this.message == '' || this.email == '' || this.name == ''){
            this.modalHeader = 'Validation Error';
            this.modalBody = 'Please fill the required fields';
            this.modalButtonLabel = 'Cancel';
            this.showModal = true;
        } else {
            this.responseSubmitted = true;
            this.submitted = true;
            this.sendResponse();
            const textAreaElement = this.template.querySelector('textarea');
            textAreaElement.value = '';
            this.name = '';
            this.phone = '';
            this.email = '';
            this.message = '';
        }
    }
    sendResponse(){
        var response = [];
        const machineId = crypto.randomUUID();
        localStorage.setItem('sfdcPantherMachineId', machineId);
        response.push(this.name);
        response.push(this.phone);
        response.push(this.email);
        response.push(this.message);
        response.push(machineId);
        getServiceResponse({ userResponseString : JSON.stringify(response)})
        .then(result => {
            console.log('result : ', result);
            })
        .catch(error => {
                console.log('error : '+error.body.message);
            });
    }
    closeModal() {
        this.showModal = false;
    }
}