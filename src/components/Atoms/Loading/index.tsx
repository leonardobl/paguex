import * as S from "./styles";

export function Loading() {
  return (
    <S.Wrapper>
      <S.WrapperImgs>
        {/* <S.ImgLogo src={"/assets/imgs/escudo.svg"} alt="logo" /> */}
        <S.ImgLoad src={"/assets/svg/load.svg"} alt="Loading" />
      </S.WrapperImgs>
      <span>Carregando...</span>
    </S.Wrapper>
  );
}
