import mongoose,{Document} from "mongoose";


type DeliveryDetails={
    email:string
    name:string
    address:string
    city:string
}

type Cartitems={
    menuid:string
    name:string
    image:string
    price:number
    quantity:number
}

export interface Iorder{
  user:mongoose.Schema.Types.ObjectId
  restaurant:mongoose.Schema.Types.ObjectId
  deliverydetails:DeliveryDetails
  cartitems:Cartitems[]
  totalamount:number
  status:"pending"|"conformed"|"preparing"|"outfordelivery"|"delivered"

}

export interface IorderDocument extends Iorder,Document{
    createdAt:Date
    updatedAt:Date
}

const orderSchema = new mongoose.Schema<Iorder>({ 
   
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    restaurant:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Restaurant",
        required:true
        },
    deliverydetails:{
        email:{
            type:String,
            required:true
        },
        name:{
            type:String,
            required:true
        },
        address:{
            type:String,
            required:true
        },
        city:{
            type:String,
            required:true
        }
    },
    cartitems:[{
        menuid:{
            type:mongoose.Schema.Types.ObjectId,
            required:true
        },
        name:{
            type:String,
            required:true
        },
        image:{
            type:String,
            required:true
        },
        price:{
            type:Number,
            required:true
        },
        quantity:{
            type:Number,
            required:true
        }
    }],
    totalamount:{
        type:Number,
        required:true
    },
    status:{
        type:String,
        enum:["pending","conformed","preparing","outfordelivery","delivered"],
        required:true
    }
},{timestamps:true})

export const Order = mongoose.model("Order",orderSchema)