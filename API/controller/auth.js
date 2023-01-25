import Users from "../models/Users.js"
import bcrypt from "bcrypt";
export const CreateUser = async (req,res,nxt)=>
{
    const salt = bcrypt.genSaltSync(10.0);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUSer = new Users({
    username : req.body.username,
    email : req.body.email,
    password : hash,

})
    try     
    {   
        const saveuser = await newUSer.save()
       
    console.log(newUSer)
        res.status(200).send("user created") 
    } catch (error) 
    {
        nxt(error)
    }
}


export const Login = async (req,res,nxt)=>
{
    
    
    
    try     
    {
        const user = await Users.findOne({username:req.body.username})

        if(!user) return res.status(404).send("not found");

        const isPassword = bcrypt.compareSync(req.body.password,user.password); // true
        console.log(isPassword);
        if(!isPassword) return res.status(404).send("password or username is wrong");

        const {password,isAdmin,...otherdetails} = user._doc
        res.status(200).send({otherdetails}) 
    } catch (error) 
    {
        nxt(error)
    }
}