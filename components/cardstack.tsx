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
    <div id="cardstack">
      <h2>{title}</h2>
      <p style={{whiteSpace: "pre"}}>{firstCardText}</p>
    </div>
  );
}
