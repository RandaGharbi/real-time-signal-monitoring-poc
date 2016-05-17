var app = require('./app.js');

var utils = require('./utils/utils');

var helper = require('./utils/helper');
var restify = require('restify');
var assert=require('assert');
var bpmn=require('bpmn');

// We assume there is a myProcess.js besides myProcess.bpmn that contains the handlers

//the require is a singleton so the change will affect all the api
// var constant = require('./utils/constant'); //we're gonna change this by api
//
//   bpmn.createUnmanagedProcess("C:\\Users\\yamina\\Desktop\\pfe2\\real-time-signal-monitoring-poc\\server\\tasks\\taskExampleProcess.bpmn", function(err, myProcess){
//       // we start the process
//       myProcess.triggerEvent("MyStart");
//
// });


//var users = [];
var client = restify.createJsonClient({url: "http://localhost:8080"});

  var manager = new bpmn.ProcessManager();
  manager.addBpmnFilePath("C:\\Users\\yamina\\Desktop\\pfe2\\real-time-signal-monitoring-poc\\server\\tasks\\taskExampleProcess.bpmn");
  manager.createProcess("myId", function(err, myProcess){
  //console.log(myProcess);
      // we start the process
      //users.push()
      myProcess.triggerEvent("MyStart");

  });
  //just create empty process
client.post('/TaskExampleProcess', function(err, req, res, obj) {});
var message = {
		"gugus": "blah", // a process property ...
		"sugus": "foo", // and another one.
    };
//display the process property and history
client.post('/TaskExampleProcess/MyStart', message, function(err, req, res, obj) {
  assert.ifError(err);
  console.log('%d -> %j', res.statusCode, res.headers);
  //console.log('%j', obj);
});
//get all processes
client.get('/TaskExampleProcess',function(err, req, res, obj) {
  assert.ifError(err);
  console.log('%d -> %j', res.statusCode, res.headers);
  console.log('%j', obj);
});

client.get('/TaskExampleProcess?myFirstProperty.gugus=blah', function(error, req, res, obj) {
    //compareFindProcessesByPropertyResult(test, error, obj);
    //client.close();
    //test.done();
});
//get process by property
client.get('/TaskExampleProcess?state=MyTask', function(error, req, res, obj) {
    //compareFindProcessesByStateResult(assert, error, obj);
    //client.close();
  //  assert.done();
});
client.del('/TaskExampleProcess/:id', function(err, req, res) {

  console.log('%d -> %j', res.statusCode, res.headers);
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  app.get('/step2', function(req, res, next) {
//    bpmn.get("myId", function(err, process){
//         process.taskDone("MyTask");
//        res.send(process.getState());
//    });
//   });
// app.get('/get', function(req, res, next) {
//   // returns the process with the corresponding id
//   bpmn.get("myId", function(err, process){
//
//       res.send(process.getState());
//   });
//
//  });
//  app.get('/history', function(req, res, next) {
//    // returns the process with the corresponding id
//    bpmn.get("myId", function(err, process){
//
//        res.send(process.getHistory());
//    });
//
//   });
//
//   app.get('/getId', function(req, res, next) {
//     // returns the process with the corresponding id
//     bpmn.get("myId", function(err, process){
//
//         res.send(process.processId);
//     });
//
//    });
//
//    app.get('/all', function(req, res, next) {
//     bpmn.getAllProcesses(function(err, processes){
//       res.send(JSON.stringify({processes}));
//
// });
//
// });
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// app.get('/range', function(req, res, next) {
//     res.json(constant);
// });
//
// app.get('/data/poc1', function(req, res, next) {
//     // var data = {
//     //     DS1: null,
//     //     DS2: null
//     // };
//     //
//     // utils.urandomPromise(1).then(function(urandomBuffer) {
//     //     data.DS1 = helper.normalize(urandomBuffer[0]);
//     //     return utils.cryptoPromise(1);
//     // }, function(error) {
//     //     console.log('failed on the crypto module:', error);
//     // }).then(function(cryptoBuffer) {
//     //     data.DS2 = helper.normalize(cryptoBuffer[0]);
//     //
//     //     res.json(data);
//     //
//     // }, function(error) {
//     //     console.log('failed on the /dev/urandom module:', error);
//     // });
// });
//
// app.get('/data/poc2', function(req, res, next) {
//     // var data = {
//     //     DS1: null,
//     //     DS2: null
//     // };
//     //
//     // utils.urandomPromise(1).then(function(urandomBuffer) {
//     //     data.DS1 = helper.normalizeProc2(urandomBuffer[0]);
//     //     return utils.cryptoPromise(1);
//     // }, function(error) {
//     //     console.log('failed on the crypto module:', error);
//     // }).then(function(cryptoBuffer) {
//     //     data.DS2 = helper.normalizeProc2(cryptoBuffer[0]);
//     //
//     //     res.json(data);
//     //
//     // }, function(error) {
//     //     console.log('failed on the /dev/urandom module:', error);
//     // });
// });
//
// app.get('/book', function(req, res, next) {
//     // helper.getShakespeareContent().then(function(shakespeareBook) {
//     //     res.json(shakespeareBook);
//     // },function(error){
//     //     console.log(error);
//     // });
// });
