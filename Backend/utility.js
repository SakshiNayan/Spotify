const UserModal = require("./Models/user-model")
const bcrypt = require("bcryptjs")
const checkUserExist = async (userName)=>{
    let userExisting =false;
    await UserModal.find({userName: userName}).then((data)=>{
        if(data.length){
            userExisting = true;
        }
    })
    return userExisting;

}

const generatePassHash =(password)=>{
    const salt=10;
    return new Promise((resolve, reject)=>{
        bcrypt.genSalt(salt).then((hashSalt)=>{
            bcrypt.hash(password, hashSalt).then((passHash)=>{
                resolve(passHash);
            })
        })
    });
}

module.exports={checkUserExist, generatePassHash};
