const { default: mongoose } = require('mongoose');
const db = require('../Model/index.js');
const Order = db.order;

// Create a USER
const createOrder = async (req, res) => {
    try {

        //\\Get data from req.body
        const body = req.body; // console.log("\x1b[32m%s\x1b[0m","USER_DATA: ", body);

        //\\validate req.params
        if(req.params){
            // console.log({ERROR: 'Require user body!'})
            return res.status(400).send({ ERROR: 'URL wrong!' })
        }

        //\\Check req data
        if (!body) {
            // console.log({ERROR: 'Require user body!'})
            return res.status(400).send({ ERROR: 'Require user data!' })
        }

        //\\Initialize new USER + Save USER to database
        const dataDB = await new Order(body).save(); // console.log("\x1b[32m%s\x1b[0m","USER: ", dataDB);

        //\\Validate data
        //convert mongo document to a plain-old JavaScript object 
        const data = dataDB.toObject()
        //delete attribute
        delete data._id;
        delete data.createdAt;
        delete data.updatedAt;
        delete data.__v
        // data.films = data.films.map(({ _id, ...rest }) => rest); // console.log("\x1b[32m%s\x1b[0m","RESPONSE_DATA: ", data);

        //\\RESPONSE
        return res.status(201).send({ message: 'Create successfully!', data: data });
    } catch (error) {
        return res.status(500).send({ ERROR: error.message, data });
    }
}

// Read one USER by id && Include related COUNTRY && AREA
const getOrderById = async (req, res) => {
    try {

        //\\Get id from req.params
        const id = req.params.id;   // console.log("\x1b[32m%s\x1b[0m","USER_ID: ", id);

        //\\Check req params
        if (!id) {
            // console.log("ERROR: 'Require id param!")
            return res.status(400).send({ ERROR: 'Require UserId!' })
        }

        //\\Validate Mongo ObjectId
        if (!mongoose.isValidObjectId(id)) {
            return res.status(400).send({ ERROR: 'Invalidate id:', id });
        }

        //\\Find one USER by id + relation schema COUNTRY && AREA + Validate return data.
        // const user = await User.find({ _id: id }).populate('country').select('-createdAt -updatedAt -__v');
        const dataDB = await Order.findById(id)
            .select('-createdAt -updatedAt -__v -_id')
            .populate({
                path: 'user',
                select: '-createdAt -updatedAt -__v -_id',

            }); // console.log("\x1b[32m%s\x1b[0m", "USER:", dataDB)


        //\\check data - this only work with findById
        if (!dataDB) {
            return res.status(200).send({ message: 'No information', userId: id });
        }

        //\\Validate data response
        //convert mongo document to a plain-old JavaScript object 
        const data = dataDB.toObject()
        //delete attribute 
        data.films = data.films.map(({ _id, ...rest }) => rest); // console.log("\x1b[32m%s\x1b[0m","RESPONSE_DATA: ", data);

        //\\RESPONSE
        return res.status(200).send({ message: 'Read successfully!', data: data });
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
}

// Update one USER by id.
const updateOrderById = async (req, res) => {
    try {
        //\\Get id from req.params and data from req.body
        const id = req.params.id; // console.log("\x1b[32m%s\x1b[0m","USER_ID: ", id);
        const body = req.body; // console.log("\x1b[32m%s\x1b[0m","USER_DATA: ", body);

        //\\Check req params
        if (!id) {
            // console.log("ERROR: 'Require id param!")
            return res.status(400).send({ ERROR: 'Require UserId!' })
        }

        //\\Validate MongoDB ObjectId
        if (!mongoose.isValidObjectId(id)) {
            return res.status(400).send({ message: 'Invalidate id:', id });
        }

        //\\Check req data
        if (!body) {
            // console.log({ERROR: 'Require user body!'})
            return res.status(400).send({ ERROR: 'Require user data!' })
        }


        //\\Find USER by id + update with new data
        // const updatedUser = await User.findByIdAndUpdate(id, data, { returnDocument: "after" });
        const dataDB = await Order.findOneAndUpdate(
            { _id: id },
            body,
            { returnDocument: "after" }
        ).select('-createdAt -updatedAt -__v -_id'); // console.log("\x1b[32m%s\x1b[0m","USER: ",dataDB)

        //\\CHECK USER - this only work with findById
        if (!dataDB) {
            return res.status(200).send({ message: 'No information', countryId: id });
        }

        //\\Validate data response
        //convert mongo document to a plain-old JavaScript object to delete
        const data = dataDB.toObject()  // console.log("\x1b[32m%s\x1b[0m","RESPONSE_DATA: ", data);
        //delete attribute
        data.films = data.films.map(({ _id, ...rest }) => rest); // console.log("\x1b[32m%s\x1b[0m","RESPONSE_DATA: ", data);

        //\\RESPONSE
        return res.send({ message: 'Update successfully!', data: data });
    } catch (error) {
        return res.send({ error: error.message });
    }
}

// Delete one USER by id.
const deleteOrderById = async (req, res) => {
    try {

        //\\Get id from req.params
        const id = req.params.id;   // console.log("\x1b[32m%s\x1b[0m","USER_ID: ", id);

        //\\Check req params
        if (!id) {
            // console.log("ERROR: 'Require id param!")
            return res.status(400).send({ ERROR: 'Require UserId!' })
        }

        //\\Validate MongoDB ObjectId
        if (!mongoose.isValidObjectId(id)) {
            return res.status(400).send({ message: 'Invalidate id:', id });
        }

        //\\Find and delete USER
        const dataDB = await Order.findByIdAndDelete(id)
            .select('-createdAt -updatedAt -__v -_id'); // console.log("\x1b[32m%s\x1b[0m","USER: ",dataDB)

        //\\CHECK USER - this only work with findById
        if (!dataDB) {
            return res.status(200).send({ message: 'No information', countryId: id });
        }

        //\\Validate data response
        //convert mongo document to a plain-old JavaScript object to delete
        const data = dataDB.toObject()  // console.log("\x1b[32m%s\x1b[0m","RESPONSE_DATA: ", data);
        //delete attribute

        //\\RESPONSE
        return res.send({ message: 'Delete successfully!', data: data });
    } catch (error) {
        return res.send({ error: error.message });
    }
}

// Export all CRUD handlers so route files can attach them to Express endpoints.

const orderController = {
    createOrder,
    getOrderById,
    updateOrderById,
    deleteOrderById,
}

module.exports = orderController