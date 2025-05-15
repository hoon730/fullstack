// function FunComProps6(props: {
//     name: string;
//     age: number;
//     imgUrl: string;
//     imgSize: number;
//   }) {
//     return (
//       <div>
//         <h2>{props.name}</h2>
//           <p><img src={props.imgUrl} width={props.imgSize} alt="" /></p>
//       </div>
//     );
//   }

//   export default FunComProps6;

interface Props {
  name: string;
  age: number;
  imgUrl: string;
  imgSize: number;
}

function FunComProps6(props: Props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>
        <img src={props.imgUrl} width={props.imgSize} alt="" />
      </p>
    </div>
  );
}

export default FunComProps6;
