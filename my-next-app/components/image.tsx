import NextImage from 'next/image'
import tw, { styled } from 'twin.macro'

// const ImageWrap = styled.span`
//     & > span {
//         ${tw`my-3`}
//     }
// `
// export const StyledImg1 = ({ ...props }) => {
//     return (
//         <ImageWrap>
//             <NextImage {...props} />
//         </ImageWrap>
//     )
// }

// const BaseImage = styled(NextImage)`
//   object-fit: contain;
//   width: auto !important;
//   position: relative !important;
//   height: 100% !important;
// `;

// const ImgContainer = styled.span`
//   > span {
//     position: unset !important;
//     height: 100%;
//   }
// `;

const BaseImage = styled(NextImage)`
    object-fit: contain;
    width: auto !important;
    position: relative !important;
    height: 100% !important;
`;

const ImgContainer = styled.span`
  > span {
    position: unset !important;
    height: 100%;
  }
`;

export const Image = (props) => {
    const { ...rest } = props;
    return (
        <ImgContainer>
            <BaseImage {...rest} layout="fill" />
        </ImgContainer>
    );
};
