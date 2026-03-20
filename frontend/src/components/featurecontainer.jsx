export default function FeatureContainer({children}) {
  return (
    <div className="max-w-5xl mx-auto flex flex-wrap gap-x-6 gap-y-4">
      {children}
    </div>
  )
}
