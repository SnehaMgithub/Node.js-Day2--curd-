const products=[
    {
        id:1,name:"Iphone12",price:"25000"
    },
    {
        id:2,name:"Iphone13",price:"35000"
    },
    {
        id:3,name:"Iphone14",price:"40000"
    },
    {
        id:4,name:"Iphone15",price:"50000"
    },
]


//get method

export const getProducts = (req,res)=>{
    res.status(200).json({message:`${products.length} Products Retrive Successfully`,data:products})
}

//get method by id

export const getProductById =(req,res)=>{
     const productId = req.params.id;
    //  console.log("ProductId ",productId);
    const productDetail = products.find(ele=>ele.id==productId)
    if(!productDetail)
    {
        return res.status(404).json({message:"Product Not Found"})
    }
    res.status(200).json({message:"Product Retrived Successfully",data:productDetail})
}

//post method
 
export const createProduct = (req,res)=>{
    const{name,price} = req.body;
    const newProduct={
        id:products.length+1,
        name:name,
        price:price,
    }
    products.push(newProduct);
    res.status(200).json({message:"Product added Successfully",data:newProduct})//real time la data send panna mattom
}

//put or update method
export const updateProduct =(req,res)=>{
    const productId = req.params.id;
    const{name,price} =req.body;
    const index = products.findIndex(ele=>ele.id == productId)
    if(index === -1)
    {
        return res.status(404).json({message:"Product Not Found"});
    }
    products[index].name=name;
    products[index].price=price;
    res.status(200).json({messsage:"Product Updated Successfully",data:products[index]});

}

//delete
export const deleteProduct =(req,res)=>{
    const productId =req.params.id;
    const index = products.findIndex(ele=>ele.id == productId)
    if( index === -1)
    {
        return res.status(404).json({message:"Product Not Found"});
    }
    products.splice(index,1);
    res.status(200).json({message:"Product deleted Successfully"});
}