import React, { useState, useRef } from "react";
import firebase from "firebase/app";

const VendorProductUploadForm = ({ setShowFormModal }) => {

    //Product Attributes
    const [name, setName] = useState(null);
    const [price, setPrice] = useState(null);
    const [salePrice, setSalePrice] = useState(null);
    const [category, setCategory] = useState(null);
    const [subCategory, setSubCategory] = useState(null);
    const [productSlug, setProductSlug] = useState(null);
    const [shortDesc, setShortDesc] = useState(null);
    const [longDesc, setLongDesc] = useState(null);
    // const [mainImgUrl, setMainImgUrl] = useState(null);
    // const [otherImgUrl, setOtherImgUrl] = useState(null);
    const [color, setColor] = useState(null);
    const [size, setSize] = useState(null);
    const [weight, setWeight] = useState(null);
    // const [categoryId, setCategoryId] = useState(null);
    const [isUploaded, setIsUploaded] = useState(false);

    const formRef = useRef(null);

    const handleClick = (e) => {
        if (e.target.classList.contains("backdrop")) {
            setShowFormModal(false);
        }
    };

    const addProductName = (e) => {
        setName(e.target.value);
        setProductSlug("AH-" + e.target.value);
    }

    const addProduct = (e) => {
        setIsUploaded(true);
        e.preventDefault();

        firebase.firestore().collection("products").add({
            name: name,
            category_name: category,
            subCategory_name: subCategory,
            category_id: "na",
            product_slug: productSlug,
            vendor_id: "N3Et62BEbrcOlgxHVypH",
            price: price,
            salePrice: salePrice,
            color: color,
            weight: weight,
            mainImgUrl: "na",
            otherImgUrl: "na",
            shortDesc: shortDesc,
            longDesc: longDesc,
            size: size,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
            .then(function (docRef) {
                console.log("Document written with ID: ", docRef.id);

                //Empty the input fields for new upload 
                formRef.current.reset();
                setIsUploaded(false);
            })
            .catch(function (error) {
                console.error("Error adding document: ", error);
            });
    }

    return (
        <div onClick={handleClick} className="backdrop">
            <div className="form">

                <form ref={formRef} className="vendor_form" onSubmit={addProduct}>
                    <div className="form_title">
                        <svg
                            width="1em"
                            height="1em"
                            style={{ marginRight: "5px" }}
                            viewBox="0 0 16 16"
                            class="bi bi-plus-circle-fill"
                            fill="green"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"
                            />
                        </svg>
            ADD PRODUCT
          </div>
                    {isUploaded && <div className="upload_success">Uploaded Sucessfully</div>}
                    <div className="label_container">
                        <label id="upload-label">Name</label> <input required onChange={e => addProductName(e)} type="text" />
                    </div>

                    <div className="label_container_price">
                        <label id="upload-label" style={{ marginRight: "5px" }}>Price (₹)</label>{" "}
                        <input required onChange={e => setPrice(e.target.value)} style={{ width: "50px", marginRight: "5px" }} type="text" />
                        <label id="upload-label" style={{ marginRight: "5px" }}>Sale Price (₹)</label>{" "}
                        <input required onChange={e => setSalePrice(e.target.value)} style={{ width: "50px" }} type="text" />
                    </div>

                    <div className="label_container">
                        <label id="upload-label">Category</label>{" "}
                        <select onChange={e => setCategory(e.target.value)} className="select_category">
                            <option value="food">Food</option>
                            <option value="stationery">Stationery</option>
                            <option value="electronics">Electonics</option>
                            <option value="sports">Sports</option>
                        </select>
                    </div>

                    <div className="label_container">
                        <label id="upload-label">Sub Category</label>{" "}
                        <select onChange={e => setSubCategory(e.target.value)} className="select_category">
                            <option value="mobile">Mobile</option>
                            <option value="mobile accessories">Mobile Accessories</option>
                            <option value="hdtv">HD TVs</option>
                            <option value="sports">Sports</option>
                        </select>
                    </div>

                    <div className="product_variants">
                        <div className="label_container">
                            <label id="upload-label">Weight</label> <input onChange={e => setWeight(e.target.value)} type="text" />
                        </div>

                        <div className="label_container">
                            <label id="upload-label">Size</label> <input onChange={e => setSize(e.target.value)} type="text" />
                        </div>

                        <div className="label_container">
                            <label id="upload-label">Color</label> <input onChange={e => setColor(e.target.value)} type="text" />
                        </div>
                    </div>

                    <div className="label_container">
                        <label id="upload-label">Short Description</label> <input required onChange={e => setShortDesc(e.target.value)} type="text" />
                    </div>

                    <div className="label_container">
                        <label id="upload-label">Detailed Description</label> <input required onChange={e => setLongDesc(e.target.value)} type="text" />
                    </div>

                    <div className="label_container">
                        <label id="upload-label">Upload Main Image</label> <input type="file" />
                    </div>

                    <div className="label_container">
                        <label id="upload-label">Upload additional image</label> <input type="file" />
                    </div>

                    <button disabled={isUploaded} type="submit">Submit</button>

                </form>
            </div>
        </div>
    );
};

export default VendorProductUploadForm;
