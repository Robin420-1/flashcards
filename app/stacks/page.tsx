import CardStack from "../../components/cardstack";

export default function StacksPage() {
  return (
    <main>
      <h3>Flashcards</h3>
      <CardStack
        title="Quotes"
        firstCardText={'Which Author wrote the following quote?\n\n"To be or not to be, that is the question."'}
        favourite={true}
        successRate={0.785}
      />
    </main>
  );
}
