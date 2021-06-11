const panda = document.getElementById('panda');
const ears = document.getElementById('ears');
const earLeft = document.getElementById('ear-left');
const earRight = document.getElementById('ear-right');
const eyeBrows = document.getElementById('eyebrows');
const eyeBrowLeft = document.getElementById('eyebrow-left');
const eyeBrowRight = document.getElementById('eyebrow-right');
const eyes = document.getElementById('eyes');
const eyeLeft = document.getElementById('eye-left');
const eyeRight = document.getElementById('eye-right');
const tear = document.getElementById('tear');
const mouth = document.getElementById('mouth');

const sadAnimation = () => {
    let eyeHeight = 70;
    setInterval(() => {
        if (eyeHeight == 3){
            clearInterval();
        }
        else{
            eyeHeight--;
            eyes.style.alignItems = 'flex-end';
            eyeLeft.style.height = `${eyeHeight}px`;
            eyeRight.style.height = `${eyeHeight}px`;            
        }
    }, 10)

    let earHeight = 70;
    let earsMargin = 0;
    setInterval(() => {
       if (earHeight == 5){
           clearInterval();
       }
       else{
            earHeight--;
            if (earsMargin != 65){
                earsMargin++;
            }
            earLeft.style.height = `${earHeight}px`;
            earRight.style.height = `${earHeight}px`;
            ears.style.marginTop = `${earsMargin}px`;
       }
    }, 10)

    let mouthRotateDeg = 180;
    let mouthBorderRadius = 0;
    setInterval(() => {
        if (mouthRotateDeg == 0){
            clearInterval();
        }
        else{
            mouthRotateDeg = mouthRotateDeg - 2;
            mouthBorderRadius++;
            console.log(mouthRotateDeg)
            mouth.style.borderRadius = `100%/${mouthBorderRadius}px ${mouthBorderRadius}px 0 0`;
            mouth.style.transform = `rotateX(${mouthRotateDeg}deg)`
        }
    }, 10)

    let eyeBrowsPadding = 0
    setInterval(() => {
        if (eyeBrowsPadding == 40){
            clearInterval()
        }
        else{
            eyeBrowsPadding++;
            eyeBrows.style.paddingTop = `${eyeBrowsPadding}px`;
        }
    }, 10);
    
    let tearTop = 280;
    setInterval(() => {
        if (tearTop == 150){
            clearInterval();
        }
        else{
            tearTop++;
            tear.style.opacity = '100%';
            tear.style.top = `${tearTop}px`;
        }
    }, 1)
};

const happyAnimation = () => {
    let eyeHeight = 70;
    setInterval(() => {
        if (eyeHeight == 80){
            clearInterval();
        }
        else{
            eyeHeight++;
            eyeLeft.style.height = `${eyeHeight}px`;
            eyeRight.style.height = `${eyeHeight}px`;            
        }
    }, 50)

    let mouthBorderRadius = 0;
    setInterval(() => {
        if (mouthBorderRadius == 130){
            clearInterval();
        }
        else{
            mouthBorderRadius++;
            mouth.style.borderRadius = `200%/${mouthBorderRadius}px ${mouthBorderRadius}px 0 0`;
        }
    }, 1)
}

const angryAnimation = () => {
    let eyeBrowLeftRotation = 0;
    let eyeBrowRightRotation = 0;

    setInterval(() => {
        if ((eyeBrowRightRotation == 15 && eyeBrowRightRotation == 15)){
            clearInterval();
        }
        else{
            eyeBrowLeftRotation++;
            eyeBrowRightRotation++;
            
            eyeBrowLeft.style.transform = `skewY(${eyeBrowLeftRotation}deg)`;
            eyeBrowRight.style.transform = `skewY(-${eyeBrowRightRotation}deg)`;
        }
    }, 10)

    let eyeLeftHeight = 75;
    let eyeRightHeight = 75;
    setInterval(() => {
        if (eyeLeftHeight == 65 && eyeRightHeight == 65){
            clearInterval();
        }
        else{
            eyeLeftHeight--;
            eyeRightHeight--;

            eyeLeft.style.height = `${eyeLeftHeight}px`;
            eyeRight.style.height = `${eyeRightHeight}px`;
        }
    }, 10)
}

const resetAnimations = () => {
    eyeBrows.style.paddingTop = '0px';
    eyeBrowRight.style.transform = 'skew(0deg)';
    eyeBrowLeft.style.transform = 'skew(0deg)';
    eyeLeft.style.backgroundColor = 'white !important';
    eyeRight.style.backgroundColor = 'white !important';
    eyes.style.alignItems = 'center';
    eyeLeft.style.height = '75px';
    eyeRight.style.height = '75px';
    earLeft.style.height = '70px';
    earRight.style.height = '70px';
    ears.style.marginTop = '0px';
    mouth.style.transform = 'rotateX(160deg)';
    mouth.style.borderRadius = '100%/10px 10px 0 0';
};
