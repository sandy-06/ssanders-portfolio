



const router = require('express').Router();
const {getExperience, addExperience, getExperienceId, updateExperience, delExperience } = require('../controlers/experienceCtrl');




// ...........education............

// get education user
router.get('/experience', getExperience)

// add education user
router.post('/experience', addExperience)


// get specific education by id 
router.get('/experience/:id', getExperienceId)


  // update specific education by id
router.put('/experience/update/:id', updateExperience)


  // delete specific education by id
router.delete('/experience/:id', delExperience
)





module.exports = router;