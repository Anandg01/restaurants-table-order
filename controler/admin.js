const tabelData=require('../models/admin');

exports.postData=(req, res)=>{
    const obj=req.body;
    console.log(obj)
    tabelData.create(obj).then(data=>{
        res.json(data)
        console.log('new data added')
    }).catch(err=> console.log(err))
}

exports.getData=(req, res)=>{
    tabelData.findAll()
    .then(data=>{
        res.json(data)
    })
    .catch(err=>console.log(err))
}

exports.deleteData=(req, res)=>{
    const param=req.params;
    const id=param.id;

    tabelData.findByPk(id)
    .then(data=>{
      return data.destroy()
    })
    .then(result=>{
        res.json(result)
        console.log('data Deleted..')
    })
    .catch(err=>console.log(err))

}

exports.add=(rea, res)=>{
    tabelData.create({orderPrice:56,orderDish:'food',tableN:'table1'})
}