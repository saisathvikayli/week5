function Product(props){ 
 
    const {productObj}=props
    return(
        <div >
            <h1 className="text-3xl text-blue-600 text-center">{productObj.title}</h1>
            <h1>{productObj.description}</h1>
        </div>
);
}

export default Product