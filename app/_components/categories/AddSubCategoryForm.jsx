import { Button, Input } from "@nextui-org/react";

export default function AddSubCategoryForm() {
    return (
      <form
        action=""
        className="flex items-center justify-center flex-wrap gap-6">
        <div className="flex-1 basis-80 flex items-center gap-4">
          <label htmlFor="sub-category" className="min-w-max">
            Select Category
          </label>
          <Input
            type="text"
            aria-labelledby="sub-category"
            variant="bordered"
            id="sub-category"
            placeholder="Category name"
          />
        </div>
        <div className="flex-1 basis-80 flex items-center gap-8">
          <label htmlFor="category-image" className="min-w-max">
            Sub-Category
          </label>
          <Input
            type="file"
            variant="bordered"
            id="category-image"
            classNames={{
              input: "file:hidden ",
            }}
          />
        </div>
        <div className="flex-1 flex items-center justify-end">
          <Button type="submit" color="primary">
            Add Sub-Category
          </Button>
        </div>
      </form>
    );
}