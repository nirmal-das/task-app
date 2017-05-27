var mongoose = require('mongoose');
var Task = require('./task.model');

class TaskController {

    respondResult(res, doc) {
        if (doc) {
            return res.status(200).json(doc);
        } else {
            return res.status(404).end();
        }
    }

    respondError(res, err) {
        return res.status(404).end(err);
    }

    list(req, res) {
        Task.find({})
            .then(doc => this.respondResult(res, doc))
            .catch(err => this.respondError(res, err));
    }

    listCategoryTasks(req, res) {
        var category = req.params.category;
        Task.find({
            category: category
        })
        .then(doc => this.respondResult(res, doc))
        .catch(err => this.respondError(res, err));
    }

    create(req, res) {
        var body = req.body;
        let task = new Task(body);
        task.save()
            .then(doc => this.respondResult(res, doc))
            .catch(err => this.respondError(res, err));
    }

    read(req, res) {
        var id = req.params.id;

        Task.findById(id)
            .then(doc => this.respondResult(res, doc))
            .catch(err => this.respondError(res, err));
    }

    update(req, res) {
        let id = req.params.id;
        var body = req.body;
        Task.findByIdAndUpdate(id, {
            $set: body
        })
        .then(doc => this.respondResult(res, doc))
        .catch(err => this.respondError(res, err));
    }

    delete(req, res) {
        var id = req.params.id;
        Task.findByIdAndRemove(id)
            .then(doc => this.respondResult(res, doc))
            .catch(err => this.respondError(res, err));
    }

    listCategory(req, res) {
        Task.distinct('category')
            .then(doc => { 
                let val = doc;
                if(Array.isArray(doc)) {
                    val = doc.map(c => {
                        return { name: c}
                    });
                }
                this.respondResult(res, val) 
            })
            .catch(err => this.respondError(res, err));
    }
}

module.exports = new TaskController();