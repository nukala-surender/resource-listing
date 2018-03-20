const MongoClient = require('mongodb').MongoClient;

const assert = require('assert');

const username = "user";
  const password = "root";
  const db = "my-db";
  const mongoUrl = "ds247698.mlab.com:47698/";

const passwd = username+':'+password
const url = 'mongodb://'+passwd+'@'+mongoUrl+db;


class ResourceService{
    constructor(req, res){
        this.req = req
        this.res = res
    }
      insert(groceryItem1,groceryItem2,groceryItem3, db, callback){
        const myAwesomeDB = db.db('my-db')
        var id=1

        myAwesomeDB.collection('resource').insertOne({
                title : groceryItem1,
                path : groceryItem2,
                desc : groceryItem3,
                id :   id ++
        }, function(){
            callback()
        })
    }

    addGrocery(){
    let self = this;
        let groceryItem1 = this.req.body.groceryItem1;
        let groceryItem2 = this.req.body.groceryItem2;
        let groceryItem3 = this.req.body.groceryItem3;


        try{
            MongoClient.connect(url, function(err, db) {
                assert.equal(null, err);

                self.insert(groceryItem1,groceryItem2,groceryItem3, db, function(){

                    return self.res.status(200).json({
                        status: 'success'

                    })
                })
            });
        }
        catch(error){
            return self.res.status(500).json({
                status: 'error',
                error: error
            })
        }
    }


    getGrocery(){
    let self = this;
    try{
        MongoClient.connect(url, function(err, db) {
            assert.equal(null, err);
            let groceryList = []
            console.log(url)
              const myAwesomeDB = db.db('my-db')
               var mysort = { id: -1 };
            let cursor = myAwesomeDB.collection('resource').find().sort(mysort);

            cursor.each(function(err, doc) {
              assert.equal(err, null);
              if (doc != null) {
                groceryList.push(doc)
              } else {
                return self.res.status(200).json({
                    status: 'success',
                    data: groceryList
                })
              }
            });
        });
    }
    catch(error){
        return self.res.status(500).json({
            status: 'error',
            error: error
        })
    }
}

}
module.exports = ResourceService
