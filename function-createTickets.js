const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region: 'us-west-2'});

exports.handler = function(event, context, callback) {
  
  var params = {
      Item: {
          'ID': event.ID,
          'cost': event.cost,
          'movie': event.movie,
          'quantity': event.quantity
      }, 
      TableName: 'Tickets'
  };
    
    docClient.put(params, function(err, data){
        if(err){
            callback(err,null);
        }
        else{
            callback(null, data);
        }
    });
};