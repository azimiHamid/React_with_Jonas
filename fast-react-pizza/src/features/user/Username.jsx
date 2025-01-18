import { useSelector } from 'react-redux';

function Username() {
  const username = useSelector((store) => store.user.username);
  //*   👇🏽 The user in store.user.username comes from store 👇🏽:
  //   ?   const store = configureStore({
  //   ?     reducer: {
  //   ?       user: userReducer,
  //   ?     },
  //   ?   });

  // console.log(username);

  if (!username) return null;

  return (
    <div className="hidden text-sm font-semibold md:block">{username}</div>
  );
}

export default Username;

//* NOTES
// state.user.username: The default behavior because the user key comes from your store configuration.

// state.username: Possible if you use userReducer directly without the user key.

// Keeping state under a namespace (like user) is good practice for scalable apps.
