export const Footer = () => {
  return (
    <div className="bg-black p-4">
      <h1 className="text-white font-bold text-xl pb-4">Eventify.</h1>
      <div className="grid grid-cols-3 text-[#9F9FA8] text-sm">
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
      <h1 className="text-[#9F9FA8] text-center py-4">
        <span className="text-white">&copy;</span> 2024 eventify, Inc. All
        rights reserved.
      </h1>
    </div>
  );
};
