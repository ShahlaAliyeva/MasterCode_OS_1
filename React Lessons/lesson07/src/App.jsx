import CreateCustomer from "./features/costumer/CreateCustomer";
import Customer from "./features/costumer/Customer";

import AccountOperations from "./features/account/AccountOperations";
import BalanceDisplay from "./features/account/BalanceDisplay";

import { useSelector } from "react-redux";

function App() {
  const fullName = useSelector((store) => store.costumer.fullName);

  return (
    <div>
      <h1>🏦 The React-Redux Bank ⚛️</h1>
      {!fullName ? (
        <CreateCustomer />
      ) : (
        <>
          <Customer />
          <AccountOperations />
          <BalanceDisplay />
        </>
      )}
    </div>
  );
}

export default App;
