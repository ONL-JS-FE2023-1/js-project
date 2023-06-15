class EmailInbox {
    constructor() {
        this._emails = [];
    }

    get emails() {
        return this._emails;
    }

    set emails(message) {
        if(typeof message !== 'object') {
            throw new TypeError('Message must be object')
        }

        this._emails.push(message);
    }

    addEmail(subject, sender, message) {
        const existingEmail = this.emails.filter(email => {
            if(email.subject === subject) {
                return true;
            } else {
                return false;
            }
        })
        if(existingEmail.length > 0) {
            throw new Error('Email with the same subject already exists')
        }

        // додаємо цей email до скриньки
        const email = {
            subject: subject,
            sender: sender,
            message: message
        }

        this.emails = email;
    }

    removeEmail(subject) {
        const filteredEmails = this.emails.filter(email => {
            if(email.subject !== subject) {
                return true;
            } else {
                return false;
            }
        })

        this._emails = filteredEmails;
    }

    // getEmails() {
    //     return this.emails;
    // }
}


const inbox = new EmailInbox();

inbox.addEmail('test1', 'test1@gmail.com', 'Test test test');
inbox.addEmail('test2', 'test2@gmail.com', 'Test test test');
inbox.addEmail('test3', 'test3@gmail.com', 'Test test test');
// inbox.addEmail('test3', 'test@gmail.com', 'Test test test'); -> error

inbox.removeEmail('test2');

console.log(inbox.emails); // getEmails