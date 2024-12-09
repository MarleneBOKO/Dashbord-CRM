import React, { useState } from "react";

function ProductTable() {
  const initialProducts = [
    { name: "Product A", category: "Category 1", price: "$10", stock: "In Stock", status: "Active" },
    { name: "Product B", category: "Category 2", price: "$20", stock: "Out of Stock", status: "Inactive" },
    { name: "Product C", category: "Category 1", price: "$15", stock: "In Stock", status: "Active" },
    // Add more products as needed
  ];

  const [products, setProducts] = useState(initialProducts);

  const toggleStatus = (index) => {
    const product = products[index];
    const confirmation = window.confirm(
      `Voulez-vous vraiment ${product.status === "Active" ? "désactiver" : "activer"} ce produit ?`
    );

    if (confirmation) {
      const updatedProducts = [...products];
      updatedProducts[index].status = product.status === "Active" ? "Inactive" : "Active";
      setProducts(updatedProducts);
    }
  };

  return (
    <div className="mt-10 p-6 mb-[78px] bg-white rounded-[30px] min-w-screen">
      <div className="flex justify-between items-center mt-[30px]">
        <div className="flex flex-col gap-[7px]">
          <h2 className="text-[22px] font-semibold text-black">All Products</h2>
          <span className="text-[#16C098] text-sm">Available Products</span>
        </div>
      </div>

      <div className="overflow-x-auto mt-[40px]">
        <table className="min-w-full border-collapse table-auto">
          <thead className="border border-t-0 border-x-0 border-[#EEE]">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-[#B5B7C0]">Product Name</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-[#B5B7C0]">Category</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-[#B5B7C0]">Price</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-[#B5B7C0]">Stock Status</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-[#B5B7C0]">Status</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index} className="border border-t-0 border-x-0 border-[#EEE]">
                <td className="px-6 py-4 text-sm text-[#292D32] font-medium">{product.name}</td>
                <td className="px-6 py-4 text-sm text-[#292D32] font-medium">{product.category}</td>
                <td className="px-6 py-4 text-sm text-[#292D32] font-medium">{product.price}</td>
                <td className="px-6 py-4 text-sm text-[#292D32] font-medium">{product.stock}</td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => toggleStatus(index)}
                    className={`px-3 py-1 justify-center items-center flex gap-10 w-[80px] rounded-[4px] border text-sm font-medium ${
                      product.status === "Active"
                        ? "bg-green-100 text-[#008767] border-[#00B087]"
                        : "bg-[#FFC5C5] text-[#DF0404] border-[#DF0404]"
                    }`}
                  >
                    {product.status}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductTable;