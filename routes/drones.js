const express = require(`express`);
const router = express.Router();

const Drone = require(`../models/Drone.model`)


router.get('/drones', (req, res, next) => {
Drone.find()
  .then((dronesFromDB) => {
    res.render(`drones/list.hbs`, { dronesFromDB });
  })
  .catch((err) =>
    console.log(`Error while displaying form ${err}`));
});

router.get('/drones/create', (req, res, next) => {
  Drone.find()
    .then((dronesFromDb) =>
      res.render(`drones/create-form.hbs`, { dronesFromDb })
    )
    .catch((err) =>
      console.log(
        `Error while displaying the form to create a new book: ${err}`
      )
    );
});

router.post('/drones/create', (req, res, next) => {
const { name, propellers, maxSpeed } = req.body; 
Drone.create({ name, propellers, maxSpeed })
.then ((newDrone) => {
  res.redirect('/drones')
})
.catch ((err) =>console.log(`Error creating new Drone: ${err}`))
});

router.get('/drones/:id/edit', (req, res, next) => {
  const {_id}=req.params

Drone.findById(_id)
.then ((droneToUpdate)=>{
  res.render("drones/update-form", droneToUpdate);
})
    .catch((err) => console.log(`Error opening edit page: ${err}`));
})



router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
