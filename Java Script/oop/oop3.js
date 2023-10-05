class MailService {
    constructor(sender){
        this.sender = sender;
    }

    sendMessage(message, receiver) {
        console.log(`${this.sender} sent ${message} to ${receiver}`);
    }
}

class WhatsAppService extends MailService {
    constructor(sender, isBusiness) {
        super(sender);
        this.isBusiness = isBusiness;
    }

    // Overriding method

    sendMessage(message, receiver){
        console.log(`${this.sender} sent ${message} to ${receiver} via WhatsApp`);
    }
}

const mailService = new MailService(`someSender`);
const WhatsappService = new WhatsAppService(`+628123456789`, true);

mailService.sendMessage(`Hai, apa kabar?`, `someReceiver`);
WhatsappService.sendMessage(`Hai, apa kabar?`, `+6289876543210`);