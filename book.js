const express = require('express');
const { connectiontoDB } = require('./connection');
const { ObjectId } = require('mongodb');

const router = express.Router();



router.get('/', async (req, res) => {
   try {
      const db = await connectiontoDB();
      const collection = db.collection('bookinfo');
      const getdata = await collection.find({}).toArray();

      res.json(getdata);
   } catch (error) {
      console.log({ error });
   }

   

})
// Get a specific book based on id 
router.get('/:id', async (req, res) => {
   try {
      const db = await connectiontoDB();
      const collection = db.collection('bookinfo');
      const userid = new ObjectId(req.params.id);
      const getdata = await collection.findOne({ _id: userid });
      res.json(getdata);

   } catch (error) {
      console.log({ error });
   }


});

// to post a book
router.post('/', async (req, res) => {
   try {
      const db = await connectiontoDB();
      const collection = db.collection('bookinfo');
      const body = req.body;
      await collection.insertOne(body);

      res.json({ message: 'The book has been added' });


   } catch (error) {
      console.log({ error });
   }
});
// to update data
router.put('/:id', async (req, res) => {
   try {
      const db = await connectiontoDB();
      const collection = db.collection('bookinfo');
     
      const id = req.params.id;
     const newData = req.body.author;
     
      collection.updateOne(
         { _id:  new ObjectId(id) },
         //{$set : {newdata}};
         { $set: {author : newData} });

   } catch (error) {
      console.log({ error });
   }
});
// to delete data
router.delete('/:id', async (req, res) => {
   try {
      const db = await connectiontoDB();
      const collection = db.collection('bookinfo');
     
      const id = req.params.id;
       
     
      collection.deleteOne(
         { _id:  new ObjectId(id) },
         
         { $unset:{"title":"Operating system Concepts"} });

   } catch (error) {
      console.log({ error });
   }
});

module.exports = router;