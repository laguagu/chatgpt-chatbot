function App() {
  return (
    <div className="flex flex-col h-screen bg-gray-200 p-4">
      <div className="flex-1 overflow-y-auto ">
        <p>aasd</p>
      </div>
      <input
        type="text"
        className="border p-2 rounded"
        placeholder="Type your message..."
      />
      <button className="h-10 mt-2 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">
        Send
      </button>
    </div>
  );
}

export default App;
