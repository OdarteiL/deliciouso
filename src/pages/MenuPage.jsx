function MenuPage() {
  return (
    <>
      <div>
        <div className="w-[400px] h-[300px] bg-black relative rounded-[20px] my-8 mx-8 ">
          <div className="w-full h-[80%] object-cover shadow-lg rounded-[20px] ">
            <img src="https://res.cloudinary.com/dlcqoiyb1/image/upload/v1706729500/ecommerce/flat-lay-table-full-delicious-food-composition_sgkidf.jpg" alt="meat" className="w-full h-full rounded-t-lg " />
          </div>
          <div className="text-white my-2 mx-7 ">
            <h1>Jollof</h1>
            <p><small>$25</small></p>
          </div>
        </div>
      </div>
    </>
  );
}

export default MenuPage;
