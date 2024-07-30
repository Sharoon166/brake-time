"use client";
import Image from "next/image";
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { FaPlus } from "react-icons/fa6";
import { LucideScanBarcode } from "lucide-react";
import { LuThumbsUp } from "react-icons/lu";
import { Icon } from "@/app/_components";
import {
  Input,
  Select,
  Button,
  DatePicker,
  SelectItem,
} from "@nextui-org/react";

export default function AddProduct() {
  const [barcodeBox, setBarcodeBox] = useState("ABC-abc-123");
  const [barcodePiece, setBarcodePiece] = useState("ABC-abc-123");
  const [droppedImages, setDroppedImages] = useState([]);

  const handleDrop = (acceptedFiles) => {
    const newImages = acceptedFiles.map((file) => URL.createObjectURL(file));
    setDroppedImages((prev) => [...prev, ...newImages]);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleDrop,
  });

  return (
    <div className="bg-white px-8 py-12 rounded-xl sm:shadow-md space-y-10">
      <h1 className="text-xl">New Product</h1>
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/2">
          <div
            {...getRootProps()}
            className="border-[4px] border-dashed border-gray-500 rounded-3xl min-h-80 h-2/3 flex justify-center items-center">
            <input {...getInputProps()} />
            {isDragActive ? (
              <LuThumbsUp className="size-10 text-green-600" />
            ) : (
              <p className="text-center text-lg font-light text-gray-500">
                <span>Drop Images here</span>
                <span className="block">OR</span>
                <span className="text-primary font-semibold">
                  Browse Images
                </span>
              </p>
            )}
          </div>
          <div className="mt-8 w-full">
            <div className="flex flex-row overflow-x-auto gap-4">
              {droppedImages.length == 0 && (
                <div className="p-3 size-16 sm:size-24 text-2xl sm:text-3xl grid place-content-center text-primary bg-primary/20 rounded-xl">
                  <FaPlus />
                </div>
              )}
              {droppedImages.map((image, index) => (
                <Image
                  width={200}
                  height={200}
                  key={index}
                  src={image}
                  alt={`Dropped image ${index + 1}`}
                  className="h-16 w-16 md:w-24 md:h-24 object-cover rounded-lg"
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
                ]}>
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
              />
            </div>

            <div className="flex flex-col md:flex-row md:items-center gap-2">
              <label htmlFor="Box" className="w-32">
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
                />
                <Button isIconOnly className="bg-primary/20 p-2 rounded-full">
                  <LucideScanBarcode className="text-primary rounded-full" />
                </Button>
                <Button isIconOnly className="p-2 bg-white">
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
                />
                <Button isIconOnly className="bg-primary/20 p-2 rounded-full">
                  <LucideScanBarcode className="text-primary rounded-full" />
                </Button>
                <Button isIconOnly className="p-2 bg-white">
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
              <Button color="primary" variant="bordered">
                Discard
              </Button>
              <Button color="primary">Add Product</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
