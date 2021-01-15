import React from "react";
import "../component/ProductsTable.css";

const ProductsTable = (params) => {
  return (
    <div className="table-main-container">
      <div class="product-table-container">
        <div class="title-input">
          <div class="table-title">PRODUCTS</div>
          <input
            class="products-table-search"
            placeholder="Search products.."
          />
          <button class="filter-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="white"
              class="filter bi bi-filter-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM3.5 5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1zM5 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm2 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z" />
            </svg>
          </button>
        </div>

        <div class="inner-table-container">
          <div class="one">
            <img className="img-thumbnail" 
              src="https://images.unsplash.com/photo-1608421334558-2414ca992e79?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=85"
              alt=""
            />
            <p>
              {" "}
              <b>Pencil</b>
            </p>
            <div>
              <small> $5.00</small>
            </div>
            <div>
              <small>Quantity :40pcs</small>
            </div>
            <div>
              <button class="variants-button">
                <small>Variants</small>
              </button>
            </div>
            <div>
              <small> Sold :50 </small>
            </div>
          </div>

          <div class="one">
            <img className="img-thumbnail"
              src="https://images.unsplash.com/photo-1608070952400-97f749b66f02?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=85"
              alt=""
            />
            <p>
              {" "}
              <b>Pencil</b>
            </p>
            <small> $5.00</small>
            <small>Quantity :40pcs</small>
            <small>Variants</small>
            <small> Sold :50 </small>
          </div>

          <div class="one">
            <img className="img-thumbnail"
              src="https://images.unsplash.com/photo-1608070952400-97f749b66f02?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=85"
              alt=""
            />
            <p>
              {" "}
              <b>Pencil</b>
            </p>
            <small> $5.00</small>
            <small>Quantity :40pcs</small>
            <small>Variants</small>
            <small> Sold :50 </small>
          </div>

          <div class="one">
            <img className="img-thumbnail"
              src="https://images.unsplash.com/photo-1608070952400-97f749b66f02?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=85"
              alt=""
            />
            <p>
              {" "}
              <b>Pencil</b>
            </p>
            <small> $5.00</small>
            <small>Quantity :40pcs</small>
            <small>Variants</small>
            <small> Sold :50 </small>
          </div>

          <div class="one">
            <img className="img-thumbnail"
              src="https://images.unsplash.com/photo-1608070952400-97f749b66f02?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=85"
              alt=""
            />
            <p>
              {" "}
              <b>Pencil</b>
            </p>
            <small> $5.00</small>
            <small>Quantity :40pcs</small>
            <small>Variants</small>
            <small> Sold :50 </small>
          </div>

          <div class="one">
            <img className="img-thumbnail"
              src="https://images.unsplash.com/photo-1608070952400-97f749b66f02?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=85"
              alt=""
            />
            <p>
              {" "}
              <b>Pencil</b>
            </p>
            <small> $5.00</small>
            <small>Quantity :40pcs</small>
            <small>Variants</small>
            <small> Sold :50 </small>
          </div>

          <div class="one">
            <img className="img-thumbnail"
              src="https://images.unsplash.com/photo-1608070952400-97f749b66f02?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=85"
              alt=""
            />
            <p>
              {" "}
              <b>Pencil</b>
            </p>
            <small> $5.00</small>
            <small>Quantity :40pcs</small>
            <small>Variants</small>
            <small> Sold :50 </small>
          </div>

          <div class="one">
            <img className="img-thumbnail"
              src="https://images.unsplash.com/photo-1608070952400-97f749b66f02?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=85"
              alt=""
            />
            <p>
              {" "}
              <b>Pencil</b>
            </p>
            <small> $5.00</small>
            <small>Quantity :40pcs</small>
            <small>Variants</small>
            <small> Sold :50 </small>
          </div>

          <div class="one">
            <img className="img-thumbnail"
              src="https://images.unsplash.com/photo-1608070952400-97f749b66f02?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=85"
              alt=""
            />
            <p>
              {" "}
              <b>Pencil</b>
            </p>
            <small> $5.00</small>
            <small>Quantity :40pcs</small>
            <small>Variants</small>
            <small> Sold :50 </small>
          </div>

          <div class="one">
            <img className="img-thumbnail"
              src="https://images.unsplash.com/photo-1608070952400-97f749b66f02?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=85"
              alt=""
            />
            <p>
              {" "}
              <b>Pencil</b>
            </p>
            <small> $5.00</small>
            <small>Quantity :40pcs</small>
            <small>Variants</small>
            <small> Sold :50 </small>
          </div>

          <div class="one">
            <img className="img-thumbnail"
              src="https://images.unsplash.com/photo-1608070952400-97f749b66f02?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=85"
              alt=""
            />
            <p>
              {" "}
              <b>Pencil</b>
            </p>
            <small> $5.00</small>
            <small>Quantity :40pcs</small>
            <small>Variants</small>
            <small> Sold :50 </small>
          </div>

          <div class="one">
            <img className="img-thumbnail"
              src="https://images.unsplash.com/photo-1608070952400-97f749b66f02?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=85"
              alt=""
            />
            <p>
              {" "}
              <b>Pencil</b>
            </p>
            <small> $5.00</small>
            <small>Quantity :40pcs</small>
            <small>Variants</small>
            <small> Sold :50 </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsTable;
