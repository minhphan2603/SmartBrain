import React from 'react';

const FaceRecognition = ({ imageUrl, faceBoxes }) => {
    // const facesImg = document.getElementById('facesImg');
    // if (facesImg !== null) {
    //     const facesImgWidth = Number(facesImg.width);
    //     const facesImgHeight = Number(facesImg.height);
    //     console.log(facesImgWidth, facesImgHeight);
    // }
    return (
        <div className='center ma5' >
            <div style={{ position: 'relative' }}>
                <img src={imageUrl} alt="" width='500px' height='100%' id='facesImg' />
                {faceBoxes.map((faceBox,index) => {
                    return (
                        <div key={index}
                            style={{
                                border: '2px solid blue',
                                position: 'absolute',
                                top: faceBox.top,
                                left: faceBox.left,
                                bottom: faceBox.bottom,
                                right: faceBox.right
                            }}>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default FaceRecognition;