console.log('Ticket Function');
const AWS = require('aws-sdk'); 
const docClient =  new AWS.DynamoDB.DocumentClient({region:'us-west-2'});

exports.handler = function(event, context, callback){
    
    let scanningParameters = {
        TableName: 'Tickets'
    };
    
    docClient.scan(scanningParameters, function(err, data){
        if(err){
            callback(err, null);
        }
        else {
            callback(null, data);
        }
    });
};