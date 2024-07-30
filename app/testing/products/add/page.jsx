"use client"
import { useAddNewProductMutation } from "@/app/_redux/api/productsApi"

const AddProductPage = () => {
    const [addProduct, { data, isLoading, isError }] = useAddNewProductMutation();

    const handleProduct = (e) => {
        e.preventDefault();
        addProduct({ title: "Samsung Z Flip 6", description: "product description", price: 600, thumbnail: "https://picsum.photos/200/300" });
    }
  return (
      <div className="max-w-xl mx-auto mt-12 p-8 bg-white rounded-xl shadow-lg min-h-screen">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Add New Product</h2>
        <form onSubmit={handleProduct} className="space-y-6">
          <div>
            <label htmlFor="productName" className="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
            <input type="text" id="productName" name="productName" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200" placeholder="Enter product name" />
          </div>
          <div>
            <label htmlFor="productDescription" className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea id="productDescription" name="productDescription" rows="4" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200" placeholder="Describe your product"></textarea>
          </div>
          <div>
            <label htmlFor="productPrice" className="block text-sm font-medium text-gray-700 mb-1">Price</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">$</span>
              <input type="number" id="productPrice" name="productPrice" step="0.01" className="w-full pl-8 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200" placeholder="0.00" />
            </div>
          </div>
          <div>
            <label htmlFor="productCategory" className="block text-sm font-medium text-gray-700 mb-1">Category</label>
            <select id="productCategory" name="productCategory" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 bg-white">
              <option value="" disabled selected>Select a category</option>
              <option>Electronics</option>
              <option>Clothing</option>
              <option>Books</option>
              <option>Home & Garden</option>
            </select>
          </div>
          <div>
            <button type="submit" disabled={isLoading} className="w-full py-3 px-4 rounded-lg shadow-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200 text-sm font-semibold">
              Add Product
            </button>
          </div>
        </form>
      </div>  )
}

export default AddProductPage