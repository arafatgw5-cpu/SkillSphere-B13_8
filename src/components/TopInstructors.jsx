export default function TopInstructors() {
  const instructors = [
    {
      name: "John Doe",
      role: "Full Stack Developer",
      image: "https://i.pravatar.cc/150?img=12",
    },
    {
      name: "Sarah Khan",
      role: "UI/UX Designer",
      image: "https://i.pravatar.cc/150?img=32",
    },
    {
      name: "Alex Morgan",
      role: "React Expert",
      image: "https://i.pravatar.cc/150?img=45",
    },
    {
      name: "Nusrat Jahan",
      role: "Graphic Designer",
      image: "https://i.pravatar.cc/150?img=25",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-14">
      <h2 className="text-3xl font-bold mb-8 text-center">
        🏆 Top Instructors
      </h2>

      <div className="grid md:grid-cols-4 gap-6">
        {instructors.map((ins, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition"
          >
            <img
              src={ins.image}
              alt={ins.name}
              className="w-24 h-24 mx-auto rounded-full object-cover border-4 border-orange-100"
            />

            <h3 className="text-lg font-bold mt-4">{ins.name}</h3>
            <p className="text-sm text-gray-500">{ins.role}</p>

            <button className="btn btn-sm mt-4 bg-orange-500 text-white">
              View Profile
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}