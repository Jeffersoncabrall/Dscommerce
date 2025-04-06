import "./styles.css";

export default function ProductCategory({ categorie }: { categorie: string }) {
  return (
    <div>
      <span>{categorie}</span>
    </div>
  );
}
