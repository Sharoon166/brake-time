import { Button, Input } from "@nextui-org/react";

export default function AddCategoryForm() {
    return (
      <form
        action=""
        className="flex items-center justify-center flex-wrap gap-6">
        <div className="flex-1 basis-80 flex items-center gap-4">
          <label htmlFor="category-name" className="min-w-max">
            Category name
          </label>
          <Input
            type="text"
            aria-labelledby="category-name"
            variant="bordered"
            id="category-name"
            placeholder="Category name"
          />
        </div>
        <div className="flex-1 basis-80 flex items-center gap-6">
          <label htmlFor="category-image" className="min-w-max">
            Choose Image
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
            Add Category
          </Button>
        </div>
      </form>
    );
}