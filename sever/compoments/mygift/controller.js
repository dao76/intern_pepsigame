const mygiftService = require('./service')


const getMyGiftByUser = async (id_user) => {
    return await mygiftService.getmygiftbyiduser(id_user)
}
const insert = async (mygift) => {
    return await mygiftService.insert(mygift)
}
const getgift = async () => {
    try {
        let mygift = await mygiftService.getMygifts();
        mygift = mygift.map((item, index) => {
            item = {

                _id: item._id,
                name: item.name,
                price: item.price,
                image: item.image,
                hvt: item.hvt,
                phone: item.phone,
                address: item.address,
                note: item.note,
                status: item.status,
                id_user: item.id_user,

                index: index + 1
            }
            return item;
        })

        return mygift;
    } catch (error) {
        console.log('error ' + error);
        return []
    }
}

// const getMygiftByID = async (id) => {
//     try {
//         let mygift = await mygiftService.getMygiftbyid(id);
//         mygift = mygift.map((item, index) => {
//             item = {

//                 _id: item._id,
//                 name: item.name,
//                 price: item.price,
//                 image: item.image,
//                 hvt: item.hvt,
//                 phone: item.phone,
//                 address: item.address,
//                 note: item.note,
//                 status: item.status,
//                 id_user: item.id_user,


//                 index: index + 1
//             }
//             return item;
//         })
//         return mygift;
//     } catch (error) {
//         return {};
//     }

// }
const getMygiftbyid1 = async (id) => {
    try {
        let gift = await mygiftService.getMygiftbyid(id);
        console.log('gift ' + gift);
        gift = {
            _id: gift._id,
            name: gift.name,
            price: gift.price,
            image: gift.image,
            hvt: gift.hvt,
            phone: gift.phone,
            address: gift.address,
            note: gift.note,
            status: gift.status,
            id_user: gift.id_user,
        }
        return gift;
    } catch (error) {
        console.log('err ' + error);
        return {};
    }

}


const update = async (id, mygift) => {
    try {
        await mygiftService.update(id, mygift);

    } catch (error) {

    }
}
const deleteee = async (id) => {
    try {
        await mygiftService.deletee(id);

    } catch (error) {

    }
}

module.exports = { getMyGiftByUser, insert, getgift, deleteee, getMygiftbyid1, update }
