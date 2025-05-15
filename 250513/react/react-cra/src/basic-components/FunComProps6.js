function FunComProps6({ name, age, imgUrl, imgSize }) {
  return (
    <div>
      <h2>부모로 부터 객체값 전달받기</h2>
      <p>{name}</p>
      <p>
        <img src={imgUrl} alt="사진" width={imgSize} />
      </p>
    </div>
  );
}
export default FunComProps6;
