const Cities = require('../models/Cities');

const getCities = async (req, res, next) => {
  try {
    const cities = await Cities.find();
    res.json({ success: true, msg: 'show all cities', data: cities })
  } catch(err) {
    next(err)
  }
}

const getCity = async (req, res, next) => {
  try {
    const { id } = req.params;
    const city = await Cities.findById(id);
    res.json({ success: true, msg: 'show selected city', data: city })
  } catch(err) {
    next(err)
  }
};

module.exports = {
    getCities,
    getCity

}