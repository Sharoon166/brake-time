import { AddCategoryForm, AddSubCategoryForm, CategoriesSection } from "@/app/_components/categories";

export default function CategoriesPage() {

  return (
    <div className="sm:space-y-6 text-secondary">
      <div className="px-6 py-8 sm:rounded-xl sm:shadow-md space-y-10 bg-white">
        <div className="space-y-6">
          <h2 className="text-xl">Add New Category</h2>
          <AddCategoryForm />
        </div>
        <hr className="w-4/5 mx-auto my-8" />
        <div className="space-y-6">
          <h2 className="text-xl">Add New Sub-Category</h2>
          <AddSubCategoryForm />
        </div>
      </div>
      <CategoriesSection />
    </div>
  );
}