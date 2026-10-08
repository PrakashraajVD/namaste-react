const Contact = () => {
  return (
    <div className="contact">
      <h1 className="font-bold text-3xl p-4 m-4">Contact Us</h1>
      <form>
        <input type="text" placeholder="name" className="border p-2 m-2"></input>
        <input type="text" placeholder="message" className="border p-2 m-2"></input>
        <button className="border p-2 m-2 bg-gray-100 rounded-lg">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
