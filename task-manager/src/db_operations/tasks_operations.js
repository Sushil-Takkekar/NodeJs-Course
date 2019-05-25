const task_schema = require('../models/task_model');

// create new task
const create_task = (task) => {
    return new Promise((resolve, reject) => {
        new task_schema(task).save().then((data) => {
            resolve(data);
        }).catch((err) => {
            reject(err);
        });
    });
}

// get all tasks of a user
const get_all_tasks = (owner, status) => {
    return new Promise((resolve, reject) => {
        const filter = {
            owner
        }
        if(status) {
            filter.completed = status === "true";
        }
        task_schema.find(filter).then((data) => {
            resolve(data);
        }).catch((err) => {
            reject(err);
        });
    });
}

// get single task by id
const get_task = (id, owner) => {
    return new Promise((resolve, reject) => {
        task_schema.findOne({ _id: id, owner }).then((data) => {
            if(!data)
                return resolve({});
            resolve(data);
        }).catch((err) => {
            reject({ Error : 'No such task exists !' });
        });
    });
}

// update single task by id
const update_task = (id, owner, updates) => {
    return new Promise((resolve, reject) => {
        task_schema.findOneAndUpdate({ _id: id, owner }, updates, { new: true, runValidators: true}).then((data) => {
            if(!data)
                return resolve({});
            resolve(data);
        }).catch((err) => {
            reject({ Error : 'No such task exists !' });
        });
    });
}

const delete_task = (id, owner) => {
    return new Promise((resolve, reject) => {
        task_schema.findOneAndDelete({ _id : id, owner}).then((data) => {
            if(!data)
                return resolve({ Error : 'No such task exists !' });
            resolve({ msg: 'Task deleted sucessfully !' });
        }).catch((err) => {
            reject(err);
        });
    });
}

module.exports = {
    create_task,
    get_all_tasks,
    get_task,
    update_task,
    delete_task
}