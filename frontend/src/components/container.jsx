export default function Container({children}){
    return <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
      {children}
        

      </div>
}