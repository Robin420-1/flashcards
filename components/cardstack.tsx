type CardStackProps = {
  title: string;
  firstCardText: string;
  favourite: boolean;
  successRate: number;
};

export default function CardStack({
  title,
  firstCardText,
  favourite,
  successRate,
}: CardStackProps) {
  return (
    <div id="cardstack" style={{width: 300}}>
      <button>
        <h2>{title}</h2>
        <p style={{whiteSpace: "pre-wrap"}}>{firstCardText}</p>
      </button>
    </div>
  );
}
