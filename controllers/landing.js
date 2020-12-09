const models = require('../models');

exports.get_landingtes = function(req, res, next){
  return models.Subtasks.findAll({
    where : {
      mainTaskId: "462a9315-b30b-4aa3-8157-bcfbd75ad132"
    }
  }).then(subtasks => {
    res.render('tes', {title: 'Your Tasks', subtasks: subtasks });
  })
}

exports.get_landing = function(req, res, next){
  res.render('landing', {title: 'Add Task', user: req.user});
}

exports.submit_main = function(req, res, next){
  if (req.body.task_loc && !req.body.task_time_end){
    return models.Tasks.create({
      task_name: req.body.task_name,
      task_date: req.body.task_date,
      task_time_start: req.body.task_time_start,
      task_loc: req.body.task_loc
    }).then(task=>{
      res.redirect('/tasks');
    })
  }
  else if (!req.body.task_loc && req.body.task_time_end){
    return models.Tasks.create({
      task_name: req.body.task_name,
      task_date: req.body.task_date,
      task_time_start: req.body.task_time_start,
      task_time_end: req.body.task_time_end
    }).then(task=>{
      res.redirect('/tasks');
    })
  }

  else if (!req.body.task_loc && !req.body.task_time_end){
    return models.Tasks.create({
      task_name: req.body.task_name,
      task_date: req.body.task_date,
      task_time_start: req.body.task_time_start
    }).then(task=>{
      res.redirect('/tasks');
    })
  }
  else{
    return models.Tasks.create({
      task_name: req.body.task_name,
      task_date: req.body.task_date,
      task_time_start: req.body.task_time_start,
      task_time_end: req.body.task_time_end,
      task_loc: req.body.task_loc
    }).then(task=>{
      res.redirect('/tasks');
    })
  }
}

exports.show_submit_sub = function(req, res, next){
  models.Tasks.findOne({
    where : {
      id : req.params.task_id
    }
  }).then(task => {
    res.render('task/add_subtask',{ task: task });
  });
}

exports.submit_sub = function(req, res, next){
  if (req.body.subtask_loc && !req.body.subtask_time_end){
    return models.Tasks.findOne({
      where : {
        id : req.params.task_id
      }
    }).then(task=>{
      models.Subtasks.create({
        mainTaskId: req.params.task_id,
        subtask_name: req.body.subtask_name,
        subtask_date: task.task_date,
        subtask_time_start: req.body.subtask_time_start,
        subtask_loc: req.body.subtask_loc
      }).then(subtask=>{
        res.redirect('/task/'+ req.params.task_id);
      });
    });
  }
  else if (!req.body.subtask_loc && req.body.subtask_time_end){
    return models.Tasks.findOne({
      where : {
        id : req.params.task_id
      }
    }).then(task=>{
      models.Subtasks.create({
        mainTaskId: req.params.task_id,
        subtask_name: req.body.subtask_name,
        subtask_date: task.task_date,
        subtask_time_start: req.body.subtask_time_start,
        subtask_time_end: req.body.subtask_time_end
      }).then(subtask=>{
        res.redirect('/task/'+ req.params.task_id);
      });
    });
  }
  else if (!req.body.subtask_loc && !req.body.subtask_time_end){
    return models.Tasks.findOne({
      where : {
        id : req.params.task_id
      }
    }).then(task=>{
      models.Subtasks.create({
        mainTaskId: req.params.task_id,
        subtask_name: req.body.subtask_name,
        subtask_date: task.task_date,
        subtask_time_start: req.body.subtask_time_start
      }).then(subtask=>{
        res.redirect('/task/'+ req.params.task_id);
      });
    });
  }
  else{
    return models.Tasks.findOne({
      where : {
        id : req.params.task_id
      }
    }).then(task=>{
      models.Subtasks.create({
        mainTaskId: req.params.task_id,
        subtask_name: req.body.subtask_name,
        subtask_date: task.task_date,
        subtask_time_start: req.body.subtask_time_start,
        subtask_time_end: req.body.subtask_time_end,
        subtask_loc: req.body.subtask_loc
      }).then(subtask=>{
        res.redirect('/task/'+ req.params.task_id);
      });
    });
  }
}

exports.show_tasks = function(req, res, next){
  return models.Tasks.findAll({
    where : {
      isDone : false
    }
  }).then(tasks => {
    res.render('task/tasks', {title: 'Your Tasks', tasks: tasks });
  })
}

exports.show_task = function(req, res, next){
  return models.Tasks.findOne({
    where : {
      id : req.params.task_id
    }
  }).then(task => {
    models.Subtasks.findAll({
      where : {
        mainTaskId: task.id
      }
    }).then(subtasks=>{
        res.render('task/task',{ subtasks: subtasks, task: task });
    })
  });
}

exports.show_edit_task = function(req, res, next){
  return models.Tasks.findOne({
    where : {
      id : req.params.task_id
    }
  }).then(task => {
    models.Subtasks.findOne({
      where : {
        id : req.params.task_id
      }
    }).then(subtasks=> {
      res.render('task/edit_task',{ subtasks: subtasks, task: task });
    })
  })
}

