const AuthCard = ({ title, children }) => {
  return (
    <div
      className="
        min-h-screen
        flex items-center justify-center

        bg-gradient-to-br
        from-[#393E46]
        via-[#2f343c]
        to-[#1f2329]
      "
    >
      <div
        className="
          relative
          w-[380px]
          rounded-2xl
          p-8
          text-white

          bg-[#222831]/25
          backdrop-blur-2xl

          border border-white/10

          shadow-[0_25px_60px_rgba(0,0,0,0.55)]
          hover:shadow-[0_35px_90px_rgba(0,0,0,0.75)]

          transition-all
          duration-300
          ease-out

          hover:-translate-y-1
          overflow-hidden
        "
      >
       
        <div
          className="
            pointer-events-none
            absolute inset-0
            rounded-2xl
            bg-white/5
            opacity-30
          "
        />

        <h2 className="text-2xl font-semibold mb-6 text-center relative">
          {title}
        </h2>

        <div className="relative">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthCard;
