/* eslint-disable react/prop-types */

function Modal({ children, onClose }) {
  return (
    <div className="fixed inset-0 p-4 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-xl rounded-lg p-6 shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500 hover:text-black"
        >
          ✖
        </button>
        {children}
      </div>
    </div>
  );
}

function SplitBillModal({
  friend,
  bill,
  setBill,
  myExpenses,
  setMyExpenses,
  whoPay,
  setWhoPay,
  handleSubmit,
  onClose,
}) {
  return (
    <Modal onClose={onClose}>
      <h2 className="text-xl font-semibold text-orange-600 mb-4 text-center">
        SPLIT A BILL WITH {friend.name.toUpperCase()}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
          <label htmlFor="input1" className="text-gray-700">
            💰 Bill Value
          </label>
          <input
            className="text-center border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            type="number"
            id="input1"
            value={bill}
            onChange={(e) => setBill(Number(e.target.value))}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
          <label htmlFor="input2" className="text-gray-700">
            🫵 Your Expense
          </label>
          <input
            className="text-center border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            type="number"
            value={myExpenses}
            onChange={(e) => setMyExpenses(Number(e.target.value))}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
          <label htmlFor="select" className="text-gray-700">
            🤑 Who is Paying the Bill?
          </label>
          <select
            className="text-center border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={whoPay}
            onChange={(e) => setWhoPay(Number(e.target.value))}
          >
            <option value={1}>You</option>
            <option value={2}>{friend.name}</option>
          </select>
        </div>

        <div className="text-right">
          <button
            type="submit"
            className="bg-orange-500 w-full md:w-1/2 text-white py-2 px-6 rounded-lg hover:bg-orange-600"
          >
            Split Bill
          </button>
        </div>
      </form>
    </Modal>
  );
}

export default SplitBillModal;
