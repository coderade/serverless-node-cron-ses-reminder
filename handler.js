module.exports.sendReminderDaily = (event, context, callback) => {

    let AWS = require('aws-sdk');
    AWS.config.update({region:'us-east-1'});
    let ses = new AWS.SES();
    let fs = require('fs');

    let emailHtml = fs.readFileSync('./dailyReminder.html', 'utf-8');

    const toAndFromAddress = process.env.EMAIL_EXAMPLE;
    let params = {
        Destination: {
            ToAddresses: [toAndFromAddress]
        },
        Message: {
            Body: {
                Html: {
                    Charset: "UTF-8",
                    Data: emailHtml
                },
                Text: {
                    Charset: "UTF-8",
                    Data: "Test body for a Test SES email by a AWS Serverless Lambda!"
                }
            },
            Subject: {
                Charset: "UTF-8",
                Data: "Test SES email by a AWS Serverless Lambda"
            }
        },
        ReplyToAddresses: [toAndFromAddress],
        Source: toAndFromAddress,
    };

    ses.sendEmail(params, function(err, data) {
        // an error occurred
        if (err) console.log(err, err.stack);
        // successful response
        else callback(null, data);
    });
};

module.exports.sendReminderWeekend = (event, context, callback) => {

    let AWS = require('aws-sdk');
    AWS.config.update({region:'us-east-1'});
    let ses = new AWS.SES();
    let fs = require('fs');

    let emailHtml = fs.readFileSync('./weekendReminder.html', 'utf-8');

    const toAndFromAddress = process.env.EMAIL_EXAMPLE;

    let params = {
        Destination: {
            ToAddresses: [toAndFromAddress]
        },
        Message: {
            Body: {
                Html: {
                    Charset: "UTF-8",
                    Data: emailHtml
                },
                Text: {
                    Charset: "UTF-8",
                    Data: "Here's a weekend Remember that puppies are adorable!!"
                }
            },
            Subject: {
                Charset: "UTF-8",
                Data: "Woof Garden Reminder"
            }
        },
        ReplyToAddresses: [toAndFromAddress],
        Source: toAndFromAddress,
    };

    ses.sendEmail(params, function(err, data) {
        // an error occurred
        if (err) console.log(err, err.stack);
        // successful response
        else callback(null, data);
    });
};