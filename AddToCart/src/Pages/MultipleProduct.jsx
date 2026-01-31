import Card from "../Components/card/Card";

const MultipleProduct = () => {
  return (
    <>
      <div className="flex justify-center flex-col gap-3 items-center bg-amber-50 py-32">
        <h1 className="text-2xl">This is Products Page</h1>
      </div>
      <div className="flex gap-3 flex-col pt-10">
        <h1 className="text-center text-2xl font-bold text-amber-800 pb-8">
          Our Beautifull Products
        </h1>
        <div className="py-4 px-6 flex justify-between flex-wrap mt-5">
          <Card />
        </div>
      </div>
    </>
  );
};

export default MultipleProduct;
