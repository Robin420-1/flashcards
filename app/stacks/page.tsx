import CardStack from "../../components/cardstack";

export default function StacksPage(): JSX.Element {
  return (
    <main>
      <h1>Flashcards</h1>
      <CardStack
        title="Quotes"
        firstCardText={'Which Author wrote the following quote?\n\n"To be or not to be, that is the question."'}
        favourite={true}
        successRate={0.785}
      />
    </main>
  );
}
