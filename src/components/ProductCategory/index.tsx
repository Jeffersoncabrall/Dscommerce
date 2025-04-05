import "./styles.css";

type ProductCategoryProps = {
  category: string[];
};

export default function ProductCategory({ category }: ProductCategoryProps) {
  return (
    <div className="dsc-category-container">
      {category.map((cat, index) => (
        <span key={index} className="dsc-category">
          {cat}
        </span>
      ))}
    </div>
  );
}
