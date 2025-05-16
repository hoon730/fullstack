interface IItemProps {
  title: string;
  imgUrl: string;
  imgSize?: number;
}

function Item({ title, imgUrl, imgSize = 70 }: IItemProps) {
  return (
    <div className="item-list">
      <h2>{title}</h2>
      <p>
        <img src={imgUrl} alt="" width={imgSize} height={imgSize} />
      </p>
    </div>
  );
}
function Gallery() {
  return (
    <div>
      <h2>갤러리</h2>
      <Item title="홍길동" imgUrl="./images/1.jpg" />
      <Item title="도우경" imgUrl="./images/2.jpg" />
      <Item title="리아박" imgUrl="./images/3.jpg" />
    </div>
  );
}
