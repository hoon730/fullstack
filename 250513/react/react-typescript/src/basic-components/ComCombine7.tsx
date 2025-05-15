function Profile({ name, img }: { name: string; img: string }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>
        <img src={img} alt="" />
      </p>
    </div>
  );
}

function ComCombine7() {
  return (
    <div>
      <Profile name="전우진" img="./images/7.png" />
      <Profile name="도우경" img="./images/26.png" />
      <Profile name="리아박" img="./images/33.png" />
    </div>
  );
}

export default ComCombine7;
