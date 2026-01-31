const AuthCard = ({ title, children }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#393E46] ">
      <div
     className="
    w-[380px]
    bg-[#222831]/40
    border border-[#393E46]
    rounded-xl
    p-6
    text-white

    shadow-[0_12px_30px_rgba(0,0,0,0.45)]
    hover:shadow-[0_25px_60px_rgba(0,0,0,0.75)]

    transition-all
    duration-300
    ease-out

    hover:-translate-y-1
  "
      >

        <h2 className="text-2xl font-semibold mb-4 text-center">{title}</h2>
        {children}
      </div>
    </div>
  );
};

export default AuthCard;
