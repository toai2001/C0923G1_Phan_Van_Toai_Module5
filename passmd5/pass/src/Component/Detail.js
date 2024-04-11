import {Link, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import * as productService from "../Service/ProductService";

function Detail() {
    const {productId} = useParams();
    const [productDetail, setProductDetail] = useState();
    const getDataDetail = async () => {
        const data = await productService.getProduct(productId);
        setProductDetail(data);
    }
    useEffect(() => {
        getDataDetail();
    }, [])
    if (!productDetail) {
        return null;
    }
    return (<div className="container mt-4">
        <h1>Chhi tiết sản phẩm: {productDetail.title}</h1>
        <h4>Mô Tả: {productDetail.description}</h4>
        <h4>Giá: {productDetail.price}</h4>
        <br></br>
        <br></br>
        <Link className="btn btn-primary" to={"/"}>Trở Lại</Link>
    </div>)
}

export default Detail