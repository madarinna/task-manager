//const moment = require('moment');

function deleteTask(taskId) {
    $.ajax({
        url: '/task/' + taskId + '/delete-json',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        data: JSON.stringify({taskId}),
        type: 'POST',
        success: ((res) => {
            // Replace follow button with unfollow.
            console.log("Result: ", res)
            $("#"+taskId).remove();
        }),
        error: ((error) => {
            console.log("Error:", error);
        })
    });
}

function deleteSubtask(taskId) {
    $.ajax({
        url: '/task/' + taskId + '/delete-sub-json',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        data: JSON.stringify({taskId}),
        type: 'POST',
        success: ((res) => {
            // Replace follow button with unfollow.
            console.log("Result: ", res)
            $("#"+taskId).remove();
        }),
        error: ((error) => {
            console.log("Error:", error);
        })
    });
}

function doneTask(taskId) {
    $.ajax({
        url: '/task/' + taskId + '/done-task',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        data: JSON.stringify({taskId}),
        type: 'POST',
        success: ((res) => {
            // Replace follow button with unfollow.
            console.log("Result: ", res)
        }),
        error: ((error) => {
            console.log("Error:", error);
        })
    });
}

function undoneTask(taskId) {
    $.ajax({
        url: '/task/' + taskId + '/undone-task',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        data: JSON.stringify({taskId}),
        type: 'POST',
        success: ((res) => {
            // Replace follow button with unfollow.
            console.log("Result: ", res)
        }),
        error: ((error) => {
            console.log("Error:", error);
        })
    });
}

function doneSubtask(taskId) {
    $.ajax({
        url: '/task/' + taskId + '/done-subtask',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        data: JSON.stringify({taskId}),
        type: 'POST',
        success: ((res) => {
            // Replace follow button with unfollow.
            console.log("Result: ", res)
        }),
        error: ((error) => {
            console.log("Error:", error);
        })
    });
}

function undoneSubtask(taskId) {
    $.ajax({
        url: '/task/' + taskId + '/undone-subtask',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        data: JSON.stringify({taskId}),
        type: 'POST',
        success: ((res) => {
            // Replace follow button with unfollow.
            console.log("Result: ", res)
        }),
        error: ((error) => {
            console.log("Error:", error);
        })
    });
}
// function setNow() {
//   var now = moment().format('YYYY-MM-DD');
//   document.getElementsByName("task_date").setAttribute("min", now);
//   document.getElementsByName("task_date").setAttribute("value", now);
//   return now;
//   console.log(now);
// }
//
// (function() {
//
  // function tConvert(time) {
  //   // Check correct time format and split into components
  //   time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
  //
  //   if (time.length > 1) { // If time format correct
  //     time = time.slice(1); // Remove full string match value
  //     time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
  //     time[0] = +time[0] % 12 || 12; // Adjust hours
  //   }
  //   return time.join(''); // return adjusted time or original string
  // }
  //
  // var tel = document.getElementsByName('task_time_start');
  //
  // tel.innerHTML = tel.innerHTML.split(/\r*\n|\n\r*|\r/).map(function(v) {
  //   return v ? v + ' => "' + tConvert(v.trim()) + '"' : v;
  // }).join('\n');
// })();
