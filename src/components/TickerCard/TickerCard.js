import "./TickerCard.css";

const TickerCard = ({ ticker }) => {
  const { base, last, market, timestamp, target, trade_url, volume } = ticker;

  return (
    <>
      <div className="card">
        <p className="base-target">
          {base}/{target}
        </p>
        <a className="link" target="blank" href={trade_url}>
          View more
        </a>
        <p className="last-value">
          <span className="label">Last value: </span>
          {last}
          <span className="target"> {target}</span>
        </p>
        <p className="market-name">
          <span className="label">Market: </span>
          {market}
        </p>
        <p className="last-trade">
          <span className="label">Last trade: </span>
          {timestamp}
        </p>
        <p className="market-volume">
          <span className="label">Market volume: </span>
          {volume}
        </p>
      </div>
    </>
  );
};

export default TickerCard;
