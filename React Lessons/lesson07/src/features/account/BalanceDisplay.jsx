import { connect } from "react-redux";
import PropTypes from "prop-types";

function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function BalanceDisplay({ balance }) {
  return <div className="balance">{formatCurrency(balance)}</div>;
}

function mapStateToProps(state) {
  return {
    balance: state.account.balance,
  };
}

BalanceDisplay.propTypes = {
  balance: PropTypes.number,
};

export default connect(mapStateToProps)(BalanceDisplay);
