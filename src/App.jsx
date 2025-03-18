import 'bulma/css/bulma.css';
import './App.scss';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [goods, setGoods] = useState('0');

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">No goods selected</h1>

      <h1 className="title is-flex is-align-items-center">
        {goods} is selected
        <button data-cy="ClearButton" type="button" className="delete ml-3" />
      </h1>

      <table className="table">
        <tbody>
          <tr data-cy="Good">
            <td>
              {goods.map(good => (
                <button
                  data-cy="AddButton"
                  type="button"
                  className="button"
                  onClick={() => {
                    setGoods(good);
                  }}
                >
                  + {good}
                </button>
              ))}
            </td>

            <td data-cy="GoodTitle" className="is-vcentered">
              {good}
            </td>
          </tr>

          <tr data-cy="Good" className="has-background-success-light">
            <td>
              <button
                data-cy="RemoveButton"
                type="button"
                className="button is-info"
              >
                -
              </button>
            </td>

            <td data-cy="GoodTitle" className="is-vcentered">
              Jam
            </td>
          </tr>

          <tr data-cy="Good">
            <td>
              <button data-cy="AddButton" type="button" className="button">
                +
              </button>
            </td>

            <td data-cy="GoodTitle" className="is-vcentered">
              Garlic
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  );
};

// export const App = () => (
//   <main className="section container">
//     <h1 className="title is-flex is-align-items-center">No goods selected</h1>

//     <h1 className="title is-flex is-align-items-center">
//       Jam is selected
//       <button data-cy="ClearButton" type="button" className="delete ml-3" />
//     </h1>

//     <table className="table">
//       <tbody>
//         <tr data-cy="Good">
//           <td>
//             <button data-cy="AddButton" type="button" className="button">
//               +
//             </button>
//           </td>

//           <td data-cy="GoodTitle" className="is-vcentered">
//             Dumplings
//           </td>
//         </tr>

//         <tr data-cy="Good" className="has-background-success-light">
//           <td>
//             <button
//               data-cy="RemoveButton"
//               type="button"
//               className="button is-info"
//             >
//               -
//             </button>
//           </td>

//           <td data-cy="GoodTitle" className="is-vcentered">
//             Jam
//           </td>
//         </tr>

//         <tr data-cy="Good">
//           <td>
//             <button data-cy="AddButton" type="button" className="button">
//               +
//             </button>
//           </td>

//           <td data-cy="GoodTitle" className="is-vcentered">
//             Garlic
//           </td>
//         </tr>
//       </tbody>
//     </table>
//   </main>
// );
