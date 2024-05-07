export const Footer = () => {
  return (
    <div className=" max-w-full bg-black p-4">
      <div className="mx-auto md:max-w-[1100px]">
        <h1 className="pb-4 text-xl font-bold text-white">Eventify.</h1>
        <div className="grid grid-cols-3 text-sm text-[#9F9FA8]">
          <div>
            <h3>Home</h3>
            <h3>Services</h3>
            <h3>Event</h3>
            <h3>Create</h3>
          </div>
          <div>
            <h3>Facebook</h3>
            <h3>Instagram</h3>
            <h3>Twitter</h3>
            <h3>Tiktok</h3>
          </div>
          <div>
            <h3>Privacy and Policy</h3>
            <h3>Terms of Service</h3>
          </div>
        </div>
        <h1 className="py-4 text-center text-[#9F9FA8]">
          <span className="text-white">&copy;</span> 2024 eventify, Inc. All
          rights reserved.
        </h1>
      </div>
    </div>
  );
};