exports.edit_task = function(req, res, next){
  if (req.body.task_name){
    if (req.body.task_loc && !req.body.task_time_end){
      return models.Tasks.update({
        task_name: req.body.task_name,
        task_date: req.body.task_date,
        task_time_start: req.body.task_time_start,
        task_loc: req.body.task_loc
      },
        {
          where: {
            id: req.params.task_id
          }
        }).then(result => {
          res.redirect('/task/'+ req.params.task_id);
        })
    }
    else if (!req.body.task_loc && req.body.task_time_end){
      return models.Tasks.update({
        task_name: req.body.task_name,
        task_date: req.body.task_date,
        task_time_start: req.body.task_time_start,
        task_time_end: req.body.task_time_end
      },
        {
          where: {
            id: req.params.task_id
          }
        }).then(result => {
          res.redirect('/task/'+ req.params.task_id);
        })
    }

    else if (!req.body.task_loc && !req.body.task_time_end){
      return models.Tasks.update({
        task_name: req.body.task_name,
        task_date: req.body.task_date,
        task_time_start: req.body.task_time_start
      },
        {
          where: {
            id: req.params.task_id
          }
        }).then(result => {
          res.redirect('/task/'+ req.params.task_id);
        })
    }
    else{
      return models.Tasks.update({
        task_name: req.body.task_name,
        task_date: req.body.task_date,
        task_time_start: req.body.task_time_start,
        task_time_end: req.body.task_time_end,
        task_loc: req.body.task_loc
      },
        {
          where: {
            id: req.params.task_id
          }
        }).then(result => {
          res.redirect('/task/'+ req.params.task_id);
        })
    }
  }

  else{
    return models.Subtasks.findOne({
      where : {
        id : req.params.task_id
      }
    }).then(sub =>{
      if (req.body.subtask_loc && !req.body.subtask_time_end){
        return models.Subtasks.update({
          subtask_name: req.body.subtask_name,
          subtask_date: req.body.subtask_date,
          subtask_time_start: req.body.subtask_time_start,
          subtask_loc: req.body.subtask_loc
        },
          {
            where: {
              id: req.params.task_id
            }
          }).then(result => {
            res.redirect('/task/'+ sub.mainTaskId);
          })
      }
      else if (!req.body.subtask_loc && req.body.subtask_time_end){
        return models.Subtasks.update({
          subtask_name: req.body.subtask_name,
          subtask_date: req.body.subtask_date,
          subtask_time_start: req.body.subtask_time_start,
          subtask_time_end: req.body.subtask_time_end
        },
          {
            where: {
              id: req.params.task_id
            }
          }).then(result => {
            res.redirect('/task/'+ sub.mainTaskId);
          })
      }

      else if (!req.body.subtask_loc && !req.body.subtask_time_end){
        return models.Subtasks.update({
          subtask_name: req.body.subtask_name,
          subtask_date: req.body.subtask_date,
          subtask_time_start: req.body.subtask_time_start
        },
          {
            where: {
              id: req.params.task_id
            }
          }).then(result => {
            res.redirect('/task/'+ sub.mainTaskId);
          })
      }
      else{
        return models.Subtasks.update({
          subtask_name: req.body.subtask_name,
          subtask_date: req.body.subtask_date,
          subtask_time_start: req.body.subtask_time_start,
          subtask_loc: req.body.subtask_loc,
          subtask_time_end: req.body.subtask_time_end
        },
          {
            where: {
              id: req.params.task_id
            }
          }).then(result => {
            res.redirect('/task/'+ sub.mainTaskId);
          })
      }
    });
  }
}

exports.delete_task = function(req, res, next){
  return models.Tasks.destroy({
    where: {
      id: req.params.task_id
    }
  }).then(result =>{
    res.redirect('/tasks');
  })
}

exports.delete_subtask = function(req, res, next){
  return models.Subtasks.findOne({
    where : {
      id : req.params.task_id
    }
  }).then(sub => {
    mainId = sub.mainTaskId;
    return models.Subtasks.destroy({
      where: {
        id: req.params.task_id
      }
    }).then(result =>{
      res.redirect('/task/' + mainId)
    })
  });
}

exports.delete_task_json = function(req, res, next){
  return models.Tasks.destroy({
    where: {
      id: req.params.task_id
    }
  }).then(result =>{
    res.send({msg: "Success"});
  })
}

exports.delete_subtask_json = function(req, res, next){
  return models.Subtasks.destroy({
    where: {
      id: req.params.task_id
    }
  }).then(result =>{
    res.send({msg: "Success"});
  })
}

exports.doneTask = function(req, res, next){
  return models.Tasks.update({
    isDone: true
  },
    {
      where: {
        id: req.params.task_id
      }
  }).then(result =>{
    res.send({msg: "Done"});
  })
}

exports.doneSubtask = function(req, res, next){
  return models.Subtasks.update({
    isDone: true
  },
    {
      where: {
        id: req.params.subtask_id
      }
  }).then(result =>{
    res.send({msg: "Done"});
  })
}

exports.undoneTask = function(req, res, next){
  return models.Tasks.update({
    isDone: false
  },
    {
      where: {
        id: req.params.task_id
      }
  }).then(result =>{
    res.send({msg: "Undone"});
  })
}

exports.undoneSubtask = function(req, res, next){
  return models.Subtasks.update({
    isDone: false
  },
    {
      where: {
        id: req.params.subtask_id
      }
  }).then(result =>{
    res.send({msg: "Undone"});
  })
}

exports.show_done = function(req, res, next){
  models.Tasks.findAll({
    where : {
      isDone : true
    }
  }).then(tasks => {
    res.render('task/done', {title: 'Your Done Tasks', tasks: tasks });
  })
}
