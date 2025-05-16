function ComCondition1(isTrue, colorPink, colorSky) {
    return( 
        <div className="background" style={{backgroundColor: isTrue ? colorSky : colorPink}}>
            <h2>조건부 렌더링</h2>
            <p>참이면 배경을 하늘색, 거짓이면 배경을 핑크색</p>
        </div>
    )
}
export default ComCondition1;
