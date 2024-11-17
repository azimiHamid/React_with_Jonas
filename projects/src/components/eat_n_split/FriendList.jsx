/* eslint-disable react/prop-types */
function FriendList({ friends, selectedFriendId, setSelectedFriendId }) {
  return (
    <ul className="space-y-4">
      {friends.map((friend, idx) => (
        <li
          key={idx}
          className={`flex items-center gap-4 p-4 rounded-lg ${
            selectedFriendId === idx ? "bg-orange-100" : "bg-orange-50"
          }`}
        >
          <img
            className="w-14 h-14 rounded-full object-cover"
            src={friend.url}
            alt={`${friend.name}`}
          />
          <div className="flex-1">
            <h4 className="text-lg font-semibold">{friend.name}</h4>
            <p className="text-gray-600">
              {friend.owe ?? `You and ${friend.name} are even.`}
            </p>
          </div>
          <button
            onClick={() => setSelectedFriendId(idx)}
            className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600"
          >
            Select
          </button>
        </li>
      ))}
    </ul>
  );
}
export default FriendList;
