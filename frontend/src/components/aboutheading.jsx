export default function Aboutcomp({children}) {
  return (
    <div className="bg-[#222831] text-white px-6 py-12">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-8">
        ABOUT&nbsp;US
      </h1>
      {children}
    </div>
  )
}
