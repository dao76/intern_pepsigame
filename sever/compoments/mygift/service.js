/**
 * service tầng goa tiếp db
 * */

/**
 *  descriptionL lấy danh sách sản phẩm
 */
const mygiftmodel = require('./modal');

const getmygiftbyiduser = async (id_user) => {
    const mygift = await mygiftmodel.find({ id_user })
    return mygift
}
const insert = async (mygift) => {
    const p = new mygiftmodel(mygift)
    return await p.save()
}
const getMygifts = async () => {
    // return data;
    return await mygiftmodel.find()
};
const deletee = async (id) => {
    // data = data.filter(item => item._id != id);
    await mygiftmodel.findByIdAndDelete(id);

}

const update = async (id, mygift) => {
    // data = data.map(item => {
    //   if(item._id == id){
    //     item ={...item, ...product}
    //   }
    //   return item;
    // }) 
    await mygiftmodel.findOneAndUpdate(id, mygift);
}
const getMygiftbyid = async (id) => {
    const gift = await mygiftmodel.findOne({ '_id': id })
    return gift
}
module.exports = { getmygiftbyiduser, insert, deletee, getMygifts, getMygiftbyid, update }







