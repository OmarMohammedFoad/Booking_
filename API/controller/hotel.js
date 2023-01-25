import Hotels from "../models/Hotels.js";



//create function
export const CreateHotel = async (req,res,nxt)=>


{

    const newHotel = new Hotels(req.body)
    console.log(newHotel);
    try 
    {
        const saveHotel = await newHotel.save()
        res.status(200).json(saveHotel);
    } catch (error) 
    {
        nxt(error)
    }
}



// Update function
export const UpdateHotel = async (req,res,nxt)=>
{
const newHotel = await Hotels.findByIdAndUpdate(req.params.id,{$set: req.body})
console.log(newHotel);

try {

    const savedhotel = await newHotel.save()

    
   res.status(200).json(savedhotel)
    
} catch (error) 
{
nxt(error)
}
}







//  delete function
export const deleteHotel = async (req,res,nxt)=>
{


try {


    const newHotel = await Hotels.findByIdAndDelete(req.params.id)
   res.status(200).json("delete succeded")
    
} catch (error) {
{
nxt(error)
}
}}

// getby_ID function
export const get_by_id = async (req,res,nxt)=>
{
const newHotel = await Hotels.findById(req.params.id)
console.log(newHotel);

try {

    const savedhotel = await newHotel.save()

    
   res.status(200).json(savedhotel)
    
} catch (error) {
nxt(error)
}
}



// get All function

export const getlall = async (req,res,nxt)=>
{
const newHotel = await Hotels.find()
console.log(newHotel);

try {

    // const savedhotel = await newHotel.
    // console.log(newHotel);

    
   res.status(200).json(newHotel)
    
} catch (error) {
    nxt(error)
}

}


