function MailService(sender) {
    this.sender = sender;
}

MailService.prototype.sendMessage = function (message, receiver) {
    console.log(`${this.sender} sent ${message} to ${receiver}`);
}

function WhatsAppService(sender) {
    MailService.call(this, sender);
}

//protoype inherintance
WhatsAppService.prototype = Object.create(MailService.prototype);
WhatsAppService.prototype.constructor = WhatsAppService;

WhatsAppService.prototype.sendBroadcastMessage = function(message, receivers) {
    for(const receiver of receivers) {
        this.sendMessage(message, receiver);
    }
}

function EmailService(sender) {
    MailService.call(this, sender);
}

//Prototype inheritance
EmailService.prototype = Object.create(MailService.prototype);
EmailService.prototype.constructor = EmailService;

EmailService.prototype.sendDelayedMessage = function (message, receiver, delay) {
    setTimeout(() => {
        this.sendMessage(message, receiver);
    }, delay);
}

const whatsapp = new WhatsAppService(`+62123456789`);
const email = new EmailService(`dimas@dicoding.com`);
whatsapp.sendMessage(`Hello`, [`+62897848554`, `+62149348930`]);
whatsapp.sendBroadcastMessage(`Hello`, `john@doe.com`);
email.sendMessage(`Hello`, `jhon@doe.com`);
email.sendDelayedMessage(`Hello`, `john@ea.com`, 3000);

