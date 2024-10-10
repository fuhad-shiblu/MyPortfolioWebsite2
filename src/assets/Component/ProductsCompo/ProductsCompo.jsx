import '../ProductsCompo/ProductsCompo.css'

const ProductsCompo = () => {
  return (
    <>
      <div className="fuhadShiblu_setProductsScroll w-[4000px] h-[500px] bg-[rgba(0,0,0,0.5)] rounded-2xl flex flex-col gap-[100px] p-5 overflow-y-scroll">
        <div className="flex flex-col gap-10">
            <h1 className='fuhadShiblu_ProductsLine w-[260px] text-center relative text-[30px] uppercase font-bold text-white'>My Products</h1>
            <div className="w-full h-[350px] flex justify-center items-center">
                <p className='text-[rgba(255,255,255,0.5)] font-light'>Available products will be shown here</p>
            </div>
        </div>
      </div>
    </>
  )
}

export default ProductsCompo
