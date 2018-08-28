

const mongoose = require('mongoose');


const Vegetables = mongoose.model('Vegetables');

exports.listAllVegetables = function (req, res) {
  Vegetables.find({}, (err, vegetables) => {
    if (err) { res.send(err); }
    res.json(vegetables);
  });
}; 


exports.createAVegetable = function (req, res) {
  const newVegetable = new Vegetables(req.body);
  console.log(newVegetable);
  newVegetable.save((err, vegetable) => {
    if (err) { res.send(err); }
    res.json(vegetable);
  });
};


exports.readAVegetable = function (req, res) {
  console.log(Vegetables);
  Vegetables.findById(req.params.taskId, (err, task) => {
    if (err) { res.send(err); }
    res.json(task);
  });
};


exports.updateAVegetable = function (req, res) {
  Vegetables.findOneAndUpdate({ _id: req.params.taskId }, req.body, { new: true }, (err, task) => {
    if (err) { res.send(err); }
    res.json(task);
  });
};


exports.deleteAVegetable = function (req, res) {
  Vegetables.remove({
    _id: req.params.taskId,
  }, (err, task) => {
    if (err) { res.send(err); }
    res.json({ message: 'Task successfully deleted' });
  });
};
