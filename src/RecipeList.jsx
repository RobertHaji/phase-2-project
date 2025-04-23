// import { RecipeCard } from "./components/RecipeCard";

export function ReceiptList({ recipes }) {
  return (
    // <div className="flex flex-col  gap-6 p-6">
    //       <h1 className=" ">Recipe List</h1>
    //       <p>welcome</p>
    // </div>
    <div className="flex justify-center p-4 bg-white shadow-md overflow-auto max-h-[600px]">

      <h2 className="text-xl font-bold mb-4">Recipes List</h2>

    </div>

    // <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    //   {recipes.map((recipe, index) => (
    //     <RecipeCard key={index} recipe={recipe} />
    //   ))}
    // </div>
  );
}
