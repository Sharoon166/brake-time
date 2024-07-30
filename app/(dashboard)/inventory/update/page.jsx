"use client";
import Image from "next/image";
import { useState } from "react";

import {
  Input,
  Select,
  Button,
  DatePicker,
  SelectItem,
} from "@nextui-org/react";

import { LucideScanBarcode } from "lucide-react";
import { Icon } from "@/app/_components";

export default function AddProduct() {
  const [barcodeBox, setBarcodeBox] = useState("ABC-abc-123");
  const [barcodePiece, setBarcodePiece] = useState("ABC-abc-123");
  const [productImages, setProductImages] = useState([]);

  return (
    <div className="bg-white px-8 py-12 rounded-xl sm:shadow-md space-y-10">
      <h1 className="text-xl">Update Product</h1>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/2">
          <div className="rounded-3xl min-h-52 h-2/3 flex justify-center items-center">
            <Image
              src="/images/product.png"
              height={500}
              width={500}
              alt="product 1"
              className=" object-contain w-1/2"
            />
          </div>
          <div className="mt-8 w-full">
            <div className="flex flex-row overflow-x-auto gap-4">
              <Image
                height={80}
                width={80}
                src="/images/product_sm.png"
                alt="Small product image"
              />

              {productImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Dropped image ${index + 1}`}
                  className="h-24 w-24 object-cover rounded-lg"
                />
              ))}
            </div>
          </div>
        </div>
        <div className="lg:w-1/2">
          <form action="" className="space-y-4">
            <div className="flex flex-col md:flex-row md:items-center gap-2">
              <label htmlFor="productName" className="w-32">
                Product name
              </label>
              <Input
                id="productName"
                name="productName"
                variant="bordered"
                className="flex-1"
                classNames={{
                  input: "focus:outline-none",
                  inputWrapper: "shadow-none focus:ring-0",
                }}
                aria-label="Product name"
              />
            </div>

            <div className="flex flex-col md:flex-row md:items-center gap-2">
              <label htmlFor="importDate" className="w-32">
                Import Date
              </label>
              <DatePicker
                id="importDate"
                name="importDate"
                variant="bordered"
                className="flex-1"
                aria-label="Import Date"
              />
            </div>

            <div className="flex flex-col md:flex-row md:items-center gap-2">
              <label htmlFor="quantity" className="w-32">
                Quantity
              </label>
              <Input
                type="number"
                id="quantity"
                name="quantity"
                variant="bordered"
                min={0}
                className="flex-1"
                aria-label="Quantity"
              />
            </div>

            <div className="flex flex-col md:flex-row md:items-center gap-2">
              <label htmlFor="category" className="w-32">
                Category
              </label>
              <Input
                id="category"
                name="category"
                variant="bordered"
                className="flex-1"
                aria-label="Category"
              />
            </div>

            <div className="flex flex-col md:flex-row md:items-center gap-2">
              <label htmlFor="status" className="w-32">
                Status
              </label>
              <Select
                id="status"
                name="status"
                variant="bordered"
                className="flex-1"
                classNames={{
                  trigger: "focus:outline-none",
                }}
                selectedKeys={["in-stock"]}
                items={[
                  { key: "in-stock", value: "In Stock" },
                  { key: "low-stock", value: "Low Stock" },
                  { key: "out-of-stock", value: "Out of Stock" },
                ]}
                aria-label="Status">
                {(item) => <SelectItem key={item.key}>{item.value}</SelectItem>}
              </Select>
            </div>

            <div className="flex flex-col md:flex-row md:items-center gap-2">
              <label htmlFor="threshold" className="w-32">
                Threshold
              </label>
              <Input
                type="number"
                id="threshold"
                name="threshold"
                variant="bordered"
                className="flex-1"
                aria-label="Threshold"
              />
            </div>

            <div className="flex flex-col md:flex-row md:items-center gap-2">
              <label htmlFor="expiryDate" className="w-32">
                Expiry Date
              </label>
              <DatePicker
                id="expiryDate"
                name="expiryDate"
                variant="bordered"
                className="flex-1"
                aria-label="Expiry Date"
              />
            </div>

            <div className="flex flex-col md:flex-row md:items-center gap-2">
              <label htmlFor="units" className="w-32">
                Units
              </label>
              <Input
                type="number"
                id="units"
                name="units"
                variant="bordered"
                min={0}
                className="flex-1"
                aria-label="Units"
              />
            </div>

            <div className="flex flex-col md:flex-row md:items-center gap-2">
              <label htmlFor="barcodeBox" className="w-32">
                Barcode Box
              </label>
              <div className="flex flex-1 items-center gap-2">
                <Input
                  id="barcodeBox"
                  name="barcodeBox"
                  variant="bordered"
                  value={barcodeBox}
                  onChange={(e) => setBarcodeBox(e.target.value)}
                  className="flex-1"
                  classNames={{
                    input: "focus:outline-none",
                    inputWrapper: "shadow-none",
                  }}
                  aria-label="Barcode Box"
                />
                <Button isIconOnly className="bg-primary/20 p-2 rounded-full" aria-label="Scan Barcode Box">
                  <LucideScanBarcode className="text-primary rounded-full" />
                </Button>
                <Button isIconOnly className="p-2 bg-white" aria-label="Download Barcode Box">
                  <Icon.Download className="stroke-primary" />
                </Button>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center">
              <img
                src={`https://barcode.orcascan.com?type=code128&data=${barcodeBox}&text=${barcodeBox}`}
                alt={`${barcodeBox} barcode`}
                className="h-32"
              />
            </div>

            <div className="flex flex-col md:flex-row md:items-center gap-2">
              <label htmlFor="barcode" className="w-32">
                Barcode Piece
              </label>
              <div className="flex flex-1 items-center gap-2">
                <Input
                  id="barcode"
                  name="barcode"
                  variant="bordered"
                  value={barcodePiece}
                  onChange={(e) => setBarcodePiece(e.target.value)}
                  className="flex-1"
                  classNames={{
                    input: "focus:outline-none",
                    inputWrapper: "shadow-none",
                  }}
                  aria-label="Barcode Piece"
                />
                <Button isIconOnly className="bg-primary/20 p-2 rounded-full" aria-label="Scan Barcode Piece">
                  <LucideScanBarcode className="text-primary rounded-full" />
                </Button>
                <Button isIconOnly className="p-2 bg-white" aria-label="Download Barcode Piece">
                  <Icon.Download className="stroke-primary" />
                </Button>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center">
              <img
                src={`https://barcode.orcascan.com?type=code128&data=${barcodePiece}&text=${barcodePiece}`}
                alt={`${barcodePiece} barcode`}
                className="h-32"
              />
            </div>

            <div className="flex justify-end gap-6 flex-wrap">
              <Button color="primary" variant="bordered" aria-label="Discard changes">
                Discard
              </Button>
              <Button color="primary" aria-label="Update Product">Update Product</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
